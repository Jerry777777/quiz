import React, { Component } from 'react';
import SingleProduct from "../SingleProduct/SingleProduct";
import './Mall.css';

class Mall extends Component {
    constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  getProducts = () => {
    fetch("/products", { method: 'GET'})
      .then(res => res.json())
      .then(data => {this.setState({products: data})})
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="mall-container">
        {this.state.products.map(product => <SingleProduct
          name={product.name}
          price={product.price}
          unit={product.unit}
          imageUrl={product.imageUrl}/>)}
      </div>
    );
  }
}

export default Mall; 