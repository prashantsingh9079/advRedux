import { cartAction } from '../../store';
import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';

const CartButton = (props) => {

  useSelector(state=>state.cart.show)

  const dispatch = useDispatch();

  function showHideCart()
  {
    dispatch(cartAction.showCartorHide())
  }


  return (
    <button onClick={showHideCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
