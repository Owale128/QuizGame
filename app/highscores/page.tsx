'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import DisplayHighScores from '../component/DisplayHighScores';

 const HighScores = () => {
    const [highScores, setHighScores] = useState<{ username: string; score: number;}[]>([]);
    const router = useRouter();

    const handleBackBtn = () => {
      router.push('/score')
    }

    useEffect(() => {
      try {
        const fetchHighscores = async () => {
          const response = await axios.get('/api/highscores')
          setHighScores(response.data)
        }
        fetchHighscores()
      } catch (error) {
        console.error('Error fetching highscores:', error)
      }
        
    }, [])

  return (
    <div className="flex min-h-screen flex-col items-center p-24 text-center animate-fadeIn">
      <h1 className="font-bold text-3xl text-white mb-4 underline">Top 5 High Scores</h1>
      <DisplayHighScores highScores={highScores} handleBackBtn={handleBackBtn} />
    </div>
  )
}

export default HighScores