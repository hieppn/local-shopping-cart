import React, { Component } from 'react';
import "./AddProduct.css";
import CartItem from './CartItem';
import Pay from './Pay';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyFormat from 'react-currency-format';
class Carts extends Component {
  constructor() {
    super();
    this.state = {
      carts: JSON.parse(localStorage.getItem("cart")),
      menu: "cart"
    }
    this.onPayClicked = this.onPayClicked.bind(this);
    }
  onPayClicked() {
    this.setState({
      menu: "pay"
    })
  }
  getSumPrice() {
    let sum = 0;
    let { carts } = this.state;
    for (let i = 0; i < carts.length; i++) {
      sum = sum + (carts[i].price * carts[i].quantity);
    }
    return sum;
  }
  onClickedSubstract(item) {
    return (event) => {
      let carts = JSON.parse(localStorage.getItem("cart"));
      let oldItem = carts.find((element) => element.title === item.title);
      if (oldItem.quantity > 1) {
        oldItem.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(carts));
      this.setState({
        carts: JSON.parse(localStorage.getItem("cart"))
      })
    }
  }
  onClickedAdd(item) {
    return (event) => {
      let carts = JSON.parse(localStorage.getItem("cart"));
      let oldItem = carts.find((element) => element.title === item.title);
      oldItem.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(carts));
      this.setState({
        carts: JSON.parse(localStorage.getItem("cart"))
      })
    }

  }
  onItemClick(key) {
    return (event) => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart.splice(key, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.setState({
        carts: JSON.parse(localStorage.getItem("cart"))
      })
      console.log(cart);
    }
  }

  render() {
    return (
      <center>
        <i>The number of product in the cart: {this.state.carts.length}</i>
        <table border="1">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          {this.state.carts.map((item, key) => <CartItem
            key={key}
            item={item}
            deleteItem={this.onItemClick(key)}
            SubtractItem={this.onClickedSubstract(item)}
            AddItem={this.onClickedAdd(item)}
          />)
          }
        </table>
          <td><CurrencyFormat readOnly className="a" thousandSeparator={true} prefix={'Sum: '} value={this.getSumPrice()}/> VND </td>
          <button className="btn btn-warning" onClick={this.onPayClicked}>Check out</button>
          {this.state.menu == "pay" ? <Pay /> : null}
      </center>
    );
  }
}
export default Carts;