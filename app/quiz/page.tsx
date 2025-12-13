'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { IQuestion } from '../model/Question'
import { getTimerStyle } from '../lib/gameStyles'
import DisplayQuestions from '../component/DisplayQuestions'
import { shuffleArray, shuffleQuestionOptions } from '../lib/shuffle'

const Quiz = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionsIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30)
  const [timerActive, setTimerActive] = useState(true)

  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) {
      router.push('/');
      return;
    }
  }, [router]);

  useEffect(() => {
    try {
      const fetchScore = async () => {
       const response = await axios.get<IQuestion[]>('/api/questions')
       const questionsWithShuffledOptions = response.data.map(shuffleQuestionOptions)
       const shuffledQuestions = shuffleArray(questionsWithShuffledOptions)
       setQuestions(shuffledQuestions)
      }
      fetchScore()
    } catch (error) {
      console.error('Error fetch questions:', error)
    }
  }, [])

  useEffect(() => {
    if (timerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);

      return () => clearInterval(interval)

    } else if (timer === 0 && timerActive) {
      setTimerActive(false)
      handleNextQuestion(false)
    }
  }, [timer, timerActive])

const handleAnswer = (answer: number) => {
  setTimerActive(false)
  const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
  handleNextQuestion(isCorrect)
  }

  const handleQuit = () => {
   const isConfirmed = confirm('Are you sure?');

    if(isConfirmed) {
      router.push('/')
    } else {
      router.push('/quiz')
    }
  }

  const handleNextQuestion = (isCorrect: boolean) => {
    const newScore = isCorrect ? score + 1 : score
    const nextQuestionIndex = currentQuestionIndex + 1;
    if(nextQuestionIndex < questions.length) {
    setCurrentQuestionsIndex(nextQuestionIndex);
    setScore(newScore)
    setTimer(30)
    setTimerActive(true)
  } else {
    const username = localStorage.getItem('username');
  
    fetch('/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ username, score: newScore })
    }).then(() => {
      router.push('/score')
    })
  }
}

if (!questions.length) return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="text-7xl mb-4 animate-trophy-bounce">⏳</div>
        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
          Loading Quiz...
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-6 overflow-y-auto">
      <DisplayQuestions
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        timer={timer}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        handleQuit={handleQuit}
        getTimerStyle={() => getTimerStyle(timer)}
      />
    </div>
  )
}

export default Quiz
