/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default LatestCollection;
