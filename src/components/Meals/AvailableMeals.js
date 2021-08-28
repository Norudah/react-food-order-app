import { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const url = "https://react-food-order-app-5bedb-default-rtdb.europe-west1.firebasedatabase.app/meals.json";
      const response = await fetch(url);
      const meals = await response.json();

      const mealsArray = [];

      for (const id in meals) {
        mealsArray.push({
          id,
          name: meals[id].name,
          description: meals[id].description,
          price: meals[id].price,
        });
      }

      setAvailableMeals(mealsArray);
    };
    getMeals();
  }, []);

  const meals = availableMeals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
