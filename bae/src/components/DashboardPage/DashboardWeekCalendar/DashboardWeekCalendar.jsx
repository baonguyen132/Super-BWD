import React from "react";
import styles from "./DashboardWeekCalendar.module.scss";


function DashboardWeekCalendar() {
  const today = new Date();
  // Thứ tự T2 -> CN
  const days = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  // getDay: 0=CN, 1=T2, ...
  const currentDay = today.getDay();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  // Tính ngày trong tuần hiện tại (bắt đầu từ T2)
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    // T2 là 1, CN là 0
    const diff = i - (currentDay === 0 ? 6 : currentDay - 1);
    const date = new Date(today);
    date.setDate(today.getDate() + diff);
    return date;
  });

  return (
    <div className={styles.week_calendar_container}>
      <div className={styles.header}>
        <span className={styles.month_label}>{currentYear}.{currentMonth}</span>
        <span className={styles.more}>...</span>
      </div>
      <div className={styles.week_days_row}>
        {days.map((d, idx) => (
          <div
            key={d}
            className={
              styles.day_label +
              ((idx === 5 || idx === 6) ? ' ' + styles.red_day : '')
            }
          >
            {d}
          </div>
        ))}
      </div>
      <div className={styles.week_dates_row}>
        {weekDates.map((date, idx) => (
          <div
            key={idx}
            className={
              styles.date_item +
              (date.getDate() === currentDate && date.getMonth() + 1 === currentMonth && date.getFullYear() === currentYear
                ? ' ' + styles.active_date
                : '')
            }
          >
            {String(date.getDate()).padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardWeekCalendar;
