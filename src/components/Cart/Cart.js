import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCardHandler = (item) => cartCtx.addItem(item);
  const removeItemToCardHandler = (id) => cartCtx.removeItem(id);

  const hasItems = cartCtx.amount > 0;
  const price = `${cartCtx.amount.toFixed(2)} €`;

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        amount={item.amount}
        price={item.price}
        name={item.name}
        onAdd={() => addItemToCardHandler({ ...item, amount: 1 })}
        onRemove={() => removeItemToCardHandler(item.id)}
      />
    );
  });

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <div>Prix total du panier</div>
        <div>{price}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Fermer
        </button>
        {hasItems && <button className={classes.button}>Commander</button>}
      </div>
    </Modal>
  );
};

export default Cart;
