import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;