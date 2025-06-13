import { useState, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from "./ThemeContext";
import { Link } from 'react-router-dom';
import cart from './assets/cart.png'

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  position: relative;
  width: 50px;
  height: 24px;
  background: ${props => (props.checked ? "white" : "black")};
  display: inline-block;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.5s;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 0;
  visibility: hidden;
`;

const Fill = styled.span`
  position: absolute;
  left: ${props => (props.checked ? "calc(100% - 22px)" : "2px")};
  top: 2px;
  width: 20px;
  height: 20px;
  background: ${props => (props.checked ? "black" : "white")};
  border-radius: 50%;
  transition: 0.5s;
`;

const CartContainer = styled.div`
  position: relative;
`

const CartImg = styled.img`
  margin-right: 20px;
  width: 3em;
  height: 3em;
  filter: ${props => (props.checked ? "invert(1)" : "none")};
  transition: 0.5s;
`

const CartBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 24px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: green;
`

function Header() {
  const [checked, setChecked] = useState(false);
  const { toggleTheme, cartItems } = useContext(ThemeContext);

    return(
      <FlexDiv>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>E-shop</h1>
        </Link>
        <FlexDiv>
          <Link to="/cart">
            <CartContainer>
              <CartImg src={cart} alt="" checked={checked}/>
              { cartItems.length > 0 && <CartBadge></CartBadge>}
            </CartContainer>
          </Link>
          <Label checked={checked}>
            <HiddenCheckbox
              checked={checked}
              onChange={() => {setChecked(!checked); toggleTheme();}}
            />
            <Fill checked={checked} />Darkmode
          </Label>
        </FlexDiv>
      </FlexDiv>
    )
}

export default Header
