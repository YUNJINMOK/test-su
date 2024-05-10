import Header from "./Header";
import MenuBar from "./MenuBar";

export default function Layout({ children }) {
  return (
    <div className="w-full relative" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
      <Header />
      <div className="content">{children}</div>
      <MenuBar />
    </div>
  );
}
