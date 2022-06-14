import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton  onClick={props.onShowCart} />
      </header>

      <div>
        <img
          className={classes.myStyledImage}
          src={mealsImage}
          alt="meals images"
        />
      </div>
    </Fragment>
  );
}
