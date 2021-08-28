import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

export default function Checkout(props) {
  const [formValidity, setFormValidity] = useState({
    fullName: true,
    address: true,
    postalCode: true,
    city: true,
  });

  const isEmpty = (value) => value.trim() === "";

  const isValidPostalCode = (value) => value.trim().length === 5 && !isNaN(parseInt(postalCodeRef.current.value));

  const validateCart = (event) => {
    event.preventDefault();

    const enteredFullName = fullNameRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;
    const enteredCity = cityRef.current.value;

    const fullNameIsValid = !isEmpty(enteredFullName);
    const addressIsValid = !isEmpty(enteredAddress);
    const postalCodeIsValid = isValidPostalCode(enteredPostalCode);
    const cityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      fullName: fullNameIsValid,
      address: addressIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    const formIsValid = fullNameIsValid && addressIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) return;

    props.onConfirm({
      enteredFullName,
      enteredAddress,
      enteredPostalCode,
      enteredCity,
    });
  };

  const fullNameRef = useRef();
  const addressRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  const fullNameClasses = `${classes.control} ${formValidity.fullName ? "" : classes.invalid} `;
  const addressClasses = `${classes.control} ${formValidity.address ? "" : classes.invalid} `;
  const postalCodeClasses = `${classes.control} ${formValidity.postalCode ? "" : classes.invalid} `;
  const cityClasses = `${classes.control} ${formValidity.city ? "" : classes.invalid} `;

  return (
    <form action="submit" className={classes.form}>
      <div className={fullNameClasses}>
        <label htmlFor="fullName">Nom entier</label>
        <input type="text" id="fullName" ref={fullNameRef} />
        {!formValidity.fullName && <p>Votre nom doit être spécifié</p>}
      </div>
      <div className={addressClasses}>
        <label htmlFor="address">Adresse</label>
        <input type="text" id="address" ref={addressRef} />
        {!formValidity.address && <p>Votre adresse doit être spécifiée</p>}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor="postalCode">Code postal</label>
        <input type="number" id="postalCode" ref={postalCodeRef} />
        {!formValidity.postalCode && <p>Votre code postal doit faire 5 caractères</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">Ville</label>
        <input type="text" id="city" ref={cityRef} />
        {!formValidity.city && <p>Votre adresse doit être spécifiée</p>}
      </div>

      <div className={classes.actions}>
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
