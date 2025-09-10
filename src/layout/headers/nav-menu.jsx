import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul> 

        <li>
          <div className=" d-flex justify-content-end d-block d-xxl-none">
                <div className=" offcanvas-open-btn"  
                onClick={() => setSidebarOpen(true)}
                  >
                  <button className="hamburger-btn">
                      <span>
                        <img src='/assets/img/icon/header-hamburger-shape.svg'/>
                      </span>
                  </button>
                </div>
            </div>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
