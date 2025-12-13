import { IUserForm } from '../model/IUserForm'

const UserForm = ({username, setUserName, handleSubmit}: IUserForm) => {

  return (
    <div className="relative w-full max-w-md mx-auto px-2">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-cyan-600/30 rounded-3xl blur-2xl animate-pulse-glow"></div>

      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col items-center justify-center border-2 border-white/30 rounded-3xl p-10 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/50 animate-fadeIn"
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2 tracking-wider">
            QUIZ MASTER
          </h1>
          <p className="text-gray-400 text-sm">Test your knowledge!</p>
        </div>

        <div className="w-full mb-6">
          <label className="block text-sm font-semibold text-gray-300 mb-2 text-center">
            Enter Your Name
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Player name..."
            maxLength={12}
            className="w-full text-center text-lg border-2 border-cyan-500/50 rounded-xl p-4 bg-slate-800/80 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 backdrop-blur-sm shadow-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-xl font-bold text-white text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            START QUIZ
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>

        <div className="mt-6 text-gray-500 text-xs text-center">
          <p>Good luck! 🍀</p>
        </div>
      </form>
    </div>
  )
}

export default UserForm
