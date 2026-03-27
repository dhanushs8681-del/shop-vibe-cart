import { useCart } from '../context/CartContext'

var ProductCard = function(props) {
  var product = props.product
  var index = props.index
  var cart = useCart()
  var inCart = cart.isInCart(product.id)

  var handleClick = function() {
    if (inCart) cart.removeFromCart(product.id, product.title)
    else cart.addToCart(product)
  }

  var renderStars = function(rate) {
    var stars = []
    for (var i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} className={"w-3 h-3 " + (i < Math.floor(rate) ? 'text-amber-400' : 'text-gray-700')} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
    return stars
  }

  var getCatBadge = function(cat) {
    if (cat === "men's clothing") return 'cat-men'
    if (cat === "women's clothing") return 'cat-women'
    if (cat === "jewelery") return 'cat-jewel'
    if (cat === "electronics") return 'cat-elec'
    return 'cat-default'
  }

  return (
    <div className={"opacity-0 animate-fade-in-up stagger-" + ((index % 20) + 1) + " product-card group"}>
      <div className="relative glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500">

        {/* Image */}
        <div className="product-img-container relative h-56 p-5 flex items-center justify-center">
          <img src={product.image} alt={product.title} className="relative z-10 max-h-40 w-auto object-contain transition-all duration-700 ease-out" loading="lazy" />
          <div className={"absolute top-3 left-3 z-10 cat-badge " + getCatBadge(product.category)}>
            {product.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow gap-2.5">
          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-px">{renderStars(product.rating.rate)}</div>
            <span className="text-xs text-gray-400 font-medium">{product.rating.rate}</span>
            <span className="text-xs text-gray-600">({product.rating.count})</span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-200 leading-snug line-clamp-2 group-hover:text-white transition-colors duration-300">{product.title}</h3>

          {/* Description */}
          <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 flex-grow">{product.description}</p>

          {/* Price + Button */}
          <div className="flex items-center justify-between pt-3 mt-auto border-t border-white/[0.06]">
            <div>
              <span className="text-[11px] text-gray-500 block mb-0.5">Price</span>
              <span className="text-xl font-bold text-white">{"$" + product.price.toFixed(2)}</span>
            </div>
            <button onClick={handleClick} className={"px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 " + (inCart ? 'btn-danger' : 'btn-primary text-white')}>
              {inCart ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  Remove
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
