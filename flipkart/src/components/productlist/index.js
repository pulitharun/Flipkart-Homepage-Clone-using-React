import React from "react";
import "./productList.css";

const ProductList = (props) => {
  const { children } = props;
  return <div className="product_list_wrapper">{children}</div>;
};

export default ProductList;