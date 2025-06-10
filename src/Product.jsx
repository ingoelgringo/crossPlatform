import PropTypes from 'prop-types'
// import './index.css'
import styled from 'styled-components'

const ProductDiv = styled.div`
  width: 300px;
`

const ProductImg = styled.img`
  max-height: 200px;
  max-width: 300px;
`

function Product(props) {
  return (
    <ProductDiv className="Product">
      <ProductImg src={props.product.image} alt="" />
      <h5>{props.product.title}</h5>
      {/* <p>{props.product.description}</p> */}
      <p>${props.product.price}</p>
    </ProductDiv>
  )
}

Product.propTypes = {
  product: PropTypes.object
}

export default Product
