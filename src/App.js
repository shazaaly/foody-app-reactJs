import React, { useState } from "react";
import { Suspense } from "react";
// import Meals from "./components/Meals/Meals";
import Header from "./components/UI/Header";
// import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import CartContext from "./store/cart-context";

const Cart = React.lazy(() => import("./components/Cart/Cart"));
const Meals = React.lazy(() => import("./components/Meals/Meals"));

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Suspense fallback={ <div> Loading ... </div>}>
    <CartProvider value={CartContext}>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
    </Suspense>
  );
}

export default App;
