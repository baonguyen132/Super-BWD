import React from "react";

import styles from "./DashboardHome.module.scss";
import DashboardHeader from "../../../../components/DashboardPage/DashboardHeader/DashboardHeader";
import DashboardBanner from "../../../../components/DashboardPage/DashboardBanner/DashboardBanner";

import DashboardVoucherList from "../../../../components/DashboardPage/DashboardVoucherList/DashboardVoucherList";
import DashboardCharts from "../../../../components/DashboardPage/DashboardCharts/DashboardCharts";
import DashboardUserInfo from "../../../../components/DashboardPage/DashboardUserInfo/DashboardUserInfo";
import DashboardWeekCalendar from "../../../../components/DashboardPage/DashboardWeekCalendar/DashboardWeekCalendar";
import DashboardHistoryList from "../../../../components/DashboardPage/DashboardHistoryList/DashboardHistoryList";

function DashboardHome() {
  return (
    <div className={styles.dashboard_home}>
      <DashboardHeader />
      <DashboardBanner />

      <div className={styles.main_grid}>
        <div className={styles.left_col}>
          <DashboardCharts />
          <DashboardVoucherList />
          <DashboardHistoryList />
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
