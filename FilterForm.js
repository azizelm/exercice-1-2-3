import React, { Component } from 'react';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      minPrice: 0,
      maxPrice: 1000,
    };
  }

  // Handle category change
  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value }, () => {
      this.props.onFilterChange(this.state); // Notify parent component
    });
  };

  // Handle minimum price change
  handleMinPriceChange = (event) => {
    const newMinPrice = event.target.value;
    this.setState({ minPrice: newMinPrice }, () => {
      this.props.onFilterChange(this.state); // Notify parent component
    });
  };

  // Handle maximum price change
  handleMaxPriceChange = (event) => {
    const newMaxPrice = event.target.value;
    this.setState({ maxPrice: newMaxPrice }, () => {
      this.props.onFilterChange(this.state); // Notify parent component
    });
  };

  render() {
    const { category, minPrice, maxPrice } = this.state;

    return (
      <form className="filter-form">
        <h3>Filter Products</h3>

        {/* Category Filter */}
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={this.handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="form-group">
          <label>Price Range:</label>
          <div className="price-range">
            <input
              type="number"
              value={minPrice}
              onChange={this.handleMinPriceChange}
              min="0"
              placeholder="Min Price"
            />
            <span>-</span>
            <input
              type="number"
              value={maxPrice}
              onChange={this.handleMaxPriceChange}
              min="0"
              placeholder="Max Price"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default FilterForm;