import { useContext } from "react";
import CartContext from "../../../../Store/CartContext";
import { BsHandbag } from "react-icons/bs";
import "./NavCartButton.css";

const NavCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className="button" onClick={props.onClick}>
      <BsHandbag className="icon" />
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default NavCartButton;
