import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const meal = props.meal;
  const price = `${meal.price.toFixed(2)} €`;

  const addItemToCartHandler = (amount) => {
    const newItem = {
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: amount,
    };
    cartCtx.addItem(newItem);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={classes.description}>{meal.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <MealItemForm onAddItemToCart={addItemToCartHandler} />
    </li>
  );
};

export default MealItem;
