import { useEffect, useState } from "react"
import { LINK_API_PROJECT } from "../include/until"

function useFetchBranchs({dependencies = [] }) {
    const [branchs, setBranchs] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isCancelled = false

        const fetchBranch = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(`${LINK_API_PROJECT}api/branchapi`, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                })
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                if (!isCancelled) {
                    const data = await response.json()
                    setBranchs(data)
                }
            } catch (error) {
                if (!isCancelled) setError(error.message);
            }
            finally {
                if (!isCancelled) setLoading(false);
            }
        }
        
        fetchBranch();
        return () => {
            isCancelled = true;
        };
    }, dependencies)

    return { branchs, loading, error };

}

export default useFetchBranchs