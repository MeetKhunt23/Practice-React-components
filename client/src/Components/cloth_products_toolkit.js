import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import {getProducts}  from "../Store/productSlice";

const Cloth_products_toolkit = () => {
  const dispach = useDispatch();
  const { data : products } = useSelector((state) => state.products);
  console.log("data", products);

  useEffect(() => {
    // api call
    dispach(getProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getproducts(result));
  }, []);

  const addToCart = (product) => {
    dispach(add(product));
  };

  
  return (
    <div>
      <div className="row">
        {
     Array.isArray(products) && products?.map((product,index) => (
    <Card style={{ width: "18rem" }} key={index}>
      <div className="text-center">
        <Card.Img
          variant="top"
          src={product?.image}
          style={{ width: "100px", height: "130px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>INR: {product?.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          className="text-center"
          variant="primary"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
      </Card.Footer>
    </Card>
      ))
        }
    </div>
    </div>
  );
};

export default Cloth_products_toolkit;
