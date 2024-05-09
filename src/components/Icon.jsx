import React from "react";
import { FaHome, FaMap, FaStamp, FaUser } from "react-icons/fa";
import { useTheme } from "../context/themeProvider";

export default function Icon({ text, icon, size }) {
  const [ThemeMode, toggleTheme] = useTheme();
  let IconImg;
  switch (icon) {
    case "home":
      IconImg = FaHome;
      break;
    case "map":
      IconImg = FaMap;
      break;
    case "stamp":
      IconImg = FaStamp;
      break;
    case "user":
      IconImg = FaUser;
      break;
  }
  return (
    <div className={`flex flex-col items-center ${ThemeMode === "dark" ? "text-[#f1f1f1]" : "text-[#808080]"}`}>
      <IconImg className="mb-1" size={size} />
      <p className="text-xs">{text}</p>
    </div>
  );
}
