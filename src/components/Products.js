import React, { Component } from 'react';
import ProductItem from './ProductItem';
import "./Product.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import up from "../img/up.png";
import down from "../img/down.png";
import Search from"./Search";
import Detail from"./Detail";
class Products extends Component {
  constructor() {
    super();
    this.products = JSON.parse(localStorage.getItem("lsc-pros"));
    if (!this.products) {
      this.products = [];
    }
    this.state={
      products:this.products,
      valueSearch:"",
    }
    this.SortByPriceAsc = this.SortByPriceAsc.bind(this);
    this.SortByPriceDesc = this.SortByPriceDesc.bind(this);
  }

  handleSearch = (search) => {
    var suitPro = [];
    let oldProducts = JSON.parse(localStorage.getItem("lsc-pros"));
    if (!oldProducts) {
        oldProducts = [];
    }
    if (search.length <= 0 || search === '') {
        this.setState({
            products: oldProducts,
            valueSearch: search
        })
    } else {
        let searchValue = search.toLowerCase();
        for (var i = 0; i < oldProducts.length; i++) {
            if (oldProducts[i].title.toLowerCase().indexOf(searchValue) != -1) {
                suitPro.push(oldProducts[i]);
            }
        }
        this.setState({
            products: suitPro,
            valueSearch: search
        })
    }
}
  SortByPriceAsc() {
    let sortedProductsAsc;
    sortedProductsAsc = this.products.sort((a, b) => {
      return parseInt(a.price) - parseInt(b.price);
    })

    this.setState({
      productss: sortedProductsAsc
    })
  }
  SortByPriceDesc() {
    let sortedProductsDesc;
    sortedProductsDesc = this.products.sort((a, b) => {
      return parseInt(b.price) - parseInt(a.price);
    })

    this.setState({
      productss: sortedProductsDesc
    })
  }
  onClick(item) {
    return (event) => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = [];
      }
      let oldItem = cart.find((element) => element.title === item.title);
      if (oldItem) {
        oldItem.quantity += 1;
      } else {
        item.quantity = 1;
        cart.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert('Them vao gio hang thanh cong');
    }

  }
  
  render() {
    this.products=this.state.products;
    return (
      <div className="grid-container">
        <button onClick={this.SortByPriceAsc} className='btn btn-info btn-sm b' >SortByPrice <img src={up} /></button>
        <Search tim={this.handleSearch}/>
        <button onClick={this.SortByPriceDesc} className='btn btn-primary btn-sm b' >SortByPrice <img src={down} /></button>
        <br />
        <div className="grid-item">
          {this.products.map((item) => <ProductItem
            onClick={this.onClick(item)}
            item={item}
             />)}
        </div>
      </div>
    );
  }
}
export default Products;