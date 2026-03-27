import { Link } from 'react-router-dom'

var Footer = function() {
  var currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-20 border-t border-white/[0.05]">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-violet-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold"><span className="gradient-text">Shop</span><span className="text-white">Vibe</span></span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              Your premium destination for quality products at unbeatable prices. Shop smart, live better.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-violet-500/20 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-violet-500/20 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-violet-500/20 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-violet-500/20 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">All Products</Link></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Electronics</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Jewelery</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Men's Clothing</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Women's Clothing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Returns</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-300 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-10 border-t border-white/[0.05]">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-white text-lg font-bold mb-2">Stay in the loop</h3>
            <p className="text-gray-600 text-sm mb-5">Subscribe to get special offers, free giveaways, and deals.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-gray-700 focus:outline-none focus:border-violet-500/30 transition-all duration-300" />
              <button className="btn-primary px-6 py-3 rounded-xl text-white text-sm font-semibold flex-shrink-0">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">{currentYear} Shop Vibe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-700 text-xs hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="text-gray-700 text-xs hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="text-gray-700 text-xs hover:text-gray-400 transition-colors">Cookies</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-xs">Payment:</span>
            <div className="flex items-center gap-1.5">
              <div className="px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-bold text-gray-500">VISA</div>
              <div className="px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-bold text-gray-500">MC</div>
              <div className="px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-bold text-gray-500">AMEX</div>
              <div className="px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-bold text-gray-500">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
