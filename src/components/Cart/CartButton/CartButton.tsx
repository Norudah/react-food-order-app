import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import styles from "./CartButton.module.css";

type PropsType = {
  onActivateModal: () => void;
};

const CartButton = ({ onActivateModal }: PropsType) => {
  const cartContext = useContext(CartContext);
  console.log("CONTEXT CART BUTTON");
  console.log(cartContext);
  return (
    <div className={styles["container"]} onClick={onActivateModal}>
      <span>Votre panier</span>
      <div className={styles["number-container"]}>{cartContext.state.items.length}</div>
    </div>
  );
};

export default CartButton;
