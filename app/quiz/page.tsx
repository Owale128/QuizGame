'use client'
import React, { useEffect, useState } from 'react'
import { IQuestion } from '../model/Question'
import { useRouter } from 'next/navigation'
import DisplayQuestions from '../component/DisplayQuestions'

const Quiz = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionsIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30)
  const [timerActive, setTimerActive] = useState(true)

  const router = useRouter();

  useEffect(() => {
    fetch('/api/questions')
    .then((res) => res.json())
    .then((data) => setQuestions(data))
  }, [])

  useEffect(() => {
    if (timerActive && timer > 0) {
      const interval = setInterval(() =>{
        setTimer(prev => prev - 1);
      }, 1000);

      return () => clearInterval(interval)

    } else if (timer === 0) {
      handleNextQuestion(false)
    }
  }, [timer, timerActive])

const handleAnswer = (answer: number) => {
  const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
  handleNextQuestion(isCorrect)
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

if (!questions.length) return <div className="text-center text-7xl text-white min-h-screen pt-64">Loading...</div>

  return (
    <div className="flex min-h-screen flex-col items-center p-24 text-center">
     
      <DisplayQuestions 
      question={questions[currentQuestionIndex]} 
      onAnswer={handleAnswer} 

      timer={timer}
      />

    </div>
  )
}

export default Quiz
