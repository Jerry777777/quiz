import React from 'react';

export default class AddProduct extends React.Component {
  state = {
    'add-name': '',
    'add-price': '',
    'add-unit': '',
    'add-image': ''
  }

  render() {
    return (
      <section className="page" id="add-product">
        <h2>添加商品</h2>
        <form>
          <label htmlFor="add-name"><span>*</span>名称:</label>
          <input type="text" id="add-name" name="add-name" placeholder="名称" onChange={this.handleChange} />
          <label htmlFor="add-price"><span>*</span>价格:</label>
          <input type="text" id="add-price" name="add-price" placeholder="价格" onChange={this.handleChange} />
          <label htmlFor="add-unit"><span>*</span>单位:</label>
          <input type="text" id="add-unit" name="add-unit" placeholder="单位" onChange={this.handleChange} />
          <label htmlFor="add-image"><span>*</span>图片:</label>
          <input type="text" id="add-image" name="add-image" placeholder="URL" onChange={this.handleChange} />
          <button type="submit" disabled={!this.isValid()}>提交</button>
        </form>
      </section>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  isValid = () => {
    return this.state['add-name'].length > 0 &&
      this.state['add-price'].length > 0 &&
      !Number.isNaN(Number(this.state['add-price'])) &&
      this.state['add-unit'].length > 0 &&
      this.state['add-image'].length > 0;
  }

  handleSubmit = async () => {
    const product = {
      name: this.state['add-name'],
      price: Number(this.state['add-price']),
      unit: this.state['add-unit'],
      image: this.state['add-image']
    };
    this.clear();
  }

  clear = () => {
    this.setState({
      'add-name': '',
      'add-price': '',
      'add-unit': '',
      'add-image': ''
    });
  }
}
