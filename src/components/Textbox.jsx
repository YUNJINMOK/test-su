import React from "react";
import { MdNavigateNext } from "react-icons/md";

export default function Textbox({ title, text }) {
  return (
    <div className="w-full h-full flex justify-center ">
      <div className=" relative w-[250px] h-full flex flex-col justify-center">
        <span className="text-2xl">{title}</span>
        <span>{text}</span>
        <MdNavigateNext className=" absolute right-0 top-[40%] text-2xl" />
      </div>
    </div>
  );
}
