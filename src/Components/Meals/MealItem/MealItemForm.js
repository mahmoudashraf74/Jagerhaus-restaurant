import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Input from "../../../Assist/Input";
import "./MealItemForm.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Col>
        <Row>
          <Input
            ref={amountInputRef}
            label="Amount"
            input={{
              id: "amount_" + props.id,
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          />
        </Row>
        <Row>
          <button>+ Add </button>
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </Row>
      </Col>
    </form>
  );
};

export default MealItemForm;
