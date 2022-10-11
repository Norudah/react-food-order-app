import styles from "./CartButton.module.css";

type PropsType = {
  onActivateModal: () => void;
};

const CartButton = ({ onActivateModal }: PropsType) => {
  return (
    <div className={styles["container"]} onClick={onActivateModal}>
      <span>Votre panier</span>
      <div className={styles["number-container"]}>1</div>
    </div>
  );
};

export default CartButton;
