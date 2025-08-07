import React, { useState } from "react";
import styles from "./DashboardVoucher.module.scss";
import Voucher from "../../../../components/common/voucher/voucher";

const voucherData = [
  {
    id: 1,
    name_voucher: "50K Tiki",
    point: 50,
    name_branch_voucher: "Tiki",
    status: "Chưa đổi",
    code: "TIKI50K",
    date: "01/07/2025",
    img: "",
  },
  {
    id: 2,
    name_voucher: "20K Shopee",
    point: 20,
    name_branch_voucher: "Shopee",
    status: "Đã đổi",
    code: "SHOPEE20K",
    date: "15/06/2025",
    img: "",
  },
  {
    id: 3,
    name_voucher: "10K Grab",
    point: 10,
    name_branch_voucher: "Grab",
    status: "Chưa đổi",
    code: "GRAB10K",
    date: "20/05/2025",
    img: "",
  },
];

function DashboardVoucher() {
  const [filter, setFilter] = useState("Tất cả");
  const filtered =
    filter === "Tất cả"
      ? voucherData
      : voucherData.filter((v) =>
          filter === "Đã đổi" ? v.status === "Đã đổi" : v.status === "Chưa đổi"
        );
  return (
    <div className={styles.voucher_screen_container}>
      <div className={styles.filter_header}>
        <h2 className={styles.title}>Danh sách Voucher</h2>
        <div className={styles.filter_row}>
          <select
            name="status"
            id=""
            onChange={(e) => {setFilter(e.target.value);}}
            className={styles.filter_btn}
            value={filter}
          >
            <option value="Tất cả">Tất cả</option>
            <option value="Đã đổi">Đã đổi</option>
            <option value="Chưa đổi">Chưa đổi</option>
          </select>
        </div>
      </div>
      <div className={styles.voucher_list}>
        {filtered.map((item) => (
          <Voucher key={item.id} item={item}>
            {item.status === "Chưa đổi" ? (
              <button className={styles.redeem_button}>Đổi ngay</button>
            ) : (
              <></>
            )}
          </Voucher>
        ))}
      </div>
    </div>
  );
}

export default DashboardVoucher;
