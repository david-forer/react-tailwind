import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


    
function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
  useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900 ">
      <nav className="flex items-center container mx-auto h-full justify-between sticky top-0 z-50">
        <h1 className="font-semibold uppercase text-lg text-gray-200">
          🔄 The Deal Store
        </h1>
        <div>
          <ul className="flex items-center space-x-10 text-lg">
            <li>
              <Link
                to="/"
                className="text-gray-300 font-semibold hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 font-semibold hover:text-white"
              >
                About Us
              </Link>
            </li>
          
            <li>
              <Link
                to="/products"
                className="text-gray-300 font-semibold hover:text-white"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="inline-flex ">
        
       {!isAuthenticated && (
    <button className="text-black bg-gray-300 font-bold py-1 px-4 rounded hover:bg-blue-700"  onClick={loginWithRedirect}>Log in</button>
  )}
  {isUser && user.picture && <img src={user.picture} alt={user.name} className="object-contain h-10 rounded mr-4"/>}
  {isUser && user.name && <p className="text-gray-300 mr-4">Welcome, {user.name} </p>} 
  <div className="">
  {isUser && (
    <button className="text-black bg-gray-300 font-bold py-1 px-4 rounded hover:bg-blue-700"  onClick={()=>{logout({returnTo:window.location.origin})}}>Log Out</button>
  )}
  </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
