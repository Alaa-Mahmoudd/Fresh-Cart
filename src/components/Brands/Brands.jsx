import React, { useEffect, useState } from "react";
import Style from "./Brands.module.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  function getBrands() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/brands`)
      .then(({ data }) => {
        setBrands(data.data);
        // console.log(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Brands:", error);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getBrands();
  }, []);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots visible={true} height="80" width="80" color="#4fa94d" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg font-semibold">{error}</p>
      </div>
    );
  }
  return (
    <div className="py-5  m-8 p-5 ml-10 px-10  mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="text-center bg-white rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-2"
          >
            <div className="w-full h-40 overflow-hidden rounded-md">
              <img
                className="w-full h-full object-contain"
                src={brand.image}
                alt={brand.name}
              />
            </div>
            <h3 className="font-medium text-gray-700 mt-2">{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
