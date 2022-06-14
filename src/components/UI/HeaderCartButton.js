import React, { useState } from "react";
import { useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const cartctx = useContext(CartContext);

  const numberOfItems = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [buttonBump, setButtonBump] = useState(false);
  const { items } = cartctx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonBump(true);
    const timer = setTimeout(() => {
      setButtonBump(false);
    }, 300);

    return ()=>{
      clearTimeout(timer)
    }
  }, [items]);

  const btnClasses = `${classes.button} ${buttonBump ? classes.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfItems} </span>
    </button>
  );
}
