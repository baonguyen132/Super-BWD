import React from "react";

import styles from "./DashboardHome.module.scss";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardBanner from "./DashboardBanner/DashboardBanner";

import DashboardVoucherList from "./DashboardVoucherList/DashboardVoucherList";
import DashboardCharts from "./DashboardCharts/DashboardCharts";
import DashboardUserInfo from "./DashboardUserInfo/DashboardUserInfo";
import DashboardWeekCalendar from "./DashboardWeekCalendar/DashboardWeekCalendar";

function DashboardHome() {
  return (
    <div className={styles.dashboard_home}>
      <DashboardHeader />
      <DashboardBanner />
      

      <div className={styles.main_grid}>
        <div className={styles.left_col}>
          <DashboardCharts />
          <DashboardVoucherList />
        </div>
        <div className={styles.right_col}>
          <DashboardWeekCalendar />
          <DashboardUserInfo />

        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
