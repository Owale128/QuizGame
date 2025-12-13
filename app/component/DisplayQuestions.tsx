import { IQuestions } from '../model/IQuestions';

const DisplayQuestions = ({question, onAnswer, timer, questionNumber, totalQuestions, handleQuit, getTimerStyle}: IQuestions) => {

  return (
    <div className="relative w-full max-w-xl mx-auto px-2">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>

      <div className="relative border-2 border-white/30 rounded-3xl p-4 md:p-6 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/30 animate-fadeIn">

        <div className="flex justify-between items-center mb-4">
          <div className={`text-xl md:text-2xl font-bold ${getTimerStyle()} drop-shadow-lg`}>
            ⏱️ {timer}s
          </div>
          <div className="text-xs md:text-sm text-gray-400">
            Question {questionNumber}/{totalQuestions}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-4 md:p-6 mb-4 md:mb-6 backdrop-blur-sm">
          <h2 className="font-bold text-lg md:text-xl text-white leading-relaxed">
            {question.question}
          </h2>
        </div>

        <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          {question.options.map((option, index) => (
            <li
              key={index}
              onClick={() => onAnswer(index)}
              className="group relative border-2 border-cyan-500/50 p-3 md:p-4 rounded-xl cursor-pointer bg-gradient-to-r from-slate-800/80 to-slate-700/80 text-white hover:from-cyan-500 hover:to-blue-600 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-500/50 flex items-center justify-center font-bold text-sm md:text-base text-cyan-400 group-hover:bg-white group-hover:text-cyan-600 transition-colors">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="font-medium text-sm md:text-base leading-snug">{option}</span>
              </div>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 transition-opacity duration-200 pointer-events-none"></div>
            </li>
          ))}
        </ul>

        <button
          className="group relative w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold text-white shadow-lg shadow-red-600/50 hover:shadow-red-600/70 hover:scale-105 active:scale-95 transition-all duration-200 border border-red-500/50"
          onClick={handleQuit}
        >
          <span className="relative z-10">Quit Game</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>
      </div>
    </div>
  )
}

export default DisplayQuestions
