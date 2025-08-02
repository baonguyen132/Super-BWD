
import React from "react";
import styles from "./DashboardCharts.module.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

  // Dữ liệu mẫu

function DashboardCharts() {
  // Dữ liệu mẫu
  const monthlyData = [
    { month: "Th1", point: 320 },
    { month: "Th2", point: 210 },
    { month: "Th3", point: 450 },
    { month: "Th4", point: 380 },
    { month: "Th5", point: 500 },
    { month: "Th6", point: 290 },
  ];
  const yearlyData = [
    { year: "2023", orders: 120, pins: 1200 },
    { year: "2024", orders: 180, pins: 1850 },
    { year: "2025", orders: 90, pins: 900 },
  ];

  return (
    <div className={styles.charts_container}>
      <h3>Thống kê hệ thống</h3>
      <div className={styles.charts_grid}>
        <div className={styles.chart_box}>
          <h4>Điểm tích luỹ từng tháng</h4>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={monthlyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#5a6a85" />
              <YAxis stroke="#5a6a85" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="point" stroke="#2ecc71" strokeWidth={3} dot={{ r: 6, stroke: '#fff', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chart_box}>
          <h4>Số đơn đăng ký thu gom pin hằng năm</h4>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={yearlyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" stroke="#5a6a85" />
              <YAxis stroke="#5a6a85" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" stroke="#f1c40f" strokeWidth={3} dot={{ r: 6, stroke: '#fff', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardCharts;
