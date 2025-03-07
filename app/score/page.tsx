'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import DisplayScore from '../component/DisplayScore'


const Score = () => {
const [score, setScore] = useState({
  username: '',
  score: 0
})
const router = useRouter()

useEffect(() => {
  try {
    const fetchScore = async () => {
      const username = localStorage.getItem('username');
      const response = await axios.get(`/api/score?username=${username}`)
      setScore(response.data)
    }
    fetchScore() 
  } catch (error) {
    console.error('Error fetching score:', error)
  }
}, []);

  const handleQuitBtn = () => {
    const isConfirmed = confirm('Are you sure?');

    if(isConfirmed) {
      router.push('/')
    }
  }

  const handleRetry = () => {
    router.push('/quiz')
  }

  const handleShowHighScores = () => {
    router.push('/highscores')
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col items-center justify-center border-2 rounded-2xl border-black w-72  md:w-72 md:my-auto mx-auto lg:my-auto h-72 bg-gradient-to-br from-[#e3e2e2ec] to-[#242424db] animate-fadeIn">
     <h1 className="font-bold text-3xl underline">Result</h1>
     <DisplayScore 
     score={score} 
     handleQuitBtn={handleQuitBtn}
     handleRetry={handleRetry} 
     handleShowHighScores={handleShowHighScores}
      />
    </div>
    </div>
  )
}

export default Score
