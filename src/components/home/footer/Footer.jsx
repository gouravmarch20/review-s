import React from "react";

const Footer = ({handleThemeChange , theme }) => {
  return (
    <footer className="flex justify-between bg-white p-2 text-lg	mb-2  ">
      <div className=" text-xl	">
        <span className=" text-2xl 	 text-[#0073FF] ">Medi</span>
        <span className="text-2xl  text-[#FF9F6A] ">X+</span>
      </div>
      <div className=" text-xl	">
        <span className=" text-2xl 	 text-[#0073FF] " onClick={handleThemeChange} >Theme {theme === "light"? "light" : "dark"}</span>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className=" text-[#0073FF] ">Home </li>
          <li className=" text-[#0073FF] ">About </li>
          <li className=" text-[#0073FF] ">Services </li>
          <li className=" text-[#0073FF] ">News </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
