import { memo, useCallback } from 'react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/helpers';
import styles from './ProductCard.module.css';

const ProductCard = memo(({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [product, addToCart]);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <p className={styles.category}>{product.category}</p>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.rating}>
          <span className={styles.star}>★</span>
          <span>{product.rating.rate}</span>
          <span className={styles.count}>({product.rating.count})</span>
        </div>

        <div className={styles.bottom}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          <button className={styles.btn} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;