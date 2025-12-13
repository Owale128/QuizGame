'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import DisplayScore from '../component/DisplayScore'
import { getMedalAndMessage } from '../lib/gameStyles'

const Score = () => {
const [score, setScore] = useState({
  username: '',
  score: 0
})
const router = useRouter()

useEffect(() => {
  const username = localStorage.getItem('username');
  if (!username) {
    router.push('/');
    return;
  }

  try {
    const fetchScore = async () => {
      const response = await axios.get(`/api/score?username=${username}`)
      setScore(response.data)
    }
    fetchScore()
  } catch (error) {
    console.error('Error fetching score:', error)
  }
}, [router]);

  const handleQuitBtn = () => {
    const isConfirmed = confirm('Are you sure?');

    if(isConfirmed) {
      localStorage.removeItem('username');
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
    <div className="flex items-center justify-center h-screen p-2">
      <div className="relative flex flex-col items-center justify-center w-full max-w-md">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-cyan-600/30 rounded-3xl blur-xl animate-pulse-glow"></div>

        <div className="relative flex flex-col items-center justify-center border-2 rounded-3xl border-white/30 w-full bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/50 animate-fadeIn p-8">
          <h1 className="font-black text-4xl mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg tracking-wider">
            RESULT
          </h1>

          <DisplayScore
            score={score}
            handleQuitBtn={handleQuitBtn}
            handleRetry={handleRetry}
            handleShowHighScores={handleShowHighScores}
            getMedalAndMessage={getMedalAndMessage}
          />
        </div>
      </div>
    </div>
  )
}

export default Score
