'use client'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { getRankStyle } from '../lib/gameStyles';
import DisplayHighScores from '../component/DisplayHighScores';

 const HighScores = () => {
    const [highScores, setHighScores] = useState<{ username: string; score: number;}[]>([]);
    const router = useRouter();

    const handleBackBtn = () => {

      const username = localStorage.getItem('username');
      if (username) {
        router.push('/score')
      } else {
        router.push('/')
      }
    }

    useEffect(() => {
      const username = localStorage.getItem('username');
      if (!username) {
        router.push('/');
        return;
      }

      try {
        const fetchHighscores = async () => {
          const response = await axios.get('/api/highscores')
          setHighScores(response.data)
        }
        fetchHighscores()
      } catch (error) {
        console.error('Error fetching highscores:', error)
      }

    }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-2">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-orange-500/30 to-yellow-500/30 rounded-3xl blur-2xl animate-pulse-glow"></div>

        <div className="relative border-2 border-white/30 rounded-3xl p-8 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95 backdrop-blur-xl shadow-2xl shadow-yellow-500/50 animate-fadeIn">
          <DisplayHighScores highScores={highScores} handleBackBtn={handleBackBtn} getRankStyle={getRankStyle} />
        </div>
      </div>
    </div>
  )
}

export default HighScores