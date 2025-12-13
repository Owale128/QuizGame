import { IDisplayHighScores } from "../model/IDisplayHighScores"

const DisplayHighScores = ({highScores, handleBackBtn, getRankStyle}:IDisplayHighScores) => {

  return (
    <div className="w-full animate-slideInUp">

      <div className="text-center mb-6">
        <h2 className="text-3xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg mb-2">
          TOP 5 LEGENDS
        </h2>
        <p className="text-gray-400 text-sm">Hall of Fame</p>
      </div>

      <div className="space-y-3 mb-6">
        {highScores.map((player, index) => {
          const style = getRankStyle(index)
          return (
            <div
              key={index}
              className={`relative bg-gradient-to-r ${style.bgGradient} backdrop-blur-sm border ${style.borderColor} rounded-xl p-4 ${style.glow} transform hover:scale-102 transition-all duration-200 animate-slideInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`text-3xl font-bold w-12 text-center ${index < 3 ? 'animate-trophy-bounce' : ''}`}>
                    {style.medal}
                  </div>

                  <div className="flex-1">
                    <p className={`font-bold text-lg ${style.textColor} truncate`}>
                      {player.username}
                    </p>
                    {index === 0 && (
                      <p className="text-xs text-yellow-500/80">Champion</p>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <p className={`text-2xl font-black ${style.textColor} drop-shadow-lg`}>
                    {player.score}
                  </p>
                  <p className="text-xs text-gray-500">points</p>
                </div>
              </div>

              {index < 3 && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer rounded-xl pointer-events-none"></div>
              )}
            </div>
          )
        })}
      </div>

      <button
        className="group relative w-full px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg font-semibold text-white shadow-lg shadow-slate-700/50 hover:shadow-slate-700/70 hover:scale-105 active:scale-95 transition-all duration-200 border border-slate-600/50"
        onClick={handleBackBtn}
      >
        <span className="relative z-10">← Back</span>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </button>
    </div>
  )
}

export default DisplayHighScores
