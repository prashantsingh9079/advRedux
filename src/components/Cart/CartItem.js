
import { cartItemAction } from '../../store';
import classes from './CartItem.module.css';
import { useSelector,useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

 const num = useSelector(state => state.cartItem.cartNumber)
  const dispatch = useDispatch()

  function addQty()
  {
    dispatch(cartItemAction.increaseQTY())
  }

  function minusQTY()
  {
    if(num ===0)
    {
      return
    }
    dispatch(cartItemAction.decreaseQTY())
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusQTY}>-</button>
          <button onClick={addQty}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
