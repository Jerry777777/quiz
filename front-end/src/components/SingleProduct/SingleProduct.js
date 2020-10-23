import React, {Component} from 'react';
import './SingleProduct.css';

class SingleProduct extends Component {
  render() {
    return (
      <div className="single-product">
        <img src={this.props.imageUrl} alt={this.props.name}/>
        <h4>{this.props.name}</h4>
        <p>price：{this.props.price}rmb/{this.props.unit}</p>
        <button
            disabled={this.props.isDisabled}
            onClick={() => this.props.onAddProduct(this.props.id)}>十</button>
      </div>
    );
  }
}

export default SingleProduct; 