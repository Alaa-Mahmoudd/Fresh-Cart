import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";
export default function RecentProducts() {
  let { addToCart } = useContext(CartContext);
  let { wishList } = useContext(WishListContext);

  async function addToWishList(productId) {
    await wishList(productId);
  }

  async function addProductToCart(productId) {
    await addToCart(productId);
  }

  function getRecentProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let { data, isError, error, isLoading } = useQuery({
    queryKey: ["recentProducts"],
    queryFn: getRecentProducts,
    staleTime: 80000,
    select: (data) => data.data.data,
  });

  if (isError) {
    return (
      <div className="py-8 w-full flex justify-center">
        <h3 className="text-red-900 text-6xl">{error.message}</h3>
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
      {data?.map((product) => (
        <div
          key={product.id}
          className="relative group bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center space-x-4">
            <FaHeart
              className="text-white text-2xl cursor-pointer hover:text-green-500 transition"
              onClick={() => addToWishList(product.id)}
            />
            <FaShoppingCart
              className="text-white text-2xl cursor-pointer hover:text-green-500 transition"
              onClick={() => addProductToCart(product.id)}
            />
          </div>

          <Link to={`/productdetails/${product.id}/${product.category.name}`}>
            <img
              className="w-full object-cover"
              src={product.imageCover}
              alt={product.title}
            />
            <div className="p-4">
              <span className="block font-light text-green-600">
                {product.category.name}
              </span>
              <h3 className="text-lg font-normal text-gray-800 truncate">
                {product.title}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-semibold">{product.price} EGP</span>
                <span className="flex items-center">
                  {product.ratingsAverage}{" "}
                  <FaStar className="text-yellow-500 ml-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
