import { LINK_API_PROJECT } from "../include/until.jsx";

const handleAddCart = async ({ user, cart, address, namefile }) => {

    // Tạo một token ngẫu nhiên dựa trên user.id
    const randomInt = Math.floor(Math.random() * 900000000) + 100000000;
    const token = `${randomInt}${user.id}`;
    

    const response = await fetch(
        LINK_API_PROJECT + "api/cartapi/confirm",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true",
            }
            ,
            body: JSON.stringify({
                "data": JSON.stringify(cart),
                "address": address,
                "user": JSON.stringify(user),
                "token": token,
                "namefile": namefile,
            })
        }
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()

    const responseConfirmEmail = await fetch(
        LINK_API_PROJECT + "api/cartapi/emailConfirm",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true",
            }
            ,
            body: JSON.stringify({
                "data": JSON.stringify(cart),
                "address": address,
                "user": JSON.stringify(user),
                "token": token,
            })
        }
    )

    const emailConfirm = await responseConfirmEmail.json();

    return {
        data,
        emailConfirm
    };
}

export default handleAddCart;