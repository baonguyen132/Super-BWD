import React, { useState } from "react";
import styles from "./HistoryList.module.scss";
import HistoryCard from "../../../../components/HistoryPage/HistoryCard";

// Dummy data for demonstration
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

function HistoryList() {
  const [openDetailIdx, setOpenDetailIdx] = useState(null);
  return (
    <div className={styles.history_list_container}>
      <h2 className={styles.title}>Lịch sử đăng ký thu gom pin</h2>
      <div className={styles.list}>
        {historyData.map((item, idx) => (
          <HistoryCard
            key={idx}
            item={item}
            isOpen={openDetailIdx === idx}
            onToggle={() =>
              setOpenDetailIdx(openDetailIdx === idx ? null : idx)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default HistoryList;
