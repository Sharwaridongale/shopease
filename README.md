# ShopEase 🛒

A fully functional React shopping app built as a frontend portfolio project.

## Live Features
- Product listing from Fake Store API
- Category filtering and debounced search
- Cart with add, remove, quantity controls
- Order summary with total calculation
- Loading, error, and empty states handled

## Tech Used
- React.js
- Context API + useReducer (global state, no Redux)
- Custom Hooks (useProducts, useDebounce)
- React Router DOM
- CSS Modules
- Fake Store API

## Key Concepts Demonstrated
- No prop drilling via Context API
- Performance optimization with React.memo and useCallback
- Debounced search to reduce unnecessary renders
- Promise.all for parallel API calls
- Cleanup functions in useEffect

## 🔗 Live Demo
👉 https://shopease-rho-nine.vercel.app

## Run Locally
http://localhost:3000
```bash
npm install
npm start
```
