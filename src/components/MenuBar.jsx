import "../style/menubar.css";
import Icon from "./Icon";

export default function MenuBar() {
  return (
    <div className=" fixed bottom-0 w-full h-[70px] bg-[#ECECEC] flex items-center justify-around">
      <Icon text="홈" />
      <Icon text="지도" />
      <Icon text="스템프" />
      <Icon text="마이페이지" />
    </div>
  );
}
