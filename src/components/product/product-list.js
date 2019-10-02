import React from "react";
import ProductItem from "./product-item";
import Cart from '../../pages/cart';
import "../../assets/css/components/product/product-list.css";
import allDataJson from '../../lib/data/products.json';

class ProductList extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        cart: []
      };

      this.addHandle = this.addHandle.bind(this);
  }

  addHandle = (product) => {
    this.setState({
      cart: [...this.state.cart, product],
      showCart: false
    });
  }

  render() {
    return(
      <div className="product-list grid-x grid-margin-y">
        <Cart cartItems={this.state.cart}/>
        { allDataJson.products.map(product => (
          <ProductItem product={product} key={ product.sku } addHandle={ this.addHandle } />
        )) }
      </div>
    )
  }
}

export default ProductList;
