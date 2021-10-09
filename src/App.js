/*
 * @Descripttion : 
 * @Author       : yanghao
 * @Date         : 2021-10-09 10:06:56
 * @LastEditors  : yanghao
 * @LastEditTime : 2021-10-09 11:14:03
 */
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import {  useParams, useRouteMatch } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);

// const Category = () => (
//   <div>
//     <h2>Category</h2>
//   </div>
// );

// const Products = () => (
//   <div>
//     <h2>Products</h2>
//   </div>
// );

export default function App() {
  console.log('测试3',useRouteMatch(),useParams())
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>
      {/* 如果当前路径与 path 匹配就会渲染对应的组件 */}
      <Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/category">
    <Category />
  </Route>
  <Route path="/products">
    <Products />
  </Route>
  {/* <Route path="/:id">
    <p>This text will render for any route other than those defined above</p>
  </Route> */}
  <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/admin" component={Admin} />
</Switch>
    </div>
  );
}
