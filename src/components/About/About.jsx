import React from "react";
import aboutImage from "../../assets/images/woman-with-shopping-cart-illustration_23-2148896783.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">FRESH CART</h1>
          <p className="text-gray-600 leading-relaxed">
            Our E-commerce website is designed to provide a convenient and
            secure online shopping experience. Explore a wide range of products
            across various categories, enjoy competitive prices, and benefit
            from fast delivery services. Whether you're looking for the latest
            trends or everyday essentials, our platform offers everything you
            need at your fingertips.
          </p>
          <div className="flex justify-start mt-10">
            <button
              onClick={() => navigate("/products")}
              className="bg-green-600 text-white hover:bg-green-500 transition duration-300 p-3"
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            className="rounded-lg shadow-lg w-full object-cover"
            src={aboutImage}
            alt="about illustration"
          />
        </div>
      </div>
    </div>
  );
}
