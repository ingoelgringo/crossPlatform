import { ThemeContext } from "./ThemeContext";
import { useContext } from 'react'
import ProductCard from './ProductCard'


function Cart() {
  const { cartItems, setCartItems } = useContext(ThemeContext);

  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
            <button
              onClick={() => {
                setCartItems(cartItems.filter(item => item.id !== product.id));
              }}
            >
              Remove from cart
            </button>
          </div>
        ))
      ) : (
        <p>There are no items in the cart</p>
      )}
    </>
  );
}

export default Cart;
