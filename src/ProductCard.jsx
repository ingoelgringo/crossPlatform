import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductDiv = styled.div`
  width: 300px;
  padding: 10px;
`

const ProductImg = styled.img`
  max-height: 200px;
  max-width: 300px;
`

function ProductCard(props) {
  return (
    <Link to={`/${props.product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ProductDiv>
          <ProductImg src={props.product.image} alt="" />
          <h5>{props.product.title}</h5>
          {/* <p>{props.product.description}</p> */}
          <p>${props.product.price}</p>
      </ProductDiv>
    </Link>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
}

export default ProductCard
