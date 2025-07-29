import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navigation.module.scss";

function NavigationCustome() {
  const location = useLocation();

  const listMenu = [
    { icon: "bx bx-home-circle", link: "/dashboard" },
    { icon: "bx bx-equal-square", link: "/dashboard/page1" },
    { icon: "bx bx-arrow-from-bottom", link: "/dashboard/page2" },
    { icon: "bx bx-cog", link: "/dashboard/page3" },
  ];

  // Tính toán vị trí của liquid_glass dựa trên route hiện tại
  const activeIndex = listMenu.findIndex(item => item.link === location.pathname);
  const activeTop = activeIndex !== -1 ? activeIndex * 85 : 0;

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <h3>BAE</h3>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_item}>
          <ul>
            <li
              className={styles.liquid_glass}
              style={{ top: `${activeTop}px` }}
            ></li>
            {listMenu.map((item, index) => (
              <li key={index} className={styles.menu_item_li}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  <i className={item.icon}></i>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.menu_logout}>
          <i className="bx bx-log-out"></i>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(NavigationCustome);
