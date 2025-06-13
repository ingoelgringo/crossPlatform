import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { cartFull, setCartFull } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";



const ProductDiv = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`

const ProductInfo = styled.div`
  width: 40%;
`

const ProductImg = styled.img`
  max-height: 400px;
  max-width: 400px;
`

function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const { cartItems, setCartItems } = useContext(ThemeContext)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((result) => {
        setProduct(result)
      })
  }, [productId])

  return (
    product &&
    <ProductDiv>
      <ProductImg src={product.image} alt="" />
        <ProductInfo>
          <h5>{product.title}</h5>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button
            onClick={() => {setCartItems([...cartItems, product])}}
            disabled={cartItems.find((item) => item.id == product.id)}
          >Add to cart</button>
        </ProductInfo>
    </ProductDiv>
  )
}

export default Product
