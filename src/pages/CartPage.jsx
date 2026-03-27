import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'

var CartPage = function() {
  var cart = useCart()

  if (cart.cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center">
        <div className="text-center animate-scale-in max-w-sm">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-violet-500/10 rounded-full blur-2xl"></div>
            <div className="relative w-full h-full rounded-full glass-card flex items-center justify-center animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Cart is empty</h2>
          <p className="text-gray-600 text-sm mb-8">Add some products to get started.</p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 animate-fade-in-up">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-300 transition-colors duration-300 mb-5 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to products
          </Link>
          <div className="flex items-end gap-3">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              <span className="text-white">Your </span><span className="gradient-text">Cart</span>
            </h1>
            <span className="text-xs text-gray-600 font-medium pb-1.5 border-b border-white/5">{cart.totalItems} {cart.totalItems === 1 ? 'item' : 'items'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-3">
            {cart.cartItems.map(function(item, index) {
              return <CartItem key={item.id} item={item} index={index} />
            })}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="glass-strong rounded-2xl p-6">
                <h2 className="text-sm font-bold text-white mb-5 uppercase tracking-wider flex items-center gap-2">
                  <div className="w-1 h-4 rounded-full gradient-primary"></div>
                  Summary
                </h2>

                <div className="space-y-4">
                  {/* Item list */}
                  <div className="space-y-2.5 max-h-44 overflow-y-auto pr-1">
                    {cart.cartItems.map(function(item) {
                      return (
                        <div key={item.id} className="flex items-center justify-between text-xs">
                          <span className="text-gray-500 truncate max-w-[55%]">{item.title.substring(0, 22)}...</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-700">x{item.quantity}</span>
                            <span className="text-gray-300 font-medium tabular-nums">{"$" + (item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="h-px bg-white/[0.06]"></div>

                  {/* Totals */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="text-gray-200 font-medium tabular-nums">{"$" + cart.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-emerald-400/80 flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                        10% off
                      </span>
                      <span className="text-emerald-400 font-medium tabular-nums">{"-$" + cart.discount.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Shipping</span>
                      <span className="text-emerald-400 font-medium">Free</span>
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.06]"></div>

                  {/* Final */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm font-semibold text-gray-300">Total</span>
                    <div className="text-right">
                      <span className="text-2xl font-black gradient-text tabular-nums">{"$" + cart.finalTotal.toFixed(2)}</span>
                      <p className="text-[10px] text-gray-600 mt-0.5">
                        <span className="line-through">{"$" + cart.subtotal.toFixed(2)}</span>
                        <span className="text-emerald-500 ml-1">{"Save $" + cart.discount.toFixed(2)}</span>
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-3 py-3.5 rounded-xl btn-primary text-white text-sm font-semibold tracking-wide relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[1.5s]"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      Checkout
                    </span>
                  </button>

                  {/* Trust */}
                  <div className="flex items-center justify-center gap-5 pt-3">
                    <span className="text-[10px] text-gray-700 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      Secure
                    </span>
                    <span className="text-[10px] text-gray-700 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      Encrypted
                    </span>
                    <span className="text-[10px] text-gray-700 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                      Returns
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo */}
              <div className="glass-card rounded-2xl p-5">
                <p className="text-[11px] font-semibold text-gray-500 mb-3 uppercase tracking-wider">Promo Code</p>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter code" className="flex-grow px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-white placeholder-gray-700 focus:outline-none focus:border-violet-500/30 transition-all duration-300" />
                  <button className="btn-ghost px-4 py-2.5 rounded-lg text-xs font-semibold text-gray-400 hover:text-white flex-shrink-0">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
