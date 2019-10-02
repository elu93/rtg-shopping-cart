import React from "react";
import "../assets/css/components/cart/cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tax: 0,
      shippingCost: 0,
      subTotal: 0,
      total: 0,
      totalQuantity: 0,
      cartItems: [
        {
          sku: "8509698P",
          price: 655,
          quantity: 0,
          itemTotal: 0
        },
        {
          sku: "10132859",
          price: 799.99,
          quantity: 0,
          itemTotal: 0
        },
        {
          sku: "15028930",
          price: 1599.99,
          quantity: 0,
          itemTotal: 0
        },
        {
          sku: "10141620",
          price: 499.99,
          quantity: 0,
          itemTotal: 0
        },
        {
          sku: "14103941",
          price: 899.99,
          quantity: 0,
          itemTotal: 0
        },
        {
          sku: "8509697P",
          price: 655,
          quantity: 0,
          itemTotal: 0
        },
        {
          sku: "8509695P",
          price: 655,
          quantity: 0,
          itemTotal: 0
        },
        {
          sku: "10132950",
          price: 799.99,
          quantity: 0,
          itemTotal: 0
        },
        {
          sku: "10197704",
          price: 599.99,
          quantity: 0,
          itemTotal: 0
        },
        {
          sku: "10131403",
          price: 599.99,
          quantity: 0,
          itemTotal: 0
        }
      ]
    }
    this.calculateCosts = this.calculateCosts.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  calculateCosts() {
    let subTotal = 0;
    let totalQuantity = 0;
    this.state.cartItems.map((item) => {
      subTotal += item.itemTotal;
      totalQuantity += item.quantity;
    });
    let tax = subTotal * (1/10);
    let shippingCost = 0;
    if (totalQuantity === 0) {
      shippingCost = 0;
    } else {
      shippingCost = ((subTotal * (1/50)) + 50) - (5 * totalQuantity);
    }
    let total = subTotal + tax + shippingCost;
    this.setState({
      shippingCost: shippingCost,
      tax: tax,
      subTotal: subTotal,
      total: total
    })
  }

  handleRemove(product) {
    let index = this.state.cartItems.map(function(x) {return x.sku; }).indexOf(product.sku);
    let tempCartItems = [...this.state.cartItems]
    console.log(tempCartItems[index].quantity);
    if (tempCartItems[index].quantity === 0) {
      alert("No Items to remove.");
    } else {
      tempCartItems[index].quantity -= 1;
    tempCartItems[index].itemTotal = tempCartItems[index].quantity * tempCartItems[index].price;
    this.setState({
      cartItems: tempCartItems
    }, () => {
      this.calculateCosts();
    })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.cartItems !== prevProps.cartItems) {
        let index = this.state.cartItems.map(function(x) {return x.sku; }).indexOf(this.props.cartItems[this.props.cartItems.length - 1].sku);
        let tempCartItems = [...this.state.cartItems];
        tempCartItems[index].quantity = tempCartItems[index].quantity + 1;
        tempCartItems[index].itemTotal = tempCartItems[index].quantity * tempCartItems[index].price;
        this.setState({cartItems: tempCartItems}, () => {
          let subTotal = 0;
          let totalQuantity = 0;
          this.state.cartItems.map((item) => {
            subTotal += item.itemTotal;
            totalQuantity += item.quantity;
          });
          let tax = subTotal * (1/10);
          let shippingCost = ((subTotal * (1/50)) + 50) - (5 * totalQuantity);
          let total = subTotal + tax + shippingCost;
          this.setState({
            shippingCost: shippingCost,
            tax: tax,
            subTotal: subTotal,
            total: total
          })
        });
    }
  }

  render() {
      return (
        <div className="product cell small-12 grid-x grid-margin-x">
          {this.state.cartItems.map((item, key) => {
            return (
              <div className="product cell small-12 grid-x grid-margin-x" key={key}>
                <div className="product-image cell small-2">{item.quantity}</div>
                <div className="product-sku cell small-2">{item.sku}</div>
                <div className="product-price cell small-2">{item.price}</div>
                <div className="product-title cell small-4">{item.itemTotal.toFixed(2)}</div>
                <div className="product-add-to-cart cell small-2">
                  <button id="add-to-cart" onClick={() => this.handleRemove(item)}> Remove 1 Quantity</button>
                </div>
              </div>
            )
          })}
          <div>
          <div className="cartWrapper">
            <div className="cart-title">TAX: ${this.state.tax.toFixed(2)}</div>
            <div className="cart-title">SHIPPING COST: ${this.state.shippingCost.toFixed(2)}</div>
            <div className="cart-title">SUBTOTAL: ${this.state.subTotal.toFixed(2)}</div>
            <div className="cart-title">TOTAL: ${this.state.total.toFixed(2)}</div>
          </div>
          </div>
        </div>
      )
  }
}

export default Cart
