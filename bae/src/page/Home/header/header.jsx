import React from "react";
import Menu from "../../../layout/menu/menu";
import styles from "./header.module.scss";
import videoSrc from "../../../../src/assets/video/cay-44749.mp4";

const Header = ({ user }) => {
  return (
    <div className={styles.main}>
      <Menu user={user} />
      <div className={styles.slider}>
        <video autoPlay muted loop className={styles.video}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.content}>
          <div className={styles.sliderInfo}>
            <h1 className={styles.sliderPhara}>
              <span className={styles.animatedText}>Thu gom pin cũ- </span>
              <span className={styles.animatedText2}>bảo vệ môi trường sống</span>
            </h1>
            <span className={styles.sliderMessage}>
              <span className={styles.animatedText3}>
                Chung tay hôm nay – Xanh mãi ngày mai!
              </span>
            </span>
            <div
              className={styles.liquid_glass}
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              <a href="/dashboard" className={styles.sliderBtn}>
                BẮT ĐẦU <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;