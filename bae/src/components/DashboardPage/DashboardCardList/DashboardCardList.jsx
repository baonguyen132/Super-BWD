import React from "react";
import styles from "./DashboardCardList.module.scss";

function DashboardCardList() {
  // Dữ liệu mẫu cho các card bên dưới
  const cards = [
    { name: "Nguyễn Văn B", role: "Người trao đổi", rating: 5 },
    { name: "Nguyễn Văn C", role: "Người trao đổi", rating: 4 },
    { name: "Nguyễn Văn D", role: "Người trao đổi", rating: 5 },
  ];

  return (
    <div className={styles.card_list}>
      {cards.map((item, idx) => (
        <div className={styles.card} key={idx}>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar" />
          <div className={styles.info}>
            <h4>{item.name}</h4>
            <p>{item.role}</p>
            <div className={styles.rating}>{"★".repeat(item.rating)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCardList;
