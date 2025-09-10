import Link from "next/link";
import React, { useState } from "react";
// internal 
import menu_data from "./menu-data";
import Image from 'next/image';
import firstState from "@assets/img/menu/first_state.svg";
import secondState from "@assets/img/menu/second_state.png";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
              {menu.has_dropdown && (
                <li className="has-dropdown">
                  <Link href={menu.link}>{menu.title}</Link>
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, i) => (
                      <li key={i}>
                        <Link href={sub.link}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${
                      navTitle === menu.title ? "mean-clicked" : ""
                    }`}
                   
                    onClick={() => openMobileMenu(menu.title)}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <i className="fa-regular fa-angle-down"></i>
                  </a>
                </li>
              )}
              {!menu.has_dropdown && (
                <li className="p-relative mb-menu-list services_icon">
                  <Link href={menu.link}>
                  
                    <span>{menu.title}</span>
                    <Image className="first_state" src={firstState} alt="Icon"/>
                    <Image className="hide_2nd_state" src={secondState} alt="Icon"/>
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
