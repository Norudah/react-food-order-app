import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";
import styles from "./CartModal.module.css";

type PropsType = {
  onDesactivateModal: () => void;
};

const CartModal = ({ onDesactivateModal }: PropsType) => {
  const cartContext = useContext(CartContext);

  return (
    <Modal onDesactivateModal={onDesactivateModal}>
      <Card style={styles.container}>
        <h1>Voici votre panier :</h1>
        {cartContext.state.items.length > 0 ? (
          cartContext.state.items.length
        ) : (
          <span>Aucuns items dans le panier pour le moment</span>
        )}
        <div className={styles["total-container"]}>
          <span>Total du panier :</span>
          <span>{cartContext.state.amount}</span>
        </div>
        <div></div>
      </Card>
    </Modal>
  );
};

export default CartModal;
