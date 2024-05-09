import { Link } from "react-router-dom";
import "../style/menubar.css";
import Icon from "./Icon";
import { useTheme } from "../context/themeProvider.js";

export default function MenuBar() {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <nav className={`fixed bottom-0 w-full h-[70px] ${ThemeMode==="dark"? "bg-[#292929]" : "bg-[#ECECEC]"}  flex items-center justify-around`}>
      <Link to="/home">
        <Icon text="홈" />
      </Link>
      <Link to="/map">
        <Icon text="지도" />
      </Link>
      <Link to="/stamp">
        <Icon text="스템프" />
      </Link>
      <Link to="/mypage">
        <Icon text="마이페이지" />
      </Link>
    </nav>
  );
}
