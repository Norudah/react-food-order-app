import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

import { useContext, useState } from "react";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckingOut, setisCheckingOut] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);

  const toggleCheckout = () => setisCheckingOut((prevState) => !prevState);

  const submitOrderHandler = async (userData) => {
    const url = "https://react-food-order-app-5bedb-default-rtdb.europe-west1.firebasedatabase.app/orders.json";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        userData,
        items: cartCtx.items,
      }),
    });
    setHasSubmit(true);
  };

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

  const cartModalContent = (
    <>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <div>Prix total du panier</div>
        <div>{price}</div>
      </div>
      {isCheckingOut && <Checkout abortCheckout={toggleCheckout} onConfirm={submitOrderHandler} />}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Fermer
        </button>
        {hasItems && !isCheckingOut && (
          <button className={classes.button} onClick={toggleCheckout}>
            Commander
          </button>
        )}
      </div>
    </>
  );

  const submitedFormModalContent = (
    <>
      <p>La commande à bien été passée : Bon appétit !</p>
      <div className={classes.actions}>
        <button
          className={classes.button}
          onClick={() => {
            props.onHideCart();
            cartCtx.clearCart();
          }}
        >
          Fermer
        </button>
      </div>
    </>
  );

  return <Modal>{hasSubmit ? submitedFormModalContent : cartModalContent}</Modal>;
};

export default Cart;
