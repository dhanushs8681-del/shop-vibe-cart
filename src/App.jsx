import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import Toast from './components/Toast'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] noise relative flex flex-col">
      {/* Ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-violet-600/[0.07] rounded-full blur-[150px] animate-blob"></div>
        <div className="absolute top-1/4 -right-40 w-[400px] h-[400px] bg-indigo-600/[0.05] rounded-full blur-[150px] animate-blob" style={{ animationDelay: '3s' }}></div>
        <div className="absolute -bottom-40 left-1/4 w-[450px] h-[450px] bg-purple-600/[0.06] rounded-full blur-[150px] animate-blob" style={{ animationDelay: '6s' }}></div>
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      <div className="relative z-10 flex-grow">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
      <Toast />
    </div>
  )
}

export default App
