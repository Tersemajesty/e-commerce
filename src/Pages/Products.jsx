import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from "../component/data/products";
import ProductCard from "../component/ProductCard/Productcard";
import '../styles/products.css';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    setCurrentPage(1);
  }, [categoryParam]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="products-container">
      <div className="products-content">
        <div className="products-header">
          <h1 className="products-title">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Premium Collection'}
          </h1>
          <p className="products-subtitle">
            {searchQuery 
              ? `Found ${filteredProducts.length} products matching your search`
              : 'Discover the finest fragrances from around the world'
            }
          </p>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(1);
              }}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {paginatedProducts.length > 0 ? (
          <>
            <div className="products-grid">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="pagination-btn"
                >
                  Previous
                </button>
                <span className="pagination-info">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="pagination-btn"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-products">
            <div className="no-products-icon">🔍</div>
            <h3>No products found</h3>
            <p>
              {searchQuery 
                ? 'Try adjusting your search terms or browse our categories'
                : 'No products available in this category at the moment'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
