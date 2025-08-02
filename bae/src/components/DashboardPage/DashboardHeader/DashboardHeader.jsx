import React from "react";
import styles from "./DashboardHeader.module.scss";

function DashboardHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BAE</div>
      <div className={styles.avatar_box}>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar" />
      </div>
    </header>
  );
}

export default DashboardHeader;
