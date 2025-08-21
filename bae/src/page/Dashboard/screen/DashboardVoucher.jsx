import { useEffect, useState } from "react";
import ListBranch from "../../../components/Voucher/ListBranch/ListBranch";
import ListVoucher from "../../../components/Voucher/ListVoucher/ListVoucher";
import useFetchBranchs from "../../../hooks/useBranchVoucher";
import useFetchVouchers from "../../../hooks/useVoucher";

function DashboardVoucher() {
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
            
        />
    </>
);
}

export default DashboardVoucher;
