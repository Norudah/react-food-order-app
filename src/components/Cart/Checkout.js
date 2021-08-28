import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

export default function Checkout(props) {
  const [inputError, setInputError] = useState({
    fullName: "",
    address: "",
    postalCode: "",
    city: "",
  });

  const validateCart = (event) => {
    event.preventDefault();
    console.log("validate cart pressed");
    formValidator();
  };

  const formValidator = () => {
    if (fullNameRef.current.value.length === 0) {
      setInputError((prevState) => {
        return { ...prevState, fullName: "Votre nom doit obligatoirement être spécifié" };
      });
    }

    if (addressRef.current.value.length === 0) {
      setInputError((prevState) => {
        return { ...prevState, address: "Votre adresse doit obligatoirement être spécifié" };
      });
    }

    // TODO : typeOf number à voir ce que donne un mot transformé en number pour checker après
    if (postalCodeRef.current.value.length !== 5) {
      setInputError((prevState) => {
        return { ...prevState, postalCode: "Votre ville doit obligatoirement être spécifié" };
      });
    }

    if (cityRef.current.value.length === 0) {
      setInputError((prevState) => {
        return { ...prevState, city: "Votre adresse doit obligatoirement être spécifié" };
      });
    }
  };

  const fullNameRef = useRef();
  const addressRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  return (
    <form action="submit">
      <div className={classes["control"]}>
        <label htmlFor="fullName">Nom entier</label>
        <input type="text" id="fullName" ref={fullNameRef} />
        {inputError.fullName && <p>{inputError.fullName}</p>}
      </div>
      <div className={classes["control"]}>
        <label htmlFor="address">Adresse</label>
        <input type="text" id="address" ref={addressRef} />
        {inputError.address && <p>{inputError.address}</p>}
      </div>
      <div className={classes["control"]}>
        <label htmlFor="postalCode">Code postal</label>
        <input type="number" id="postalCode" ref={postalCodeRef} />
        {inputError.postalCode && <p>{inputError.postalCode}</p>}
      </div>
      <div className={classes["control"]}>
        <label htmlFor="city">Ville</label>
        <input type="text" id="city" ref={cityRef} />
        {inputError.city && <p>{inputError.city}</p>}
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
