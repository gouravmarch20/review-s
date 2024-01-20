import React from "react"

const Footer = () => {
  return (
    <footer className="flex justify-between bg-white p-12 text-lg	  ">
      <div className=" text-xl	">
<span className=" text-2xl 	 text-[#0073FF] ">Medi</span>
         
        <span className="text-2xl  text-[#FF9F6A] ">Care+</span>
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
  )
}

export default Footer
