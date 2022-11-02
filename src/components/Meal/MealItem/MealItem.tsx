import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import { CartItem } from "../../../models/interfaces";
import { Type } from "../../../reducers/cart-reducer";
import styles from "./MealItem.module.css";

type PropsType = {
  name: string;
  description: string;
  price: number;
};

const MealItem = ({ name, description, price }: PropsType) => {
  const cartContext = useContext(CartContext);
  const fakeCartItem: CartItem = {
    item: {
      id: 99,
      name: "Name test",
      description: "description test",
      price: 999,
    },
    quantity: 1,
  };

  return (
    <div className={styles.container}>
      <div className={styles["meal-container"]}>
        <span className={styles["meal-name"]}>{name}</span>
        <span className={styles["meal-description"]}>{description}</span>
        <span className={styles["meal-price"]}>{price} €</span>
      </div>
      <div className={styles["menu-container"]}>
        <div className={styles["input-container"]}>
          <div>Quantité : 1</div>
          <input type="number" />
        </div>
        <button onClick={() => cartContext.dispatch({ type: Type.ADD_ITEM, payload: fakeCartItem })}>Ajouter</button>
      </div>
    </div>
  );
};

export default MealItem;
