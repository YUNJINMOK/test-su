import { Link } from "react-router-dom";
import "../style/menubar.css";
import Icon from "./Icon";

export default function MenuBar() {
  return (
    <nav className=" fixed bottom-0 w-full h-[70px] bg-[#ECECEC] flex items-center justify-around">
      <Link to="/home">
        <Icon text="홈" />
      </Link>
      <Link>
        <Icon text="지도" />
      </Link>
      <Link to="/stamp">
        <Icon text="스템프" />
      </Link>
      <Link>
        <Icon text="마이페이지" />
      </Link>
    </nav>
  );
}
