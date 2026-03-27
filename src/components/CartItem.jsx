import { useCart } from '../context/CartContext'

var CartItem = function(props) {
  var item = props.item
  var index = props.index
  var cart = useCart()
  var itemTotal = (item.price * item.quantity).toFixed(2)

  return (
    <div className={"opacity-0 animate-slide-in-right stagger-" + ((index % 20) + 1) + " group glass-card rounded-2xl p-5 sm:p-6 transition-all duration-400 hover:border-white/10"}>
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Image */}
        <div className="flex-shrink-0 self-center sm:self-start">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-gradient-to-br from-white to-gray-100 p-3 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-lg group-hover:shadow-violet-500/5">
            <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-grow min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="flex-grow min-w-0">
              <h3 className="text-sm font-semibold text-gray-200 leading-snug line-clamp-2 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-[11px] text-gray-600 mt-1 capitalize flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-violet-500"></span>{item.category}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {"$" + item.price.toFixed(2)} <span className="text-gray-700">each</span>
              </p>
            </div>
            <button onClick={function() { cart.removeFromCart(item.id, item.title) }} className="self-start btn-danger px-3 py-2 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              Remove
            </button>
          </div>

          {/* Quantity + Total */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.04]">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-gray-600 mr-1 font-medium uppercase tracking-wider">Qty</span>
              <button onClick={function() { cart.decreaseQuantity(item.id) }} disabled={item.quantity <= 1} className={"w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all duration-200 " + (item.quantity <= 1 ? 'bg-white/[0.02] text-gray-700 cursor-not-allowed' : 'btn-ghost text-white hover:scale-105 active:scale-95')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
              </button>
              <span className="w-10 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-sm font-bold text-white">{item.quantity}</span>
              <button onClick={function() { cart.increaseQuantity(item.id) }} className="w-8 h-8 rounded-lg gradient-primary text-white flex items-center justify-center text-sm font-bold transition-all duration-200 shadow-md shadow-violet-500/15 hover:shadow-violet-500/30 hover:scale-105 active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              </button>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider block">Total</span>
              <span className="text-xl font-bold gradient-text">{"$" + itemTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
