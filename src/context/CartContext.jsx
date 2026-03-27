import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, type) => {
    type = type || 'success'
    var id = Date.now() + Math.random()
    setToasts(function(prev) { return prev.concat([{ id: id, message: message, type: type }]) })
    setTimeout(function() {
      setToasts(function(prev) { return prev.filter(function(t) { return t.id !== id }) })
    }, 2500)
  }, [])

  const removeToast = useCallback(function(id) {
    setToasts(function(prev) { return prev.filter(function(t) { return t.id !== id }) })
  }, [])

  const addToCart = useCallback(function(product) {
    setCartItems(function(prev) {
      var exists = prev.find(function(item) { return item.id === product.id })
      if (exists) return prev
      return prev.concat([Object.assign({}, product, { quantity: 1 })])
    })
    showToast(product.title.substring(0, 30) + '... added to cart!', 'success')
  }, [showToast])

  const removeFromCart = useCallback(function(productId, productTitle) {
    setCartItems(function(prev) { return prev.filter(function(item) { return item.id !== productId }) })
    showToast((productTitle || '').substring(0, 30) + '... removed!', 'remove')
  }, [showToast])

  const isInCart = useCallback(function(productId) {
    return cartItems.some(function(item) { return item.id === productId })
  }, [cartItems])

  const increaseQuantity = useCallback(function(productId) {
    setCartItems(function(prev) {
      return prev.map(function(item) {
        if (item.id === productId) return Object.assign({}, item, { quantity: item.quantity + 1 })
        return item
      })
    })
  }, [])

  const decreaseQuantity = useCallback(function(productId) {
    setCartItems(function(prev) {
      return prev.map(function(item) {
        if (item.id === productId) return Object.assign({}, item, { quantity: Math.max(1, item.quantity - 1) })
        return item
      })
    })
  }, [])

  var totalItems = cartItems.reduce(function(sum, item) { return sum + item.quantity }, 0)
  var subtotal = cartItems.reduce(function(sum, item) { return sum + item.price * item.quantity }, 0)
  var discount = subtotal * 0.1
  var finalTotal = subtotal - discount

  return (
    <CartContext.Provider value={{
      cartItems: cartItems, addToCart: addToCart, removeFromCart: removeFromCart, isInCart: isInCart,
      increaseQuantity: increaseQuantity, decreaseQuantity: decreaseQuantity, totalItems: totalItems,
      subtotal: subtotal, discount: discount, finalTotal: finalTotal, toasts: toasts, removeToast: removeToast,
    }}>
      {children}
    </CartContext.Provider>
  )
}
