import React, { useContext, useEffect, useState } from "react";
import Style from "./CheckOut.module.css";
import { useFormik } from "formik";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function CheckOut() {
  let { checkOutSession } = useContext(CartContext);
  async function checkOut(formValues) {
    let response = await checkOutSession(formValues);
    if (response.status == "success") {
      window.location.href = response.session.url;
    }
  }
  let formik = useFormik({
    initialValues: {
      details: " ",
      phone: "",
      city: "",
    },
    onSubmit: checkOut,
  });
  return (
    <div>
      <div className="py-6 max-w-xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6 text-green-600">CheckOut</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="relative z-0 w-full mb-5 group flex">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.details}
              type="text"
              name="details"
              id="details"
              className="block  py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="details"
              className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your details :
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group flex">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              type="text"
              name="phone"
              id="phone"
              className="block text-black py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your phone :
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group flex">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              type="text"
              name="city"
              id="city"
              className="block text-black py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your city :
            </label>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
