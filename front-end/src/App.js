import React, {Component}  from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, NavLink, Switch, Route, Redirect} from "react-router-dom";
import Mall from "./components/Mall/Mall"
import Order from "./components/Order/Order";
import AddProduct from "./components/AddProduct/AddProduct";
import { HomeOutlined, ShoppingCartOutlined, PlusOutlined } from '@ant-design/icons';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="header">
            <ul>
              <li>
              <NavLink exact to="/" activeClassName="active"><HomeOutlined />商城</NavLink>
              </li>
              <li>
              <NavLink to="/order" activeClassName="active"><ShoppingCartOutlined />订单</NavLink>
              </li>
              <li>
              <NavLink to="/add-product" activeClassName="active"><PlusOutlined />添加商品</NavLink>
              </li>
            </ul>
            <Redirect to="/" />
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
