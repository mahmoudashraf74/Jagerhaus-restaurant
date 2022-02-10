import React, { Fragment } from "react";
import MealSummary from "./MealSummary";
import MenuItem from "./MenuItem/MenuItem";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <MenuItem />
    </Fragment>
  );
};

export default Meals;
