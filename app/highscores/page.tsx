'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

 const HighScores = () => {
    const [highScores, setHighScores] = useState<{ username: string; score: number;}[]>([]);
    const router = useRouter();

    const handleBackBtn = () => {
      router.push('/score')
    }

    useEffect(() => {
        fetch('/api/highscores')
        .then((res) => res.json())
        .then((data) => setHighScores(data))
        .catch((error) => console.error('Error fetching high scores:', error ))
    }, [])

  return (
        <div className="flex min-h-screen flex-col items-center p-24 text-center animate-fadeIn">
      <h1 className="font-bold text-3xl text-white mb-4 underline">Top 5 High Scores</h1>
      <table className="bg-black border">
        <thead>
          <tr>
            <th className="p-3  text-white">Rank</th>
            <th className="p-3  text-white">Username</th>
            <th className="p-3  text-white">Score</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map((player, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-4 text-lg text-white">{index + 1}</td>
              <td className="text-lg  text-white">{player.username}</td>
              <td className="text-lg  text-white">{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="border-2 border-black rounded p-1 bg-black text-white  active:bg-white active:text-black md:hover:bg-white md:hover:text-black transition ease-in duration-150 mt-3" onClick={handleBackBtn}>Back</button>
    </div>
  )
}

export default HighScores