import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isAnimate, setIsAnimate] = useState(false);

  const buttonClasses = `${classes.button} ${isAnimate ? classes.bump : ""}`;

  const numberOfCartItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  useEffect(() => {
    if (numberOfCartItems === 0) {
      return;
    }
    setIsAnimate(true);
    const timer = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [numberOfCartItems]);

  return (
    <button className={buttonClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
