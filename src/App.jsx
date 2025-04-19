import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductGrid from './components/cards/productGrid.jsx'
import allproducts from './data/MOCK_PRODUCTS_DATA.json'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <ProductGrid products={allproducts} />
    </>
  )
}

export default App
