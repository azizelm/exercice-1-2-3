import React, { Component } from 'react';
import ProductList from './ProductList';
import FilterForm from './FilterForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filters: {
        category: '',
        priceRange: [0, 1000],
      },
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    // Simulate fetching products from an API
    const products = [
      { id: 1, name: 'Product 1', category: 'Electronics', price: 200 },
      { id: 2, name: 'Product 2', category: 'Clothing', price: 50 },
      { id: 3, name: 'Product 3', category: 'Electronics', price: 300 },
    ];
    this.setState({ products });
  }

  handleFilterChange = (newFilters) => {
    this.setState({ filters: { ...this.state.filters, ...newFilters } });
  };

  render() {
    const { products, filters } = this.state;

    const filteredProducts = products.filter(
      (product) =>
        (filters.category === '' || product.category === filters.category) &&
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    return (
      <div>
        <h1>Product Store</h1>
        <FilterForm filters={filters} onFilterChange={this.handleFilterChange} />
        <ProductList products={filteredProducts} />
      </div>
    );
  }
}

export default App;