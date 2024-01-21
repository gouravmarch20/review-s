import React from "react"

const Sone = ({data}) => {
  return (
    <div className=" max-w-xl	mx-auto  bg-[#FFF] shadow-lg relative mt-12 ">
      <div className="w-[80px] h-[80px]  bg-[#007FF4]  absolute right-0 top-[-40px] z-20 rounded-full text-center  flex justify-center items-center text-white ">
        <p className=" text-4xl	 font-bold	 ">“</p>
      </div>

      <p className="pt-12 px-16 text ">{data?.Reviews.substring(0,120)} {data?.Reviews?.length > 120 && "..."}</p>
      <div className="flex mt-12 pl-12 items-center ">
        <div>
          <img
            src="https://i.pravatar.cc/300"
            loading="lazy"
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
        <div className="ml-7 ">
          <p className="name">{data?.Name}</p>
          <p className="role">{data?.Platform}</p>
        </div>
      </div>
    </div>
  )
}

export default Sone
