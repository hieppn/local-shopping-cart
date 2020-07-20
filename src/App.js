import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddProduct from "./components/AddProduct";
import Products from './components/Products';
import ProductItem from './components/ProductItem';
import Carts from './components/Carts';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from "./img/cart.png";
import Product from './components/Detail';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: "products"
    }
    this.onAddProductsClicked = this.onAddProductsClicked.bind(this);
    this.onProductsClicked = this.onProductsClicked.bind(this);
    this.onCartClicked = this.onCartClicked.bind(this);
    this.onSearchClicked = this.onSearchClicked.bind(this);

  }
  onCartClicked() {
    this.setState({
      menu: "cart"
    })
  }
  onAddProductsClicked() {
    this.setState({
      menu: "addproduct"
    })
  }
  onProductsClicked() {
    this.setState({
      menu: "products"
    })
  }
  onSearchClicked() {
    this.setState({
      menu: "search"
    })

  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Books store</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button className="bt" onClick={this.onProductsClicked}>Products</button>
              </li>
              <li className="nav-item">
                <button className="bt" onClick={this.onAddProductsClicked}>AddProduct</button>
              </li>
              <li className="nav-item">
                <button className="bt" onClick={this.onCartClicked}>Cart</button>
              </li>
            </ul>
          </div>
        </nav>
        {this.state.menu == "products" ? <Products /> : null}
        {this.state.menu == "addproduct" ? <AddProduct /> : null}
        {this.state.menu == "cart" ? <Carts /> : null}
        {this.state.menu == "search" ? <Search /> : null}
      </div>
    );
  }
}
export default App;
