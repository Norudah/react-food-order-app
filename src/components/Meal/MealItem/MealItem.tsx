import styles from "./MealItem.module.css";

type PropsType = {
  name: string;
  description: string;
  price: number;
};

const MealItem = ({ name, description, price }: PropsType) => {
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
        <button>Ajouter</button>
      </div>
    </div>
  );
};

export default MealItem;
