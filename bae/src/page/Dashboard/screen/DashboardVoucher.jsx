import { useContext, useEffect, useState } from "react";
import ListBranch from "../../../components/Voucher/ListBranch/ListBranch";
import ListVoucher from "../../../components/Voucher/ListVoucher/ListVoucher";
import useFetchBranchs from "../../../hooks/useBranchVoucher";
import useFetchVouchers from "../../../hooks/useVoucher";
import { UserContext } from "../../../context/UserContext";
import handleChangeVoucher from "../../../services/voucherServices";

function DashboardVoucher() {
  const { user } = useContext(UserContext);

  const [choose, setChoose] = useState(0);

  const [data, setData] = useState([]);
  const [dataVoucher, setDataVoucher] = useState([]);

  const { branchs, loading, error } = useFetchBranchs({
    dependencies: [],
  });
  const {vouchers, loading: loadingVouchers, error: errorVouchers} = useFetchVouchers({
    id_branch: choose, 
    dependencies: [choose],
  });

  useEffect(() => {
    if (branchs?.data) {setData(branchs.data);}
  }, [branchs]);

  useEffect(() => {
    if (vouchers?.data) {setDataVoucher(vouchers.data);}
  }, [vouchers]);

  // Toast / notification state
  const [toast, setToast] = useState({ visible: false, message: "", type: "info" });
  const showToast = (message, type = "info", duration = 4000) => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast((t) => (t.visible ? { ...t, visible: false } : t));
    }, duration);
  };
  const dismissToast = () => setToast((t) => ({ ...t, visible: false }));

  const handleClickVoucher = async (idVoucher) => {
    const data = await handleChangeVoucher({ idUser: user.id, idVoucher })

    if (data.data.status == "success") {
      // thay alert bằng toast
      showToast("Đổi voucher thành công. Kiểm tra trong mục Voucher của tôi.", "success");
      const updatedVouchers = dataVoucher.map((voucher) =>
        voucher.id === idVoucher ? { ...voucher, IDClient: user.id } : voucher
      );
      setDataVoucher(updatedVouchers);
    }
    else {
      showToast(data.data.message || "Đổi voucher thất bại, vui lòng thử lại sau.", "error");
    }
  }

  // small inline styles for toast
  const toastStyles = {
    container: {
      position: "fixed",
      right: 18,
      bottom: 18,
      zIndex: 9999,
      minWidth: 280,
      maxWidth: "calc(100% - 36px)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
      borderRadius: 8,
      overflow: "hidden",
      fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
    },
    box: (type) => ({
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 14px",
      background:
        type === "success"
          ? "linear-gradient(90deg, rgba(46,204,113,0.10), rgba(88,214,141,0.06))"
          : type === "error"
          ? "linear-gradient(90deg, rgba(231,76,60,0.06), rgba(231,76,60,0.03))"
          : "linear-gradient(90deg, rgba(32,41,54,0.04), rgba(32,41,54,0.02))",
      color: type === "error" ? "var(--color-error)" : "var(--color-dark)",
    }),
    icon: {
      width: 36,
      height: 36,
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 16,
    },
    content: { flex: 1, fontSize: 14 },
    close: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "rgba(0,0,0,0.45)",
      fontSize: 14,
      padding: "6px 8px",
    },
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>Không có dữ liệu</div>;


  return (
    <>
        <ListBranch
            branches={data}
            onClickBranch={(id) => setChoose(id)}
            style={{
                marginBottom: "24px",
            }}
        />
        <ListVoucher
            listvoucher={dataVoucher}
            onHandle={handleClickVoucher}
        />

        {/* Toast notification */}
        {toast.visible && (
          <div style={toastStyles.container} role="status" aria-live="polite">
            <div style={toastStyles.box(toast.type)}>
              <div style={toastStyles.icon}>
                {toast.type === "success" ? "✓" : toast.type === "error" ? "!" : "i"}
              </div>
              <div style={toastStyles.content}>{toast.message}</div>
              <button aria-label="Đóng thông báo" onClick={dismissToast} style={toastStyles.close}>
                ×
              </button>
            </div>
          </div>
        )}
    </>
  );
}

export default DashboardVoucher;
