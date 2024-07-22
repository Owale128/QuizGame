'use client'
import React, { useEffect, useState } from 'react'
import { IQuestion } from '../model/Question'
import { useRouter } from 'next/navigation'
import DisplayQuestions from '../component/DisplayQuestions'

const Quiz = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionsIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const router = useRouter();

  const handleQuit = () => {
    router.push('/')
    alert('Are you sure?')
  }

  useEffect(() => {
    fetch('/api/questions')
    .then((res) => res.json())
    .then((data) => setQuestions(data))
  }, [])

const handleAnswer = (answer: number) => {
  const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
  const newScore = isCorrect ? score + 1 : score

  const nextQuestionIndex = currentQuestionIndex + 1;

  if(nextQuestionIndex < questions.length) {
    setCurrentQuestionsIndex(nextQuestionIndex);
    setScore(newScore)
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

if (!questions.length) return <div className="text-center mt-48 text-3xl">Loading...</div>

  return (
    <div className="flex min-h-screen flex-col items-center p-24 text-center">

      <h1 className="font-bold text-3xl mb-2">Quiz</h1>

      <DisplayQuestions question={questions[currentQuestionIndex]} onAnswer={handleAnswer} handleQuit={handleQuit}/>

    </div>
  )
}

export default Quiz
