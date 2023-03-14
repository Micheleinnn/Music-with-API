import React from "react";
import MenuList from "../menu-list/Menu-list";
import "./layout.css";
const Layout = ({ children }) => {
  return (
    <div className={"layout"}>
      <MenuList />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
