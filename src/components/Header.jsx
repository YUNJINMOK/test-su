import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import headerLogo from "../assets/gpsLogo.svg";

export default function Header() {
  return (
    <div className="w-full h-[60px] flex  justify-center">
      <div className="w-full max-w-[400px]  h-full flex items-center">
        <div className="w-[20%] ml-4 flex justify-start items-center">
          <IoIosArrowBack />
        </div>
        <img className="w-[15%] h-[50%]" src={headerLogo} alt="logo" />
        <span className="text-2xl text-[#119724] font-semibold ffTitle">대구수목원</span>
      </div>
    </div>
  );
}
