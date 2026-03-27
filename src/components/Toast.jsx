import { useCart } from '../context/CartContext'

var Toast = function() {
  var cart = useCart()

  return (
    <div className="fixed top-24 right-6 z-50 flex flex-col gap-3">
      {cart.toasts.map(function(toast) {
        var isSuccess = toast.type === 'success'
        var cls = "animate-toast-in flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border max-w-sm cursor-pointer transition-all duration-300 hover:scale-[1.02] " +
          (isSuccess
            ? 'bg-emerald-950/80 border-emerald-500/20 text-emerald-200 shadow-emerald-500/10'
            : 'bg-rose-950/80 border-rose-500/20 text-rose-200 shadow-rose-500/10')
        return (
          <div key={toast.id} onClick={function() { cart.removeToast(toast.id) }} className={cls} style={{ backdropFilter: 'blur(16px)' }}>
            <div className={"w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 " + (isSuccess ? 'bg-emerald-500/20' : 'bg-rose-500/20')}>
              <span className="text-sm">{isSuccess ? '✓' : '✕'}</span>
            </div>
            <p className="text-sm font-medium leading-snug">{toast.message}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Toast
