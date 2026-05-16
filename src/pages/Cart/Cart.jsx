import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import { formatPrice, calculateTotal } from '../../utils/helpers';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, clearCart } = useCart();

  const total = calculateTotal(cart);

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <p className={styles.emptyIcon}>🛒</p>
        <h2 className={styles.emptyText}>Your cart is empty</h2>
        <p className={styles.emptySub}>
          Looks like you haven't added anything yet
        </p>
        <Link to="/" className={styles.shopBtn}>
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            My Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
          </h2>
          <button className={styles.clearBtn} onClick={clearCart}>
            Clear All
          </button>
        </div>

        <div className={styles.itemList}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Order summary */}
      <div className={styles.right}>
        <div className={styles.summary}>
          <h3 className={styles.summaryTitle}>Order Summary</h3>

          <div className={styles.summaryRow}>
            <span>Price ({cart.length} items)</span>
            <span>{formatPrice(total)}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Delivery</span>
            <span className={styles.free}>FREE</span>
          </div>

          <div className={styles.divider} />

          <div className={styles.totalRow}>
            <span>Total Amount</span>
            <span>{formatPrice(total)}</span>
          </div>

          <p className={styles.savings}>
            You are saving {formatPrice(total * 0.1)} on this order 🎉
          </p>

          <button className={styles.checkoutBtn}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;