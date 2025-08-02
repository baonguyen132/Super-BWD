import React from "react";
import styles from "./DashboardBanner.module.scss";

function DashboardBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_content}>
        <h2>Chào mừng bạn trở lại!</h2>
        <p>Hệ thống quản lý trao đổi pin BAE. Hãy kiểm tra các thống kê và hoạt động mới nhất của bạn.</p>
      </div>
      <div className={styles.banner_img}>
        <img src="https://img.icons8.com/fluency/96/000000/battery.png" alt="banner" />
      </div>
    </div>
  );
}

export default DashboardBanner;
