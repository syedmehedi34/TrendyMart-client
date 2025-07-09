/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Star } from "lucide-react";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        // console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 border-gray-200 transition-opacity ease-in duration-500 opacity-100">
      {/* product data starts */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto " />
          </div>
        </div>

        {/* product description part starts */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData?.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-3.5" />
            <Star className="w-3.5" />
            <Star className="w-3.5" />
            <Star className="w-3.5" />
            <Star className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData?.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`cursor-pointer border border-[#E5E7EB] py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 font-medium hover:bg-gray-800 transition-colors duration-300 rounded cursor-pointer"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 text-[#E5E7EB]" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
        {/* product description part ends */}
      </div>
      {/* product data ends */}

      {/* description and review section starts */}
      <div className="mt-20 ">
        <div className="flex ">
          <p className="border border-[#E5E7EB] px-5 py-3 text-sm font-bold">
            Description
          </p>
          <p className="border border-[#E5E7EB] px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>

        <div className="flex flex-col gap-4 border border-[#E5E7EB] px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            cumque, voluptatum, asperiores, incidunt quisquam sed unde
            exercitationem magnam doloremque nobis ad. Quisquam, cumque
            voluptatum! Doloribus cumque, voluptatum, asperiores, incidunt
            quisquam sed unde exercitationem magnam doloremque nobis ad.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            cumque, voluptatum, asperiores, incidunt quisquam sed unde
            exercitationem magnam doloremque nobis ad. Quisquam, cumque
            voluptatum! Doloribus cumque, voluptatum, asperiores, incidunt
            quisquam sed unde exercitationem magnam doloremque nobis ad.
          </p>
        </div>
      </div>
      {/* description and review section ends */}

      {/* display related products starts */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />

      {/* display related products ends */}
    </div>
  ) : (
    <div className="opacity-0">
      <></>
    </div>
  );
};

export default Product;
