'use client'
import React, { useState } from 'react'
import { IQuestion } from '../model/Question'
import { useRouter } from 'next/navigation'

const Quiz = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([])

const router = useRouter();
const handleQuit = () => {
    router.push('/')
}
const handleShowResult = () => {
    router.push('/result')
}

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="font-bold text-3xl">Quiz Page</h1>

            <button className="border-2 border-black rounded p-1" onClick={handleShowResult}>Show Result</button>

            <button className="border-2 border-black rounded p-1" onClick={handleQuit}>Quit</button>
       
    </div>
  )
}

export default Quiz
