import { Outlet } from "react-router-dom";
import { Header } from "./Header.component";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
