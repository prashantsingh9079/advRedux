import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {  useSelector } from 'react-redux';


const Cart = (props) => {

  const cartState = useSelector(state=>state.cart.show)
  const num = useSelector(state => state.cartItem.cartNumber)
  const amountCal = num*6
  var checkNum
  if(num >0)
  {
    checkNum=true
  }
  else
  {
    checkNum=false
  }

  const cartNumber = useSelector(state => state.cartItem.cartNumber)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      
        {cartState && checkNum  && <CartItem
          item={{ title: 'Test Item', quantity: cartNumber, total: amountCal, price: 6 }}
        />}
        {!cartState && !checkNum && <p><i>empty cart</i></p>}
      </ul>
    </Card>
  );
};

export default Cart;
