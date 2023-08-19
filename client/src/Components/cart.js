import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import { useDispatch, useSelector } from 'react-redux'
import { remove } from "../Store/cartSlice";


const Cart = () => {
    const products=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const removecart=(id)=>{
        dispatch(remove(id))
    }
    const cards = products.map((product) => (
        <div className="col-md-12">
        <Card style={{ width: "18rem" }}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR: {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              className="text-center"
              variant="danger"
              onClick={()=>removecart(product.id)}
            >
              Remove from Cart
            </Button>
          </Card.Footer>
        </Card>
        </div>
      ));
  return (
    <div>
      {cards}
    </div>
  )
}

export default Cart
