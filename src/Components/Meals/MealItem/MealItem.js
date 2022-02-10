import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import CartContext from "../../../Store/CartContext";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      pic: props.pic,
    });
  };
  return (
    <div className="menu-item" key={props.id}>
      <Card.Img variant="top" src={props.pic} className="item-pic" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
          <div className="price">{price}</div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </Card.Text>
      </Card.Body>
    </div>
    //  <Row>
    //   <Col>
    //     <h3>{props.name}</h3>
    //     <div className="description">{props.description}</div>
    //     <div className="price">{price}</div>
    //   </Col>

    //   <Col>
    //     <img src={props.pic} alt="Food" className="pic-item" />
    //   </Col>
    // </Row>
    // <Row>
    //   <Col>
    //     <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    //   </Col>{" "}
    // </Row>
  );
};

export default MealItem;
