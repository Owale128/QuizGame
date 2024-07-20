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
  }

  useEffect(() => {
    fetch('/api/questions')
    .then((res) => res.json())
    .then((data) => setQuestions(data))
  }, [])

const handleAnswer = (answer: string) => {
  if (answer === questions[currentQuestionIndex].answer){
    setScore(score + 1)
  }

  const nextQuestionIndex = currentQuestionIndex + 1;

  if(nextQuestionIndex < questions.length) {
    setCurrentQuestionsIndex(nextQuestionIndex);
  } else {
    const username = localStorage.getItem('username');

    fetch('/api/result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ username, score })
    }).then(() => {
      router.push('/result')
    })
  }
}

if (!questions.length) return <div>Loading...</div>

  return (
    <div className="flex min-h-screen flex-col items-center p-24 text-center">

      <h1 className="font-bold text-3xl">Quiz Page</h1>

      <DisplayQuestions question={questions[currentQuestionIndex]} onAnswer={handleAnswer} handleQuit={handleQuit}/>

    </div>
  )
}

export default Quiz
