# 🛒 ShopVibe — Add to Cart Application Using Router

A modern, responsive e-commerce shopping cart application built with **ReactJS** and **React Router**, featuring smooth animations, dark theme UI and complete cart management functionality.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 🌐 Live Demo

🔗 **[View Live Site](https://vibe-shop-cart.netlify.app/)**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **ReactJS** | Frontend UI library for building component-based interfaces |
| **React Router** | Client-side routing to navigate between Product and Cart pages |
| **HTML/CSS** | Page structure and custom styling |
| **Tailwind CSS** | Utility-first CSS framework for responsive styling |
| **JavaScript (ES6+)** | Application logic, state management and functionality |

> **API Used:** [Fake Store API](https://fakestoreapi.com/) — for fetching product data as specified in the task requirements.

---

## ✨ Features

### 🛍️ Products Page (`/`)
- Fetches products from **Fake Store API** (`https://fakestoreapi.com/products`)
- Displays products in a **responsive grid layout** (1–4 columns)
- Each product shows **image, title, price, description and ratings**
- **Category filtering** — filter by All, Electronics, Jewelery, Men's, Women's Clothing
- **"Add to Cart"** button on each product
- If product is already in cart, shows **"Remove from Cart"** button
- **Skeleton loading** animation while fetching data
- **Error handling** with retry option

### 🛒 Cart Page (`/cart`)
- Displays all items added to the cart
- Each item shows **product name, price, quantity**, and **"Remove from Cart"** button
- Users can **Increase / Decrease quantity** of each item
- **Total price for each item** shown based on quantity
- **Dynamic total price** that updates based on total quantity
- **10% discount** applied on the total price
- Final discounted price displayed with savings
- Empty cart state with navigation back to products

### 🔄 State Management
- Cart state managed using **React Context API** (built into React)
- State updates properly when adding or removing items
- Cart count badge updates in real-time on navbar

### 🧭 Routing
- **React Router** used for navigation between pages
- `/` — Products page
- `/cart` — Cart page
- Active page highlighted in navigation
- Proper back navigation from cart to products

### 🎨 Design & UI
- Premium **dark theme** with glassmorphism design
- **Responsive layout** — works on mobile, tablet and desktop
- Smooth **CSS animations** (fade-in, slide, scale, float)
- **Toast notifications** for add/remove feedback
- Category badges with distinct colors
- Custom scrollbar styling
- Mobile hamburger menu
- Full footer with links, newsletter and social icons

---

## 📂 Project Structure

```
shop-vibe-cart/
├── public/
│   └── _redirects              # Netlify SPA routing config
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with links & cart count
│   │   ├── Footer.jsx          # Footer with links & newsletter
│   │   ├── ProductCard.jsx     # Product card component
│   │   ├── CartItem.jsx        # Cart item with quantity controls
│   │   ├── Loader.jsx          # Skeleton loading component
│   │   └── Toast.jsx           # Toast notification component
│   ├── context/
│   │   └── CartContext.jsx     # Cart state (React Context API)
│   ├── pages/
│   │   ├── ProductsPage.jsx    # Products listing page
│   │   └── CartPage.jsx        # Shopping cart page
│   ├── App.jsx                 # Root component with React Router
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind + custom CSS animations
├── index.html                  # HTML entry
├── package.json                # Dependencies & scripts
├── vite.config.js              # Build tool config
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
└── README.md                   # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/dhanush8681-del/shop-vibe-cart.git

# Navigate to project directory
cd shop-vibe-cart

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 📋 API Reference

**Base URL:** `https://fakestoreapi.com`

| Endpoint | Method | Description |
|---|---|---|
| `/products` | GET | Fetch all products |

### Sample Product Response
```json
{
  "id": 1,
  "title": "Fjallraven Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```
---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
