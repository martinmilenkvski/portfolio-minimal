import React from "react";

const Header = () => {
  return (
    <header className="w-full p-8">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-lg">
          Martin
        </a>

       
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        
        <a href="#" className="text-gray-500">
          Suprise
        </a>
      </nav>
    </header>
  );
};

export default Header;
