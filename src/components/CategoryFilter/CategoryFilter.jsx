import { capitalize } from '../../utils/helpers';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ categories, selected, onSelect }) => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.btn} ${selected === category ? styles.active : ''}`}
          onClick={() => onSelect(category)}
        >
          {capitalize(category)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;