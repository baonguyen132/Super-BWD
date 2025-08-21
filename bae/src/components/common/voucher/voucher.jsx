import React from "react";
import styles from "./voucher.module.scss";
import QRCode from "react-qr-code";

function Voucher(props) {

  const {item , children , img}  = props;

  return (
    <div className={styles.voucher}>
      <div className={styles.content_voucher}>
        <div className={styles.code_voucher}>
          <div className={styles.contentV}>
            <div className={styles.content_image}>
              {img ?? <QRCode value={String(item.code_voucher)} size={90} />}
            </div>
            <div className={styles.content_introduce}>
              <h3>Giảm {item.name_voucher}</h3>
              <ul>
                <li>
                  <b>Point:</b> {item.point}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.edit_voucher}>
          <div className={styles.editV}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Voucher;
