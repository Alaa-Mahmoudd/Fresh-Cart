import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";
import { FaStar, FaShoppingCart, FaHeart, FaTrash } from "react-icons/fa";
export default function WishList() {
  const { addToCart } = useContext(CartContext);
  const { wishLists, removeFromWishList } = useContext(WishListContext);

  if (wishLists.length === 0) {
    return (
      <div className="py-8 w-full text-center">
        <h3 className="text-gray-600 text-3xl mt-10">
          Your wishlist is empty!
        </h3>
      </div>
    );
  }

  async function addProductToCart(productId) {
    await addToCart(productId);
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {wishLists.map((product) => (
          <div
            key={product._id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden p-4 border border-gray-200"
          >
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img
                className="w-full  object-cover rounded-md"
                src={product.imageCover}
                alt={product.title}
              />
            </Link>

            <div className="mt-3">
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

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => addProductToCart(product.id)}
                className="text-green-600 text-xl hover:text-green-500 transition-colors"
              >
                <FaShoppingCart />
              </button>
              <button
                onClick={() => removeFromWishList(product.id)}
                className="text-green-600 text-xl hover:text-green-500 transition-colors"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
