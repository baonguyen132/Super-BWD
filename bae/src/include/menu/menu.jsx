import React from "react";
import { Link } from "react-router-dom";
import logoBAE from "../../assets/image/logoBAE.png";
import styles from "./menu.module.scss"; // Đổi từ .scss thường sang SCSS module

function Menu({ user }) {
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

        <div className={styles.nav_package}>
          <div className={styles.btn_active}>
            <div className={styles.in_out}>
              {user ? (
                <p className={styles.name_client} style={{ marginBottom: 0 }}>
                  {user.name}
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

    </>
  );
}

export default Menu;
