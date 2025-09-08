// ...existing code...
import React, { useContext, useEffect, useState } from "react";
import styles from "./DashboardMyVoucher.module.scss";
import QRCode from "react-qr-code";
import { useFetchVoucherOfUser } from "../../../hooks/useVoucher";
import { UserContext } from "../../../context/UserContext";

/**
 * Trang: DashboardMyVoucher
 * Mô tả: Hiển thị danh sách voucher của người dùng.
 * Không tạo file mới — toàn bộ trang nằm trong file này.
 */

export default function DashboardMyVoucher() {
  const { user } = useContext(UserContext);
  const [dataVoucher, setDataVoucher] = useState([]);

  const {vouchers, loading: loadingVouchers, error: errorVouchers} = useFetchVoucherOfUser({
    idUser: user.id,
    dependencies: [],
  });

  useEffect(() => {
    if (vouchers?.data) {
      console.log(vouchers?.data);
      setDataVoucher(vouchers.data);
    }
  }, [vouchers]);

  const handleUse = async (id) => {
    try {
      // await fetch(`/api/vouchers/use/${id}`, { method: "POST" });
      setDataVoucher((prev) =>
        prev.map((v) => (v.id === id ? { ...v, status: "used" } : v))
      );
    } catch (err) {
      console.error("Không thể sử dụng voucher:", err);
    }
  };

  const isExpired = (createdAt) => {
    if (!createdAt) return false;
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffTime = now - createdDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays > 365; // Giả sử voucher hết hạn sau 365 ngày
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Không rõ";
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
  };

  if (loadingVouchers) return <div className={styles.loading}>Đang tải voucher...</div>;
  if (errorVouchers) return <div className={styles.error}>Error: {errorVouchers}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Voucher của tôi</h2>

      {loadingVouchers && <div className={styles.loading}>Đang tải voucher...</div>}

      {!loadingVouchers && dataVoucher.length === 0 && (
        <div className={styles.empty}>
          Chưa có voucher. Hãy kiểm tra khuyến mãi để nhận voucher.
        </div>
      )}

      {!loadingVouchers && dataVoucher.length > 0 && (
        <div className={styles.grid}>
          {dataVoucher.map((v) => {
            const expired = isExpired(v.created_at);
            const isUsed = v.IDClient === user.id;
            const cardClass = [
              styles.voucher,
              isUsed ? styles.used : "",
              expired ? styles.expired : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <article
                key={v.id}
                className={cardClass}
                aria-label={`Voucher ${v.name_voucher}`}
              >
                <div className={styles.voucherLeft}>
                  <div className={styles.discount}>
                    <QRCode value={String(v.code_voucher)} size={80} />
                  </div>
                  <div className={styles.codeBadge} title={`Mã: ${v.code_voucher}`}>
                    {v.code_voucher}
                  </div>
                </div>

                <div className={styles.voucherRight}>
                  <div className={styles.voucherTitle}>Giảm {v.name_voucher}</div>
                  <div className={styles.voucherMeta}>
                    Điểm: <strong>{v.point} điểm</strong>
                  </div>
                  <div className={styles.voucherMeta}>
                    Ngày tạo: <strong>{formatDate(v.created_at)}</strong>
                  </div>
                  <div className={styles.voucherSub}>
                    Trạng thái: {expired ? "Hết hạn" : isUsed ? "Đã sử dụng" : "Khả dụng"}
                  </div>
                </div>

                <div className={styles.actions}>
                  {!isUsed && !expired ? (
                    <button
                      onClick={() => handleUse(v.id)}
                      className={styles.btnPrimary}
                      aria-label={`Sử dụng voucher ${v.code_voucher}`}
                    >
                      Sử dụng
                    </button>
                  ) : (
                    <button
                      className={styles.btnDisabled}
                      disabled
                      aria-label={`Voucher ${v.code_voucher} không khả dụng`}
                    >
                      {expired ? "Hết hạn" : "Đã dùng"}
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {errorVouchers && <div className={styles.error}>{errorVouchers}</div>}
    </div>
  );
}