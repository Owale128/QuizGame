'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const Score = () => {
const [result, setResult] = useState({
  username: '',
  score: 0
})
const router = useRouter()

useEffect(() => {
  const username = localStorage.getItem('username');
  fetch(`/api/score?username=${username}`)
  .then((res) => res.json())
  .then((data) => setResult(data));
}, []);

  const handleHomeBtn = () => {
    router.push('/')
  }

  return (
    <div className="flex flex-col items-center justify-center border-2 border-black w-3/12 mx-auto my-36 h-72">
     
     <h1 className="font-bold text-3xl">Result</h1>
      <p>Username: {result.username}</p>
      <p>Score: {result.score}</p>
          <button className="border-2 border-black rounded p-1" onClick={handleHomeBtn}>Home</button>
        
    </div>
  )
}

export default Score
