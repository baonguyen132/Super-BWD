import React, { useContext, useEffect, useState } from "react";
import styles from "./HistoryList.module.scss";
import HistoryCard from "../../../../components/HistoryPage/HistoryCard";
import { UserContext } from "../../../../context/UserContext";
import useFetchHistorys from "../../../../hooks/useHistory";
import QRCode from "react-qr-code";
import QRCodeModal from "../../../../components/HistoryPage/QRCodeModal";

function HistoryList() {
  const { user } = useContext(UserContext);
  const [historyData, setData] = useState([]);
  const [token , setToken] = useState(null);

  const { historys, loading, error } = useFetchHistorys({
    idUser: user.id,
    dependencies: [],
  });

  useEffect(() => {
    if (historys?.data) {
      setData(historys.data);
    }
  }, [historys]);
  const [filter, setFilter] = useState("Tất cả");
  const filtered =
    filter === "Tất cả"
      ? historyData
      : historyData.filter((item) =>
          filter === "Đã thu gom"
            ? item.token === "NULL"
            : item.token !== "NULL"
        );

  const [openDetailIdx, setOpenDetailIdx] = useState(null);

  // lock body scroll while modal open
  useEffect(() => {
    if (token) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [token]);

  return (
    <div className={styles.history_list_container}>
      <div className={styles.filter_header}>
        <h2 className={styles.title}>Lịch sử đăng ký thu gom pin</h2>
        <div className={styles.filter_row}>
          <select
            name="status"
            onChange={(e) => setFilter(e.target.value)}
            className={styles.filter_btn}
            value={filter}
          >
            <option value="Tất cả">Tất cả</option>
            <option value="Đã thu gom">Đã thu gom</option>
            <option value="Chưa thu gom">Chưa thu gom</option>
          </select>
        </div>
      </div>
      <div className={styles.list}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : !filtered || filtered.length === 0 ? (
          <div className={styles.no_data}>Không có dữ liệu</div>
        ) : (
          filtered.map((item, idx) => (
            <HistoryCard
              key={idx}
              item={item}
              isOpen={openDetailIdx === idx}
              onToggle={() =>
                setOpenDetailIdx(openDetailIdx === idx ? null : idx)
              }
              openQR={(t) => {
                if (t && t !== "NULL") {
                  setToken(t);
                }
              }}
            />
          ))
        )}
      </div>

      {/* modal overlay for QR */}
      {token && (<QRCodeModal token={token} setTokenHandle={() => setToken(null)}/>)}
    </div>
  );
}

export default HistoryList;
