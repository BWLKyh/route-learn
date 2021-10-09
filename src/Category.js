/*
 * @Descripttion : 
 * @Author       : yanghao
 * @Date         : 2021-10-09 10:24:49
 * @LastEditors  : yanghao
 * @LastEditTime : 2021-10-09 10:35:34
 */
import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

const Item = () => {
  const { name } = useParams();
  console.log('测试1',useRouteMatch(),useParams())

  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

const Category = () => {
  const { url, path } = useRouteMatch();
  console.log('测试2',useRouteMatch(),useParams())
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${url}/footwear`}>Footwear</Link>
        </li>
      </ul>
      <Route path={`${path}/:name`}>
        <Item />
      </Route>
    </div>
  );
};

export default Category;