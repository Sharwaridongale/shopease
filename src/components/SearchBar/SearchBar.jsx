import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>🔍</span>
      <input
        type="text"
        className={styles.input}
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className={styles.clear} onClick={() => onChange('')}>
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;