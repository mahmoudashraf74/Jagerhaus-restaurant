import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from "./Components/Cart/Cart";
import Navs from "./Components/Sections/Header/NAV/Navs";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";
import Footer from "./Components/Sections/Footer/Footer";
import InfoPart from "./Components/Sections/Part/InfoPart";
import Landing2 from "./Components/Sections/Header/Landing/Landing2";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navs onShowCart={showCartHandler} />
      <Landing2 />
      <main>
        <Meals />
      </main>
      <InfoPart />

      <Footer />
    </CartProvider>
  );
}

export default App;
