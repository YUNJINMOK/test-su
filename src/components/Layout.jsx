import Header from "./Header";
import MenuBar from "./MenuBar";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="content">{children}</div>
      <MenuBar />
    </div>
  );
}
