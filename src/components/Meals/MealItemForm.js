import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

export default function MealItemForm(props) {

  const [amountIsValid, setAmountIsValid] = useState(true)
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    //check enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNumber)
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button> + Add </button>

      {!amountIsValid && <p> Please Enter a Valid Number</p>}
    </form>
  );
}
