import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDiv = styled.div`
  width: 300px;
`

const ProductImg = styled.img`
  max-height: 200px;
  max-width: 300px;
`

function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

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
      <h5>{product.title}</h5>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </ProductDiv>
  )
}

export default Product
