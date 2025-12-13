import { IDisplayScore } from '../model/IDisplayScore'

const DisplayScore = ({ score, result, handleQuitBtn, handleRetry, handleShowHighScores}: IDisplayScore) => {

  return (
    <div className="w-full animate-slideInUp">

      <div className="text-center mb-6">
        <div className={'text-5xl md:text-7xl mb-3 animate-trophy-bounce inline-block'}>
          {result.medal}
        </div>
        <div className={`text-2xl font-bold ${result.color} tracking-wider drop-shadow-lg`}>
          {result.message}
        </div>
      </div>

      <div className={`bg-gradient-to-br ${result.bgGradient} backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-6 shadow-2xl`}>
        <div className="text-center space-y-3">
          <p className="text-lg">
            <span className="text-gray-300 font-semibold">Player:</span>{' '}
            <span className="text-white font-bold text-xl">{score.username}</span>
          </p>
          <div className="border-t border-white/20 pt-3">
            <p className="text-sm text-gray-400 mb-1">FINAL SCORE</p>
            <p className={`text-5xl font-black ${result.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`}>
              {score.score}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 mb-4">
        <button
          className="group relative px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 rounded-lg font-semibold text-white shadow-lg shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105 active:scale-95 transition-all duration-200 border border-red-400/50"
          onClick={handleQuitBtn}
        >
          <span className="relative z-10">Quit</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>

        <button
          className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 active:scale-95 transition-all duration-200 border border-purple-400/50"
          onClick={handleRetry}
        >
          <span className="relative z-10">Retry</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>
      </div>

      <button
        className="group relative w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 active:scale-95 transition-all duration-200 border border-cyan-400/50"
        onClick={handleShowHighScores}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          View Top 5 High Scores
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </button>
    </div>
  )
}

export default DisplayScore
