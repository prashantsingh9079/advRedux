
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { cartItemAction } from '../../store';

const ProductItem = (props) => {
  const { title, price, description } = props;

  useSelector(state => state.cartItem.itemList)
 useSelector(state => state.cartItem.cartNumber)
  const dispatch = useDispatch()

  function clickHandler()
  {
    console.log('add to cart clicked')
    dispatch(cartItemAction.increaseQTY())
    
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={clickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
