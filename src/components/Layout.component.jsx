import { Outlet } from "react-router-dom";
import { Header } from "./Header.component";
import { Footer } from "./Footer.component";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
