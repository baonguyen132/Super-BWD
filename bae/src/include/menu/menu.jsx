import React from "react";
import { Link } from "react-router-dom";
import logoBAE from "../../assets/image/logoBAE.png";
import styles from "./menu.module.scss"; // Đổi từ .scss thường sang SCSS module

function Menu({ user }) {
  const handleToggleNavbar = () => {
    const nav = document.getElementById("nav_mobile");
    console.log(nav);
    if (nav) nav.classList.toggle(styles.openNAV);
  };

  return (
    <>
      <div className={styles.header}>
        {/* Header logo */}
        <div className={styles.header_logo}>
          <Link to="/" className={styles.header_logo_item}>
            <img src={logoBAE} alt="BAE Logo" />
            <span>BAE</span>
          </Link>
        </div>

        <ul id="nav" className={styles.nav}>
          <li className={styles.nav_li}>
            <Link to="/">Trang chủ</Link>
          </li>

          {user && (
            <li className={styles.nav_li}>
              <Link to="/cart">Giỏ hàng</Link>
            </li>
          )}

          <li className={styles.nav_li}>
            <Link to="/blog">Thảo luận</Link>
          </li>

          <li className={styles.nav_li} id={styles.signupnav}>
            <p>
              {user ? (
                <Link to="/information">{user.name}</Link>
              ) : (
                <Link to="/login">
                  Đăng nhập{" "}
                  <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
                </Link>
              )}
            </p>
          </li>
        </ul>

        <div className={styles.nav_package}>
          <button onClick={handleToggleNavbar}>
            <i className="bxr bx-menu-wider"></i>
          </button>

          <div className={styles.btn_active}>
            <div className={styles.in_out}>
              {user ? (
                <p className={styles.name_client} style={{ marginBottom: 0 }}>
                  <Link to="/information">{user.name}</Link>
                </p>
              ) : (
                <Link to="/login">
                  Đăng nhập{" "}
                  <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.nav_mobile} id="nav_mobile">
        <div className={styles.close}>
          <button onClick={handleToggleNavbar}>
            X
          </button>
        </div>
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          {user && (
            <li>
              <Link to="/cart">Giỏ hàng</Link>
            </li>
          )}

          <li>
            <Link to="/blog">Thảo luận</Link>
          </li>

          <li>
            <p>
              {user ? (
                <Link to="/information">{user.name}</Link>
              ) : (
                <Link to="/login">Đăng nhập{" "}</Link>
              )}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
