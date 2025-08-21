import { useEffect, useState } from "react"
import { LINK_API_PROJECT } from "../include/until"

function useFetchVouchers({ id_branch , dependencies = [] }) {

    var url = "" 
    if (id_branch == 0) {
        url = `${LINK_API_PROJECT}api/voucherapi`
    }
    else {
        url= `${LINK_API_PROJECT}api/voucherapi/branch=${id_branch}/client=0`
    }


    const [vouchers, setVoucher] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isCancelled = false

        const fetchVouchers = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                })
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                if (!isCancelled) {
                    const data = await response.json()
                    setVoucher(data)
                }
            } catch (error) {
                if (!isCancelled) setError(error.message);
            }
            finally {
                if (!isCancelled) setLoading(false);
            }
        }
        
        fetchVouchers();
        return () => {
            isCancelled = true;
        };
    }, dependencies)

    return { vouchers, loading, error };

}

export default useFetchVouchers