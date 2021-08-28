import { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isLoading, setIsLoadings] = useState(true);
  const [httpError, setHttpError] = useState("");

  useEffect(() => {
    const getMeals = async () => {
      setIsLoadings(true);
      const url = "https://react-food-order-app-5bedb-default-rtdb.europe-west1.firebasedatabase.app/meals.json";
      const response = await fetch(url);

      if (!response.ok) throw new Error("Une erreur serveur est survenue.");

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

    getMeals().catch((error) => {
      setIsLoadings(false);
      setHttpError(error.message);
    });
  }, []);

  let meals;

  if (httpError.length > 0) {
    meals = <div>Erreur : {httpError}</div>;
  } else if (isLoading) {
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
