import { LINK_API_PROJECT } from "../include/until.jsx";

const handleChangeVoucher= async ({ idUser, idVoucher }) => {

    const response = await fetch(
        LINK_API_PROJECT + "api/voucherapi/changeVoucher",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true",
            }
            ,
            body: JSON.stringify({
                "idClient": idUser,
                "idVoucher": idVoucher,
            })
        }
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()

    return  {data} ;
}

export default handleChangeVoucher;