import React, {Component} from 'react';
import "./ProductItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyFormat from 'react-currency-format';
 class CartItem extends Component{
     render(){
        const {item, deleteItem,SubtractItem,AddItem} = this.props;
         return(
            <tr>
                <td><img src={"img/"+item.image} width={50}height={50} /></td>
                 <td>{item.title}
                 {item.title.length > 15 && "..."}</td>
                <td><CurrencyFormat readOnly className="a" thousandSeparator={true} prefix={''} value={item.price}/></td> 
                 <td>
                 <button className="btn btn-danger az"onClick={SubtractItem}>-</button>
                     {item.quantity}
                     <button className="btn btn-info az"onClick={AddItem}></button>
                     </td>
                 <td><CurrencyFormat readOnly className="a" thousandSeparator={true} prefix={''} value={item.price*item.quantity}/></td>
                 <td><button className="btn btn-danger"onClick={deleteItem}>Delete</button></td>
                 </tr>
         );
     }
 }
 export default CartItem;