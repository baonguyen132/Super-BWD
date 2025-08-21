import React from "react";
import styles from "./HistoryCard.module.scss";

function HistoryCard({ item, isOpen, onToggle }) {
  console.log(item);
  let total = 0 ;
  return (
    <div className={styles.card_tag}>
      <div className={styles.card_header}>
        <span className={styles.card_time}>
          <i className="bx bx-calendar"></i> {item.created_at}
        </span>
        <span
          className={
            item.token === "NULL"
              ? styles.status_done
              : styles.status_pending
          }
        >
          {item.token === "NULL" ? "Đã thu gom" : "Chưa thu gom"}
        </span>
      </div>
      <div className={styles.card_body}>
        <span className={styles.card_points}>
          <i className="bx bx-star"></i> Điểm: {item.total}
        </span>
        <div className={styles.battery_types_row}>
          <span
            className={styles.battery_types_label}
            style={{ cursor: "pointer" }}
            onClick={onToggle}
          >
            Chi tiết từng loại pin {isOpen ? "▲" : "▼"}
          </span>
          {isOpen && (
            <ul className={styles.battery_types_list}>
              {item.items.map((b, i) => (
                
                
                <li key={i} className={styles.battery_type_item}>
                  <span className={styles.battery_type_name}>{b.name_battery}</span>
                  <div className={styles.battery_type_bar_bg}>
                    <div
                      className={styles.battery_type_bar_fg}
                      style={{
                        width: `${(b.point * b.count / item.total) * 100}%`,
                        background: `linear-gradient(90deg, #ff5252 0%, #fbc02d 50%, #06d972 100%)`,
                      }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
