import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/sidebar/sidebar";
import TopBar from "./components/topbar/topbar";
import "./App.scss";
import HomePage from "./pages/home";
import UsersList from "./pages/users/users-list";
import User from "./pages/users/user";
import NewUser from "./pages/users/new-user";
import ProductList from "./pages/products/product-list";
import Product from "./pages/products/product";
import NewProduct from "./pages/products/new-product";

const App = () => {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UsersList} />
            <Route exact path="/new-user" component={NewUser} />
            <Route exact path="/user/:userId" component={User} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/new-product" component={NewProduct} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
