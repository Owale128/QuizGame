import { IConfirmModal } from '../model/IConfirmModal'

const ConfirmModal = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Yes',
  cancelText = 'No'
}: IConfirmModal) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onCancel}
      />

      <div className="relative w-full max-w-md animate-slideInUp">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-orange-500/30 to-red-500/30 rounded-2xl blur-xl animate-pulse-glow" />

        <div className="relative border-2 border-red-500/50 rounded-2xl p-6 bg-gradient-to-br from-slate-900/95 via-red-900/90 to-slate-900/95 backdrop-blur-xl shadow-2xl shadow-red-500/50">
          <div className="text-center mb-4">
            <div className="text-6xl animate-pulse">⚠️</div>
          </div>

          <h2 className="text-2xl font-black text-center mb-3 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            {title}
          </h2>

          <p className="text-gray-300 text-center mb-6">
            {message}
          </p>

          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="group relative flex-1 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg font-semibold text-white shadow-lg shadow-gray-600/50 hover:shadow-gray-600/70 hover:scale-105 active:scale-95 transition-all duration-200 border border-gray-500/50"
            >
              <span className="relative z-10">{cancelText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>

            <button
              onClick={onConfirm}
              className="group relative flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg font-semibold text-white shadow-lg shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105 active:scale-95 transition-all duration-200 border border-red-400/50"
            >
              <span className="relative z-10">{confirmText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
