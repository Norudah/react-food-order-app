import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";
import CartItem from "../CartItem";
import styles from "./CartModal.module.css";

type PropsType = {
  onDesactivateModal: () => void;
};

const CartModal = ({ onDesactivateModal }: PropsType) => {
  const { meals, amount } = useContext(CartContext);

  const cartItems = meals.map((meal) => <CartItem name={meal.item.name} price={meal.item.price} />);

  return (
    <Modal onDesactivateModal={onDesactivateModal}>
      <Card style={styles.container}>
        <h1>Voici votre panier :</h1>
        {cartItems.length > 0 ? cartItems : <span>Aucuns items dans le panier pour le moment</span>}
        <div className={styles["total-container"]}>
          <span>Total du panier :</span>
          <span>{amount}</span>
        </div>
      </Card>
    </Modal>
  );
};

export default CartModal;
