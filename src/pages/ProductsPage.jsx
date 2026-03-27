import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

var ProductsPage = function() {
  var p = useState([]), products = p[0], setProducts = p[1]
  var l = useState(true), loading = l[0], setLoading = l[1]
  var e = useState(null), error = e[0], setError = e[1]
  var c = useState('all'), selectedCategory = c[0], setSelectedCategory = c[1]

  var fetchProducts = function() {
    setLoading(true)
    setError(null)
    fetch('https://fakestoreapi.com/products')
      .then(function(res) {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(function(data) { setProducts(data); setLoading(false) })
      .catch(function(err) { setError(err.message); setLoading(false) })
  }

  useEffect(function() { fetchProducts() }, [])

  var catSet = {}
  products.forEach(function(p) { catSet[p.category] = true })
  var categories = ['all'].concat(Object.keys(catSet))
  var filtered = selectedCategory === 'all' ? products : products.filter(function(p) { return p.category === selectedCategory })

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center animate-scale-in max-w-sm">
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-red-500/8 border border-red-500/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Connection Error</h2>
          <p className="text-gray-500 text-sm mb-6">{error}</p>
          <button onClick={fetchProducts} className="btn-primary px-6 py-3 rounded-xl text-white text-sm font-semibold">Retry</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/8 border border-violet-500/10 text-[11px] font-semibold text-violet-300 mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-subtle-pulse"></span>
            Live Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-[1.1]">
            <span className="text-white">Discover</span><br />
            <span className="gradient-text">Premium Products</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Curated collection of top-quality products. Shop smart, live better.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          {categories.map(function(cat) {
            var active = selectedCategory === cat
            return (
              <button key={cat} onClick={function() { setSelectedCategory(cat) }} className={"px-4 py-2 rounded-lg text-xs font-medium capitalize transition-all duration-300 " + (active ? 'gradient-primary text-white shadow-lg shadow-violet-500/20' : 'btn-ghost text-gray-500 hover:text-gray-300')}>
                {cat === 'all' ? 'All' : cat}
              </button>
            )
          })}
        </div>

        {/* Count */}
        {!loading && (
          <div className="flex items-center justify-between mb-6 animate-fade-in">
            <p className="text-xs text-gray-600">
              <span className="text-gray-400 font-medium">{filtered.length}</span> products found
            </p>
          </div>
        )}

        {/* Grid */}
        {loading ? <Loader /> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(function(product, index) {
              return <ProductCard key={product.id} product={product} index={index} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage
