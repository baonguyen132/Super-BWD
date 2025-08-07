import React from "react";
import { useNavigate } from "react-router-dom";
import HistoryCard from "../../HistoryPage/HistoryCard";
import styles from "./DashboardHistoryList.module.scss";

const historyData = [
  {
    time: "2025-08-01 09:30",
    status: "Chưa thu gom",
    points: 10,
    total: 20,
    batteryTypes: [
      { type: "AA", quantity: 2 },
      { type: "AAA", quantity: 1 },
      { type: "CR2032", quantity: 2 },
    ],
  },
  {
    time: "2025-07-25 14:00",
    status: "Đã thu gom",
    points: 20,
    total: 20,
    batteryTypes: [
      { type: "AA", quantity: 10 },
      { type: "AAA", quantity: 5 },
      { type: "CR2032", quantity: 5 },
    ],
  },
  {
    time: "2025-07-10 16:45",
    status: "Chưa thu gom",
    points: 5,
    total: 20,
    batteryTypes: [
      { type: "AA", quantity: 1 },
      { type: "AAA", quantity: 1 },
    ],
  },
];

function DashboardHistoryList() {
  const navigate = useNavigate();

  return (
    <div className={styles.history_list}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 className={styles.history_title}>Lịch sử thu gom</h3>
        <span
          className={styles.see_more_link}
          onClick={() => navigate("/dashboard/history")}
          style={{
            color: "#1890ff",
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          Xem thêm
        </span>
      </div>
      <div className={styles.content}>
        {historyData.slice(0, 2).map((item, idx) => (
          <HistoryCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default DashboardHistoryList;