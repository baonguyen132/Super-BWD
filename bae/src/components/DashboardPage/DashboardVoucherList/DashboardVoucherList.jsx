import Voucher from "../../common/voucher/voucher";
import styles from "./DashboardVoucherList.module.scss";

function DashboardVoucherList() {
  // Dữ liệu mẫu voucher
  const vouchers = [
    {
      id: 1,
      name_voucher: "50K Tiki",
      point: 50,
      name_branch_voucher: "Tiki",
      code: "TIKI50K",
      date: "01/07/2025",
      img: "",
    },
    {
      id: 2,
      name_voucher: "20K Shopee",
      point: 20,
      name_branch_voucher: "Shopee",
      code: "SHOPEE20K",
      date: "15/06/2025",
      img: "",
    },
    {
      id: 3,
      name_voucher: "10K Grab",
      point: 10,
      name_branch_voucher: "Grab",
      code: "GRAB10K",
      date: "20/05/2025",
      img: "",
    },
  ];

  return (
    <div className={styles.voucher_list}>
      <h3 className={styles.voucher_title}>Voucher đã đổi</h3>
      <div className={styles.voucher_grid}>
        <div className={styles.content} id="content">
          {vouchers.map((item) => (
            <Voucher key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardVoucherList;
