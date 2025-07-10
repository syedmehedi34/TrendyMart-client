import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  console.log(products);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Cart;
