import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'

function Home() {
const [products, setProducts] = useState(null)

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((result) => {
      setProducts(result)
    })
  }, [])

  return (
    <>
      {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
    </>
  )
}

export default Home
