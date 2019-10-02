import React from "react"

class ProductItem extends React.Component {
  render() {
    return (
      <div className="product cell small-12 grid-x grid-margin-x" id={ this.props.product.sku }>
        <div className="product-image cell small-2"><img src={ this.props.product.image } alt={ this.props.product.title } /></div>
        <div className="product-title cell small-4">{ this.props.product.title }</div>
        <div className="product-sku cell small-2">{ this.props.product.sku }</div>
        <div className="product-price cell small-2">${ this.props.product.price }</div>
        <div className="product-add-to-cart cell small-2">
            <button id="add-to-cart" onClick={() => this.props.addHandle(this.props.product)}> Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductItem;