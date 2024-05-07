import React from "react";
import { IoMdHome } from "react-icons/io";

// text를 구조 분해하여 사용하도록 수정
export default function Icon({ text }) {
  return (
    <div className="flex flex-col items-center">
      <IoMdHome className="text-4xl" />
      <p className="text-sm">{text}</p>
    </div>
  );
}
