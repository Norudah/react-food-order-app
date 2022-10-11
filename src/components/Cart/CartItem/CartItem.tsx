import styles from "./CartItem.module.css";

type PropsType = {
  name: string;
  price: number;
};

const CartItem = ({ name, price }: PropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles["meal-container"]}>
        <span className={styles["meal-name"]}>{name}</span>
        <span className={styles["meal-price"]}>{price} €</span>
      </div>
      <div className={styles["menu-container"]}>
        <div>+</div>
        <div>X</div>
        <div>-</div>
      </div>
    </div>
  );
};

export default CartItem;
