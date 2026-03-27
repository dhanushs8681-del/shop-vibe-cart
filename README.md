# 🛒 ShopVibe — Premium Shopping Cart Application

A modern, responsive e-commerce shopping cart application built with **ReactJS**, featuring smooth animations, glassmorphism design, dark theme UI, and complete cart management functionality.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🌐 Live Demo

🔗 **[View Live Site](https://your-netlify-url.netlify.app)**

---

## 📸 Screenshots

### Products Page
- Responsive product grid with category filtering
- Star ratings, product images, prices, and descriptions
- Add to Cart / Remove from Cart toggle buttons
- Skeleton loading animation

### Cart Page
- Cart items with quantity management (increase/decrease)
- Per-item total calculation based on quantity
- Dynamic subtotal with **10% automatic discount**
- Order summary with final price breakdown
- Promo code input section

---

## ✨ Features

### 🛍️ Product Page
- Fetches products dynamically from [Fake Store API](https://fakestoreapi.com/)
- Responsive grid layout (1–4 columns based on screen size)
- Category filtering (All, Electronics, Jewelery, Men's Clothing, Women's Clothing)
- Product cards displaying image, title, description, price, and star ratings
- "Add to Cart" / "Remove from Cart" toggle functionality
- Skeleton loading animation while data is being fetched
- Error handling with retry option

### 🛒 Cart Page
- Displays all items added to the cart
- Each item shows product name, price, quantity, and a "Remove from Cart" button
- Increase / Decrease quantity controls for each item
- Per-item total price calculated based on quantity
- Dynamic subtotal that updates in real-time
- **10% automatic discount** applied on the total price
- Final price displayed with savings information
- Remove individual items from cart
- Empty cart state with navigation back to products
- Sticky order summary sidebar
- Promo code input section

### 🎨 UI/UX Design
- Premium dark theme with glassmorphism design
- Smooth CSS animations (fade, slide, scale, float, bounce)
- Gradient accents and glowing button effects
- Fully responsive design (mobile, tablet, desktop)
- Toast notifications for add/remove actions
- Animated ambient background with subtle grid pattern
- Custom scrollbar styling
- Mobile hamburger menu navigation
- Full-featured footer with newsletter subscription

### 🧭 Navigation
- Proper routing between Product page (`/`) and Cart page (`/cart`)
- Active link highlighting in navbar
- Navigation links: Products, Deals, About, Contact
- Mobile-responsive hamburger menu
- Cart badge showing real-time item count

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **ReactJS** | Frontend UI library |
| **React Router v6** | Client-side routing & navigation |
| **Tailwind CSS v3** | Utility-first CSS styling |
| **Vite v5** | Build tool & development server |
| **Context API** | Global state management for cart |
| **Fake Store API** | Product data source |
| **HTML/CSS** | Structure and styling |
| **JavaScript (ES6+)** | Application logic & functionality |

---

## 📂 Project Structure

```
fakecart/
├── public/
│   └── _redirects              # Netlify SPA redirect config
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with links & cart count
│   │   ├── Footer.jsx          # Full footer with links & newsletter
│   │   ├── ProductCard.jsx     # Individual product card component
│   │   ├── CartItem.jsx        # Individual cart item row component
│   │   ├── Loader.jsx          # Skeleton loading component
│   │   └── Toast.jsx           # Toast notification system
│   ├── context/
│   │   └── CartContext.jsx     # Cart state management (Context API)
│   ├── pages/
│   │   ├── ProductsPage.jsx    # Main products listing page
│   │   └── CartPage.jsx        # Shopping cart page
│   ├── App.jsx                 # Root component with routes
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & animations
├── index.html                  # HTML entry file
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/fakecart.git

# 2. Navigate to project directory
cd fakecart

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

### Netlify Deployment

1. Push code to GitHub
2. Go to [Netlify](https://www.netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**

> The `public/_redirects` file is already configured for React Router SPA support.

---

## 📋 API Reference

**Base URL:** `https://fakestoreapi.com`

| Endpoint | Method | Description |
|---|---|---|
| `/products` | GET | Fetch all products (20 items) |

### Sample Response
```json
{
  "id": 1,
  "title": "Product Name",
  "price": 109.95,
  "description": "Product description...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/...",
  "rating": { "rate": 3.9, "count": 120 }
}
```

---

## 🎯 Key Functionalities

| Feature | Description |
|---|---|
| **Add to Cart** | Click "Add to Cart" on any product card |
| **Remove from Cart** | Click "Remove" button (product card or cart page) |
| **Quantity Management** | Use +/- buttons in cart to adjust quantity |
| **Dynamic Pricing** | All totals update in real-time |
| **10% Discount** | Automatically applied to the subtotal |
| **Routing** | Navigate between Products (`/`) and Cart (`/cart`) |
| **Cart Badge** | Real-time item count on navbar cart icon |
| **Toast Notifications** | Visual feedback for add/remove actions |
| **Category Filtering** | Filter products by category |
| **Responsive Design** | Works on mobile, tablet, and desktop |

---

## 🎨 Design Highlights

- **Color Palette:** Deep black (#050505) with violet/indigo accents
- **Typography:** Inter font family with careful weight hierarchy
- **Cards:** Glassmorphism with dark backgrounds and subtle borders
- **Animations:** Smooth entrance animations with staggered delays
- **Micro-interactions:** Hover effects, button scales, toast notifications
- **Layout:** CSS Grid for products, responsive sidebar for cart summary

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing product data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://react.dev/) for the UI library
- [Vite](https://vitejs.dev/) for the blazing fast build tool
