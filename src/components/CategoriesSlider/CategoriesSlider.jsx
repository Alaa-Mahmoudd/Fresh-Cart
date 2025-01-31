import React, { useEffect, useState } from "react";
import Style from "./CategoriesSlider.module.css";
import Slider from "react-slick";
import axios from "axios";

export default function CategoriesSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 3,
    centerMode: false,
    centerPadding: "0",
    autoplay: true,
  };

  const [categories, setCategories] = useState([]);

  function getCategories() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then(({ data }) => {
        setCategories(data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="py-5">
      <h2 className="py-4 text-gray-800 font-medium text-xl">
        Shop Popular Categories
      </h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={category.id || index}>
            <img
              className="category-img"
              src={category.image}
              alt={category.name}
            />
            <h3 className="font-light mt-2 ">{category.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
