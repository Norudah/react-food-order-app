import { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isLoading, setIsLoadings] = useState(true);

  useEffect(() => {
    const getMeals = async () => {
      setIsLoadings(true);
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
      setIsLoadings(false);
    };
    getMeals();
  }, []);

  let meals;

  if (isLoading) {
    meals = <div>Chargement...</div>;
  } else {
    meals = availableMeals.map((meal) => <MealItem key={meal.id} meal={meal} />);
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
