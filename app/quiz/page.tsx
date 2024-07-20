'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Questions = () => {
const router = useRouter();

const handleQuit = () => {
    router.push('/')
}
const handleShowResult = () => {
    router.push('/result')
}

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="font-bold text-3xl">Questions Page</h1>

            <button className="border-2 border-black rounded p-1" onClick={handleShowResult}>Show Result</button>

            <button className="border-2 border-black rounded p-1" onClick={handleQuit}>Quit</button>
       
    </div>
  )
}

export default Questions
