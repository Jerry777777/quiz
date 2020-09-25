import React, {Component} from 'react';
import './SingleProduct.css';

class SingleProduct extends Component {
  render() {
    return (
      <div className="single-product">
        <img src={this.props.imageUrl} alt={this.props.name}/>
        <h4>{this.props.name}</h4>
        <p>单价：{this.props.price}元/{this.props.unit}</p>
        <button>十</button>
      </div>
    );
  }
}

export default SingleProduct; 