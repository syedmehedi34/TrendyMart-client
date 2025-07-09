/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      console.log(productsCopy.slice(0, 5));
    }
  }, [category, products, subCategory]);

  return (
    <div>
      <Title text1="RELATED" text2="PRODUCTS" />
    </div>
  );
};

export default RelatedProducts;
