import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState, useEffect } from 'react'

var Navbar = function() {
  var cart = useCart()
  var location = useLocation()
  var isHome = location.pathname === '/'
  var isCartPage = location.pathname === '/cart'
  var s = useState(false), scrolled = s[0], setScrolled = s[1]
  var b = useState(false), cartBounce = b[0], setCartBounce = b[1]
  var m = useState(false), mobileOpen = m[0], setMobileOpen = m[1]

  useEffect(function() {
    var fn = function() { setScrolled(window.scrollY > 10) }
    window.addEventListener('scroll', fn)
    return function() { window.removeEventListener('scroll', fn) }
  }, [])

  useEffect(function() {
    if (cart.totalItems > 0) {
      setCartBounce(true)
      var t = setTimeout(function() { setCartBounce(false) }, 350)
      return function() { clearTimeout(t) }
    }
  }, [cart.totalItems])

  // Close mobile menu on route change
  useEffect(function() { setMobileOpen(false) }, [location.pathname])

  var navLinkClass = function(active) {
    return "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 " + (active ? 'text-white' : 'text-gray-500 hover:text-gray-300')
  }

  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in-down " + (scrolled ? 'glass-nav shadow-lg shadow-black/20' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-violet-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300 group-hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-none">
                <span className="gradient-text">Shop</span><span className="text-white">Vibe</span>
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase hidden sm:block">Premium Store</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className={navLinkClass(isHome)}>
              {isHome && <div className="absolute inset-0 rounded-xl bg-white/[0.06] border border-white/[0.08]"></div>}
              <span className="relative flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Products
              </span>
            </Link>

            <a href="#deals" className={navLinkClass(false)}>
              <span className="relative flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Deals
              </span>
            </a>

            <a href="#about" className={navLinkClass(false)}>
              <span className="relative flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </span>
            </a>

            <a href="#contact" className={navLinkClass(false)}>
              <span className="relative flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </span>
            </a>

            <div className="w-px h-6 bg-white/[0.06] mx-2"></div>

            <Link to="/cart" className={"relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 " + (isCartPage ? 'text-white' : 'text-gray-500 hover:text-gray-300') + (cartBounce ? ' animate-cart-bounce' : '')}>
              {isCartPage && <div className="absolute inset-0 rounded-xl bg-white/[0.06] border border-white/[0.08]"></div>}
              <span className="relative flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Cart
                {cart.totalItems > 0 && (
                  <span className="flex items-center justify-center min-w-[20px] h-[20px] px-1 text-[10px] font-bold gradient-primary text-white rounded-full animate-bounce-in shadow-md shadow-violet-500/30">
                    {cart.totalItems}
                  </span>
                )}
              </span>
            </Link>
          </div>

          {/* Mobile: Cart + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Link to="/cart" className={"relative px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 " + (isCartPage ? 'text-white bg-white/[0.06]' : 'text-gray-500') + (cartBounce ? ' animate-cart-bounce' : '')}>
              <span className="relative flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cart.totalItems > 0 && (
                  <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[9px] font-bold gradient-primary text-white rounded-full animate-bounce-in">
                    {cart.totalItems}
                  </span>
                )}
              </span>
            </Link>
            <button onClick={function() { setMobileOpen(!mobileOpen) }} className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all duration-300">
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden animate-fade-in-down pb-4 border-t border-white/[0.05]">
            <div className="flex flex-col gap-1 pt-3">
              <Link to="/" className={"px-4 py-3 rounded-xl text-sm font-medium transition-all " + (isHome ? 'text-white bg-white/[0.06]' : 'text-gray-500 hover:text-white hover:bg-white/[0.03]')}>Products</Link>
              <a href="#deals" className="px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:text-white hover:bg-white/[0.03] transition-all">Deals</a>
              <a href="#about" className="px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:text-white hover:bg-white/[0.03] transition-all">About</a>
              <a href="#contact" className="px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:text-white hover:bg-white/[0.03] transition-all">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
