import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[rgb(38,91,163)] shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-900">Rentify</span>
          </h1>
        </Link>
        {/* <form className="bg-teal-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form> */}
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-900 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-900 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            <li className=" text-slate-900 hover:underline"> Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
