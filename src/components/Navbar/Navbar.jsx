import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        ShopEase
      </Link>

      <Link to="/cart" className={styles.cartBtn}>
        🛒 Cart
        {cartCount > 0 && (
          <span className={styles.badge}>{cartCount}</span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;