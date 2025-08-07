import React from "react";
import styles from "./HistoryCard.module.scss";

function HistoryCard({ item, isOpen, onToggle }) {
  return (
    <div className={styles.card_tag}>
      <div className={styles.card_header}>
        <span className={styles.card_time}>
          <i className="bx bx-calendar"></i> {item.time}
        </span>
        <span
          className={
            item.status === "Đã thu gom"
              ? styles.status_done
              : styles.status_pending
          }
        >
          {item.status}
        </span>
      </div>
      <div className={styles.card_body}>
        <span className={styles.card_points}>
          <i className="bx bx-star"></i> Điểm: {item.points}
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
              {item.batteryTypes.map((b, i) => (
                <li key={i} className={styles.battery_type_item}>
                  <span className={styles.battery_type_name}>{b.type}</span>
                  <div className={styles.battery_type_bar_bg}>
                    <div
                      className={styles.battery_type_bar_fg}
                      style={{
                        width: `${(b.quantity / item.total) * 100}%`,
                        background: `linear-gradient(90deg, #ff5252 0%, #fbc02d 50%, #06d972 100%)`,
                      }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.progress_row}>
          <span className={styles.progress_label}>
            Tổng số lượng pin đã thu gom
          </span>
          <span className={styles.progress_value}>{item.total} viên</span>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
