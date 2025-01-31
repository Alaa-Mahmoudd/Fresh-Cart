import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";
import useProducts from "../../Hooks/useProducts";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";
export default function Products() {
  let { addToCart } = useContext(CartContext);
  let { wishList } = useContext(WishListContext);

  async function addToWishList(productId) {
    await wishList(productId);
  }

  async function addProductToCart(productId) {
    await addToCart(productId);
  }

  let { data, isError, error, isLoading } = useProducts();

  if (isError) {
    return (
      <div className="py-8 w-full flex justify-center">
        <h3 className="text-red-900 text-6xl">{error}</h3>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots visible={true} height="80" width="80" color="#4fa94d" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-5 mt-10">
      {data?.data.data.map((product) => {
        return (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img
                className="w-full object-cover"
                src={product.imageCover}
                alt={product.title}
              />
            </Link>

            <div className="p-4">
              <span className="block font-light text-green-600">
                {product.category.name}
              </span>
              <h3 className="text-lg font-medium text-gray-800 mt-1">
                {product.title.split(" ").slice(0, 2).join(" ")}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-gray-800">
                  {product.price} EGP
                </span>
                <span className="flex items-center">
                  {product.ratingsAverage}{" "}
                  <FaStar className="text-yellow-500 ml-1" />
                </span>
              </div>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="flex gap-4">
                <FaHeart
                  className="text-white text-2xl cursor-pointer hover:text-green-500 transition-colors"
                  onClick={() => addToWishList(product.id)}
                />

                <FaShoppingCart
                  className="text-white text-2xl cursor-pointer hover:text-green-500 transition-colors"
                  onClick={() => addProductToCart(product.id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
