import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const amountInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const amount = +amountInputRef.current.value;
    const amountLength = amountInputRef.current.value.length;

    if (amount > 5 || amount <= 0 || isNaN(amount) || amountLength === 0) {
      return formIsValid && setFormIsValid(false);
    }
    !formIsValid && setFormIsValid(true);
    props.onAddItemToCart(amount);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount-${Math.random()}`,
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Ajouter</button>
      {formIsValid === false && <p>Formulaire incorrect</p>}
    </form>
  );
};

export default MealItemForm;
