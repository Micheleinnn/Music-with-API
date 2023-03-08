import React from "react";
import "./menu-list.css";

const MenuList = () => {
  return (
    <nav className={"navigace"}>
      <ul className={"menu-list"}>
        <li>
          <a href={"/"}>
            <h1>Songs</h1>
          </a>
        </li>
        <li>
          <a href={"/biography"}>
            <h1>Biography</h1>
          </a>
        </li>
        <li>
          <a href={"/photos"}>
            <h1>Photos</h1>
          </a>
        </li>
        <li>
          <a href={"/concerts"}>
            <h1>Concerts</h1>
          </a>
        </li>
        <li>
          <a href={"/TOP10"}>
            <h1>TOP10</h1>
          </a>
        </li>
        <li>
          <a href={"/Books"}>
            <h1>Books</h1>
          </a>
        </li>
        <li>
          <a href={"/News"}>
            <h1>News</h1>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuList;
