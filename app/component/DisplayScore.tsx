import router from 'next/router';
import React from 'react'

interface IDisplayScore {
    score: {username: string, score: number};
    handleQuitBtn: () => void;
    handleRetry: () => void;
    handleShowHighScores: () => void;
}

const DisplayScore = ({ score, handleQuitBtn, handleRetry, handleShowHighScores}: IDisplayScore) => {
  return (
    <div>

    <p className="text-xl text-white mb-2 mt-8"><span className="font-bold text-black">Username:</span> {score.username}</p>
    <p className="text-xl text-white"><span className="font-bold text-black">Score:</span> {score.score}</p>
    <div className="flex space-x-4 mt-6">
    <button className="border-2 border-black rounded p-1 bg-black text-white active:bg-white active:text-black md:hover:bg-white md:hover:text-black transition ease-in duration-150" onClick={handleQuitBtn}>Quit</button>
    <button className="border-2 border-black rounded p-1 bg-black text-white active:bg-white active:text-black md:hover:bg-white md:hover:text-black transition ease-in duration-150" onClick={handleRetry}>Retry</button>
    </div>
    <button
    className="border-2 border-black rounded p-1 mt-6 bg-black text-white active:bg-white active:text-black md:hover:bg-white md:hover:text-black transition ease-in duration-150"
    onClick={handleShowHighScores}>
    View Top 5 High Scores
    </button>

    </div>
  )
}

export default DisplayScore
