import React from "react";
import {Link} from 'react-router-dom';


function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900 ">
      <nav className="flex items-center container mx-auto h-full justify-between sticky top-0 z-50">
        <h1 className="font-semibold uppercase text-lg text-gray-200">
          🔄 The Deal Store
        </h1>
        <div>
          <ul className="flex items-center space-x-10 text-lg">
            <li><Link to="/" className="text-gray-300 font-semibold hover:text-white">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 font-semibold hover:text-white">About Us</Link></li>
            {/* <li><Link to="/docs" className="text-gray-300 font-semibold hover:text-white">Docs</Link></li> */}
            <li><Link to="/products" className="text-gray-300 font-semibold hover:text-white">Products</Link></li>
          </ul>
        </div>
        <div>
          <Button text="Login" bg="bg-gradient-to-r from-purple-500 to-blue-500"/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
