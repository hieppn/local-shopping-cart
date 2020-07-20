import React, { Component } from 'react';
import "./ProductItem.css";
import cart from "../img/cart.png";
import logo from "../img/cart.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyFormat from 'react-currency-format';
class ProductItem extends Component {
    render() {
        const { item, onClick, detail } = this.props;
        return (
            <div className="card">
                <a onClick={detail}><img className="card-img-top" src={"img/" + item.image} width={200} height={200} alt="Card image cap" /></a>
                <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">Author: {item.author}</p>
                    <p className="card-text"><CurrencyFormat className="a" thousandSeparator={true} prefix={''} value={item.price} /><span className="txt">VND</span></p>
                    <button className="btn btn-info" onClick={onClick}><img src={cart} width={30} height={30} /></button>

                </div>
            </div>
        );
    }
}
export default ProductItem;