import React from "react";
import QRCode from "react-qr-code";
import styles from "./QRCodeModal.module.scss";


function QRCodeModal({token , setTokenHandle}) {
  return (
    <div
      className={styles.qr_overlay}
      role="dialog"
      aria-modal="true"
      onClick={setTokenHandle}
    >
      <div className={styles.qr_modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.qr_close}
          aria-label="Đóng"
          onClick={setTokenHandle}
        >
          ×
        </button>

        <h3 className={styles.qr_title}>Mã QR thu gom pin</h3>
        <div className={styles.qr_code}>
          <QRCode value={String(token)} size={90} />
        </div>
        <p className={styles.qr_text}>
          Quét mã QR này để xác nhận việc thu gom pin.
        </p>
      </div>
    </div>
  );
}

export default QRCodeModal;
