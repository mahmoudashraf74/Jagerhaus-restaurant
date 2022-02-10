import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "../../../Assist/Card";
import "./AvailableMeals.css";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foody-orderfood-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          pic: responseData[key].pic,
          category: responseData[key].category,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
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

  const handleBtn = (e) => {
    let word = e.target.value;

    if (word === "all") {
      setMeals(meals);
    } else if (word === "burger") {
      const filtered = meals.filter((meal) => meal.category === "burger");
      setMeals(filtered);
    } else if (word === "pizza") {
      const filtered = meals.filter((meal) => meal.category === "pizza");
      setMeals(filtered);
    } else {
      setMeals(meals);
    }
  };

  return (
    <section className="meals">
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
        </Button>{" "}
      </div>

      <Card>
        <Col>
          <Row>
            <ul>{mealsList}</ul>
          </Row>
        </Col>
      </Card>
    </section>
  );
};

export default AvailableMeals;
