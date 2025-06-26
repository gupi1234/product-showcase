https://cdn-icons-png.flaticon.com/512/2038/2038854.png# MyShop – React Product Showcase

A modern e-commerce product showcase built with **React**, **Redux Toolkit**, **Vite**, **Tailwind CSS**, and **Fake Store API**.  
Browse, filter, sort, and add products to your cart with a responsive and user-friendly interface.

## Features

- Product listing with images, prices (converted to INR), and ratings
- Filter by category and price range
- Sort by price, popularity, or name
- Product detail view with add-to-cart
- Shopping cart with quantity controls and total calculation
- Responsive design for desktop and mobile
- Clean, modern UI with Tailwind CSS

## Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Fake Store API](https://fakestoreapi.com/)

## Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Start the development server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### 3. Build for production

```sh
npm run build
```

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  app/
    store.js
  Components/
    Header.jsx
    Footer.jsx
    HeroSection.jsx
    ProductCard.jsx
    FilterSidebar.jsx
    SortOptions.jsx
  features/
    cart/
      cartSlice.js
  pages/
    Home.jsx
    ProductDetail.jsx
    Cart.jsx
public/
  vite.svg
```

## API

All product and category data is fetched from [Fake Store API](https://fakestoreapi.com/).
