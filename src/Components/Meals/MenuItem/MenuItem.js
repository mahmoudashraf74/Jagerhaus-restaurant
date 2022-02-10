import React from "react";
import { useState } from "react";
import "./MenuItem.css";

import info from "./MealsData";
import { Button, Container } from "react-bootstrap";
import MealItem from "../MealItem/MealItem";
import Card from "../../../Assist/Card";

const MenuItem = (props) => {
  const [data, setData] = useState(info);

  const handleBtn = (e) => {
    let word = e.target.value;

    if (word === "all") {
      setData(info);
    } else if (word === "burger") {
      const filtered = info.filter((meal) => meal.category === "burger");
      setData(filtered);
    } else if (word === "pizza") {
      const filtered = info.filter((meal) => meal.category === "pizza");
      setData(filtered);
    } else if (word === "Dishes") {
      const filtered = info.filter((meal) => meal.category === "Dishes");
      setData(filtered);
    } else {
      setData(info);
    }
  };

  const mealsList = data.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      category={meal.category}
      pic={meal.pic}
    />
  ));
  return (
    <div className="MenuItem">
      <Container>
        {" "}
        <div className="btn-filter">
          <Button
            className="active"
            variant="outline-light"
            value="all"
            onClick={handleBtn}
          >
            All
          </Button>{" "}
          <Button variant="outline-light" value="burger" onClick={handleBtn}>
            Burger
          </Button>{" "}
          <Button variant="outline-light" value="pizza" onClick={handleBtn}>
            Pizza
          </Button>
          <Button variant="outline-light" value="Dishes" onClick={handleBtn}>
            Dishes
          </Button>{" "}
        </div>
        <Card>
          <div className="menu-contianer" key={props.id} id="menu">
            {mealsList}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default MenuItem;
