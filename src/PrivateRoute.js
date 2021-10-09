/*
 * @Descripttion : 
 * @Author       : yanghao
 * @Date         : 2021-10-09 10:48:44
 * @LastEditors  : yanghao
 * @LastEditTime : 2021-10-09 10:51:34
 */
import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { fakeAuth } from "./Login";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  return (
    <Route {...rest}>
      {fakeAuth.isAuthenticated === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;