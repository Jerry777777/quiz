import React, {Component}  from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Mall from "./components/Mall/Mall"
import Order from "./components/Order/Order";
import AddProduct from "./components/AddProduct/AddProduct";
import {HomeOutlined, ShoppingCartOutlined, PlusOutlined} from '@ant-design/icons';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="header">
            <ul>
              <li>
              <NavLink exact to="/"><HomeOutlined />商城</NavLink>
              </li>
              <li>
              <NavLink to="/order"><ShoppingCartOutlined />订单</NavLink>
              </li>
              <li>
              <NavLink to="/add-product"><PlusOutlined />添加商品</NavLink>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/" component={Mall}/>
            <Route path="/order" component={Order}/>
            <Route path="/add-product" component={AddProduct}/>
          </Switch>
        </Router>
        <footer>TW Mall ©2018 Created by ForCheng</footer>
      </div>
    );
  }
}

export default App;
