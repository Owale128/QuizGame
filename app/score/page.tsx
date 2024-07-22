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

  return (
    <div className="flex flex-col items-center justify-center border-2 rounded-2xl border-black w-3/12 mx-auto my-56 h-72 bg-gradient-to-br from-[#e3e2e2ec] to-[#242424db]">
     
     <h1 className="font-bold text-3xl underline">Result</h1>
      <p className="text-xl mb-2 mt-8"><span className="font-bold">Username:</span> {score.username}</p>
      <p className="text-xl"><span className="font-bold">Score:</span> {score.score}</p>
          <button className="border-2 border-black rounded p-1 mt-6 bg-black text-white hover:bg-red-700 transition ease-in duration-150" onClick={handleHomeBtn}>Home</button>
        
    </div>
  )
}

export default Score
