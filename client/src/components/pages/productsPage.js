import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    products: store.products,
    stocks: store.stocks,
    cart: store.cart
  };
};

class toConnectProductsPage extends Component {
  render() {
    return (
      <div className="products">
        <h1>Products</h1>
      </div>
    );
  }
}

const ProductsPage = connect(mapStateToProps)(toConnectProductsPage);

export default ProductsPage;