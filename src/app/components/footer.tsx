import React from "react"; 

const Footer = () => {
  
  return (
    <footer className="w-full p-8">
      {" "}
     
      <div className="container mx-auto flex justify-between items-center">
        {" "}
       
        <div className="flex flex-col space-y-2 text-sm text-gray-500">
          <a href="#" className="hover:text-black">
            Instagram
          </a>
          <a href="#" className="hover:text-black">
            LinkedIn
          </a>
          <a href="#" className="hover:text-black">
            GitHub
          </a>
        </div>
       
        <div className="text-right">
          <p className="font-bold uppercase">contact@martinnarg.COM</p>
          <p className="font-bold">+1 265 164 154</p>
          <p className="text-sm text-gray-500 mt-4">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
