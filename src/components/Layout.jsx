import Header from "./Header";
import MenuBar from "./MenuBar";

export default function Layout(children) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <MenuBar />
    </div>
  );
}
