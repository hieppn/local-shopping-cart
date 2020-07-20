import React, { Component } from "react";
import "./Product.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends Component {
  render() {
    return (
      <div class="topnav">
          <input type="text" placeholder="Search.." 
          value={this.props.valueSearch}
          name="title"
          onChange={(event) => this.props.tim(event.target.value)}
        ></input>
      </div>
    );
  }
}
export default Search;

