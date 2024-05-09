import { Link } from "react-router-dom";
import "../style/menubar.css";
import Icon from "./Icon";
import { useTheme } from "../context/themeProvider.js";
import { TbLineScan } from "react-icons/tb";

export default function MenuBar() {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <>
      <nav
        className={`fixed bottom-0 w-full h-[70px] ${
          ThemeMode === "dark" ? "bg-[#292929]" : "bg-[#ECECEC]"
        }  flex items-center justify-between px-2`}
      >
        <Link to="/home" className="w-[60px]">
          <Icon text="홈" />
        </Link>
        <Link to="/map" className="w-[60px]">
          <Icon text="지도" />
        </Link>
        <Link
          to="/qr"
          className="relative w-[75px] h-[75px] rounded-full bg-white mb-14 flex flex-col items-center justify-center"
        >
          <div className="absolute bg-[#ECECEC] w-[60px] h-[60px] rounded-full flex items-center justify-center"></div>
        </Link>

        <Link to="/stamp" className="w-[60px]">
          <Icon text="스탬프" />
        </Link>
        <Link to="/mypage" className="w-[60px]">
          <Icon text="마이페이지" />
        </Link>
      </nav>
    </>
  );
}
