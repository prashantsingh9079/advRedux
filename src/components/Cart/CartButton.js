import { cartAction } from '../../store';
import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
// import { cartItemAction } from '../../store';

const CartButton = (props) => {

  useSelector(state=>state.cart.show)
  const num = useSelector(state => state.cartItem.cartNumber)

  const dispatch = useDispatch();

  function showHideCart()
  {
    dispatch(cartAction.showCartorHide())
  }


  return (
    <button onClick={showHideCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{num}</span>
    </button>
  );
};

export default CartButton;
