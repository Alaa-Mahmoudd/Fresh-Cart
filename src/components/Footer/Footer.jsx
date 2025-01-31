import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // استيراد Link من react-router-dom

export default function Footer() {
  return (
    <footer className="bg-white text-green-600 py-4 mt-8 w-full bottom-0">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Route Academy. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link to="/" className="text-green-600 text-lg hover:text-green-400">
            Home
          </Link>
          <Link
            to="/about"
            className="text-green-600 text-lg hover:text-green-400"
          >
            About
          </Link>
          <Link
            to="/category"
            className="text-green-600 text-lg hover:text-green-400"
          >
            Category
          </Link>
          <Link
            to="/cart"
            className="text-green-600 text-lg hover:text-green-400"
          >
            Cart
          </Link>

          <Link
            to="/contact"
            className="text-green-600 text-lg hover:text-green-400"
          >
            Contact
          </Link>
          <Link
            to="/register"
            className="text-green-600 text-lg hover:text-green-400"
          >
            Register
          </Link>
          <Link
            to="/privacy-policy"
            className="text-green-600 text-lg hover:text-green-400"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-2xl hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-2xl hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-2xl hover:text-pink-600"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-2xl hover:text-black"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-2xl hover:text-red-600"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
