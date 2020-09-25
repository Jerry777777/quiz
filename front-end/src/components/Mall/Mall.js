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
    
    handleAddProduct = (productId) => {
        let request = new Request("/order", {
          method: 'POST',
          body: JSON.stringify({"id": null, "productId": productId, "count": 1}),
          headers: {
            "Content-Type": "application/json"
          }
        })
        fetch(request)
          .catch(error => console.error(error))
      }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="mall-container">
        {this.state.products.map(product => <SingleProduct
          id={product.id}
          name={product.name}
          price={product.price}
          unit={product.unit}
          imageUrl={product.imageUrl}
          onAddProduct={this.handleAddProduct}/>)}
      </div>
    );
  }
}

export default Mall; 