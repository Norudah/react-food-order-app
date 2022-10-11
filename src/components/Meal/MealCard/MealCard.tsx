import { Meal } from "../../../ts/interfaces";
import Card from "../../UI/Card";
import MealItem from "../MealItem";
import styles from "./MealCard.module.css";

type PropsType = {
  children?: React.ReactNode;
  meals: Meal[];
};

const MealCard = ({ children, meals }: PropsType) => {
  const mealItems = meals.map((meal) => (
    <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
  ));

  return <Card style={styles["container"]}>{mealItems}</Card>;
};

export default MealCard;
