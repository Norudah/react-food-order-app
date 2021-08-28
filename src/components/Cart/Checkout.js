import React from "react";
import classes from "./Checkout.module.css";

export default function Checkout(props) {
  const validateCart = (event) => {
    event.preventDefault();
    console.log("Envoyer les données au backend ");
  };

  return (
    <form action="submit">
      <div className={classes["control"]}>
        <label htmlFor="fullName">Nom entier</label>
        <input type="text" id="fullName" />
      </div>
      <div className={classes["control"]}>
        <label htmlFor="address">Adresse</label>
        <input type="text" id="address" />
      </div>
      <div className={classes["control"]}>
        <label htmlFor="postalCode">Code postal</label>
        <input type="text" id="postalCode" />
      </div>
      <div className={classes["control"]}>
        <label htmlFor="city">Ville</label>
        <input type="text" id="city" />
      </div>

      <div>
        <button type="button" onClick={props.abortCheckout}>
          Cancel
        </button>
        <button onClick={validateCart} type="submit">
          Confirmer
        </button>
      </div>
    </form>
  );
}
