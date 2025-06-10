import { useEffect, useState } from 'react'
import './App.css'
import Product from './Product'
import Header from './Header'
import SomeContext from './SomeContext'

function App() {
  const [products, setProducts] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((result) => {
        setProducts(result)
      })
  })

  if (darkMode) {
      document.body.style.backgroundColor = "rgb(10 10 10)";
      document.body.style.color = "rgba(255, 255, 255, .95)";
    } else {
      document.body.style.backgroundColor = "rgba(255, 255, 255, .95)";
      document.body.style.color = "rgb(10 10 10)";
    }

  return (
    <>
      <SomeContext value={{ darkMode, setDarkMode }}>
        <Header></Header>
        <main>
          {products && products.map(product =>
            <Product key={product.id} product={product}/>
          )}
        </main>
      </SomeContext>
    </>
  )
}

export default App
