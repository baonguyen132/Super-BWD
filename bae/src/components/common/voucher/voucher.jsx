import React from "react";
import styles from "./voucher.module.scss";
import QRCode from "react-qr-code";

function Voucher({ item }) {
  function exchange(id) {
    console.log("Voucher exchanged:", id);
  }

  return (
    <div className={styles.voucher}>
      <div className={styles.content_voucher}>
        <div className={styles.code_voucher}>
          <div className={styles.contentV}>
            <div className={styles.content_image}>
              <QRCode value={String(item.id)} size={90} />
            </div>
            <div className={styles.content_introduce}>
              <h3>{item.name_voucher}</h3>
              <ul>
                <li>
                  <b>Point:</b> {item.point}
                </li>
                <li>
                  <b>Voucher Branch:</b> {item.name_branch_voucher}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.edit_voucher}>
          <div className={styles.editV}></div>
        </div>
      </div>
    </div>
  );
}

export default Voucher;
