import { useState, useMemo } from 'react';
import useProducts from '../../hooks/useProducts';
import useDebounce from '../../hooks/useDebounce';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';
import styles from './Home.module.css';

const Home = () => {
  const { products, categories, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Debounce the search — waits 300ms after user stops typing
  const debouncedSearch = useDebounce(search, 300);

  // useMemo so filtering only recalculates when these values change
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const matchesSearch = product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, debouncedSearch]);

  // Loading state
  if (loading) return <Loader />;

  // Error state
  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>😞 Something went wrong</p>
        <p className={styles.errorSub}>{error}</p>
        <button
          className={styles.retryBtn}
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Search and filter bar */}
      <div className={styles.controls}>
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* Results count */}
      <p className={styles.resultCount}>
        {filteredProducts.length} products found
      </p>

      {/* Empty state */}
      {filteredProducts.length === 0 ? (
        <div className={styles.emptyContainer}>
          <p className={styles.emptyText}>😕 No products found</p>
          <p className={styles.emptySub}>Try a different search or category</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;