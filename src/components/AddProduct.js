import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AddProduct.css";
import Select from 'react-select';
const options = [
    { value: 'Horror', label: 'Horror' },
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Comic', label: 'Comic' },
    { value: 'Action', label: 'Action' },
];
class AddProduct extends Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
    }
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };
    onAddProduct(event) {
        event.preventDefault();
        let title = event.target["title"].value;
        let price = event.target["price"].value;
        let cate = event.target["select"].value;
        let author = event.target["author"].value;
        let imge=event.target["image"].files.item(0).name;
        let description = event.target["description"].value;
        let id=1;
        if (description == "") {
            description = "doan xem";
        }
        if(!cate){
            cate="Action";
        }
        console.log(cate);
        let products = JSON.parse(localStorage.getItem("lsc-pros"));
        if (!products) {
            products = [];
            id=products.lastItem;
        }
        let oldItem = products.find((element) => element.title === title);
        if (oldItem) {
            alert("Ten san pham nay da co, vui long chon ten khac");
        } else {
            let product = {
                id:products.length+1,
                title: title,
                price: price,
                image: imge,
                category: cate,
                author: author,
                description: description
            }
            products.push(product);
            localStorage.setItem("lsc-pros", JSON.stringify(products));
            console.log(products);
            alert("Them san pham thanh cong");
        }
    }
    render() {
        const { selectedOption } = this.state;
        return (
            <form onSubmit={this.onAddProduct}>
                <label>Title
                <input className="form-control" type="text" required name="title" /></label>
                <label>Price
                <input className="form-control" type="number" required name="price" /></label>
                <label>Author
                <input className="form-control" type="text" required name="author" /></label>
                <label>Description
                <input className="form-control" type="text" name="description" /></label>
                <label>
                    Category:
                    <Select name="select"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />

                </label>
                <label>Image
                <input className="form-control" type="file" required name="image" /></label>
                <br /> <button className="btn btn-warning">Add</button>
            </form>
        );
    }
}
export default AddProduct;