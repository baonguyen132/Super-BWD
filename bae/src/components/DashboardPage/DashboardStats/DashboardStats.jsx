import React from "react";
import styles from "./DashboardStats.module.scss";

function DashboardStats() {
  // Dữ liệu mẫu, có thể thay bằng API
  const exchangeOrders = 120;
  const monthlyPoints = [
    { month: "Tháng 1", points: 320 },
    { month: "Tháng 2", points: 210 },
    { month: "Tháng 3", points: 450 },
    { month: "Tháng 4", points: 380 },
    { month: "Tháng 5", points: 500 },
    { month: "Tháng 6", points: 290 },
  ];
  const yearlyCollected = [
    { year: 2023, amount: 1200 },
    { year: 2024, amount: 1850 },
    { year: 2025, amount: 900 },
  ];

  return (
    <div className={styles.stats_container}>
      <div className={styles.stat_card}>
        <h3>Số đơn trao đổi pin</h3>
        <div className={styles.stat_value}>{exchangeOrders}</div>
      </div>
      <div className={styles.stat_card}>
        <h3>Thống kê điểm từng tháng</h3>
        <ul>
          {monthlyPoints.map((item, idx) => (
            <li key={idx}>
              <span>{item.month}:</span> <b>{item.points} điểm</b>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.stat_card}>
        <h3>Số lượng thu được từng năm</h3>
        <ul>
          {yearlyCollected.map((item, idx) => (
            <li key={idx}>
              <span>{item.year}:</span> <b>{item.amount} viên pin</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardStats;
