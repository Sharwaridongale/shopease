import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/helpers';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleDecrease = () => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.title} className={styles.image} />

      <div className={styles.details}>
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.price}>{formatPrice(item.price)}</p>

        <div className={styles.controls}>
          <button className={styles.qtyBtn} onClick={handleDecrease}>−</button>
          <span className={styles.qty}>{item.quantity}</span>
          <button className={styles.qtyBtn} onClick={handleIncrease}>+</button>

          <button
            className={styles.removeBtn}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>

      <p className={styles.subtotal}>
        {formatPrice(item.price * item.quantity)}
      </p>
    </div>
  );
};

export default CartItem;