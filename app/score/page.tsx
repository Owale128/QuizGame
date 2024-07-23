'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const Score = () => {
const [score, setScore] = useState({
  username: '',
  score: 0
})
const router = useRouter()

useEffect(() => {
  const username = localStorage.getItem('username');
  fetch(`/api/score?username=${username}`)
  .then((res) => res.json())
  .then((data) => setScore(data));
}, []);

  const handleHomeBtn = () => {
    router.push('/')
  }

  const handleRetry = () => {
    router.push('/quiz')
  }

  return (
    <div className="flex flex-col items-center justify-center border-2 rounded-2xl border-black w-3/12 mx-auto my-56 h-72 bg-gradient-to-br from-[#e3e2e2ec] to-[#242424db] animate-fadeIn">
     
     <h1 className="font-bold text-3xl underline">Result</h1>
      <p className="text-xl text-white mb-2 mt-8"><span className="font-bold text-black">Username:</span> {score.username}</p>
      <p className="text-xl text-white"><span className="font-bold text-black">Score:</span> {score.score}</p>
      <div className="flex space-x-4 mt-6">
          <button className="border-2 border-black rounded p-1 bg-black text-white hover:bg-white hover:text-black transition ease-in duration-150" onClick={handleHomeBtn}>Home</button>
          <button className="border-2 border-black rounded p-1 bg-black text-white hover:bg-white hover:text-black transition ease-in duration-150" onClick={handleRetry}>Retry</button>
          </div>
          <button
        className="border-2 border-black rounded p-1 mt-6 bg-black text-white hover:bg-white hover:text-black transition ease-in duration-150"
        onClick={() => router.push('/highscores')}
      >
        View Top 5 High Scores
      </button>
    </div>
  )
}

export default Score
