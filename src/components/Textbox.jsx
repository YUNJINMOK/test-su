import React from "react";
import { MdNavigateNext } from "react-icons/md";

export default function Textbox({ title, text, border }) {
  return (
    <div className="w-full h-full flex justify-center">
      <div
        className={`relative w-[250px] h-full flex flex-col justify-center border-b border-dotted border-[#c1c1c1] ${border}`}
      >
        <span className="text-2xl mb-[3px]">{title}</span>
        <span>{text}</span>
        <MdNavigateNext className=" absolute right-0 top-[40%] text-2xl" />
      </div>
    </div>
  );
}
