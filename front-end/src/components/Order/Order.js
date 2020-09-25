import React, { Component } from 'react';
import {Table, Button} from 'antd';
import './Order.css';

class Order extends Component {
  state = {
    data: [],
    products: [],
    orders: []
  }

  getOrders() {
    fetch("/orders", {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        this.setState({orders: data})
        return fetch("/products", { method: 'GET'})
      })
      .then(res => res.json())
      .then(data => {this.setState({products: data})})
      .then(() => this.setState({data: this.state.orders.map(item => {
          let currentProduct = this.state.products.find(product => product.id === item.productId);
          return {
            name: currentProduct.name,
            price: currentProduct.price,
            count: item.count,
            unit: currentProduct.unit,
          }
        })}))
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.getOrders();
  }

  render() {
    const columns = [
      {
        title: '名字',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '单价',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '数量',
        dataIndex: 'count',
        key: 'count',
      },
      {
        title: '单位',
        key: 'unit',
        dataIndex: 'unit',
      },
      {
        title: '操作',
        key: 'action',
        render: () => <Button danger>删 除</Button>
      },
    ];

    const data = this.state.data;

    return (
      <div className="order-list">
        {data.length === 0 ?
          <span>暂无订单，返回<a href="/">商城页面</a>继续购买</span> :
          <Table columns={columns} dataSource={data} pagination={false}/>}
      </div>
    );
  }
}

export default Order; 