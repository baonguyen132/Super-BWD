import React, { useContext, useEffect, useState } from "react";
import styles from "./DashboardCart.module.scss";
import { LINK_API_PROJECT } from "../../../../include/until";
import handleAddCart from "../../../../services/cartServices";
import { UserContext } from "../../../../context/UserContext";
import { useNavigate } from "react-router-dom";


// Example cart data structure: [{ battery: {...}, count: 2 }, ...]
function DashboardCart() {
  const { user } = useContext(UserContext);

  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");
  // normalize value -> number
  const handleQuantityChange = (index, rawValue) => {
    const value = Number(rawValue) || 0;
    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (value <= 0) {
        newCart.splice(index, 1);
      } else {
        newCart[index] = {
          ...newCart[index],
          count: Math.max(0, value),
        };
      }
      return newCart;
    });
  };

  const increment = (index) =>
    handleQuantityChange(index, (cart[index]?.count || 0) + 1);
  const decrement = (index) =>
    handleQuantityChange(index, (cart[index]?.count || 0) - 1);
  const handleRemove = (index) =>
    setCart((prev) => {
      const n = [...prev];
      n.splice(index, 1);
      return n;
    });
  const handleAddressChange = (e) => setAddress(e.target.value);

  function handleSubmit() {
    if (cart.length === 0) {
      alert("Giỏ hàng đang trống.");
      return;
    }

    handleAddCart({user,cart,address,namefile: localStorage.getItem("nameCart"),});
    setCart([]); // Clear cart after submission
    localStorage.removeItem("cart"); // Clear local storage cart
    localStorage.removeItem("nameCart"); // Clear nameCart
    alert("Đơn hàng đã được xác nhận. Vui lòng kiểm tra email để biết thêm chi tiết.");
    navigate("/dashboard/history"); // Redirect to history page after submission
    // Note: navigate should be imported from react-router-dom or similar library
    // Note: handleAddCart should handle the API call and return a promise
    // that resolves when the order is successfully placed.

  }

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    // expect stored as array; fallback to []
    const initialCart = storedCart ? JSON.parse(storedCart) : [];
    setCart(Array.isArray(initialCart) ? initialCart : []);
  }, [navigate]);

  const totalCount = cart.reduce((s, it) => s + (it.count || 0), 0);
  const totalPrice = cart.reduce(
    (s, it) => s + (it.count || 0) * (Number(it.battery.price) || 0),
    0
  );
  const fmt = (n) =>
    typeof Intl !== "undefined" ? new Intl.NumberFormat().format(n) : String(n);

  

  return (
    <div className={styles.cart_container}>
      <div className={styles.filter_header}>
        <h2 className={styles.title}>Giỏ hàng pin đã đăng ký</h2>
      </div>
      <div className={styles.cart_layout}>
        <div className={styles.cart_left}>
          <div className={styles.cart_list}>
            {cart.length === 0 && (
              <div className={styles.empty_cart}>Giỏ hàng trống.</div>
            )}

            {cart.map((item, index) => (
              <div className={styles.cart_item} key={item.battery.id || index}>
                <img
                  src={
                    LINK_API_PROJECT +
                    `storage/image/Battery/${item.battery.image}.jpg`
                  }
                  alt={item.battery.name_battery}
                  className={styles.battery_img}
                />
                <div className={styles.battery_info}>
                  <div className={styles.item_name}>
                    {item.battery.name_battery}
                  </div>
                  <div className={styles.item_detail}>
                    Kích thước: {item.battery.size}
                  </div>
                  <div className={styles.item_detail}>
                    Hình dạng: {item.battery.shape}
                  </div>
                  {item.battery.price != null && (
                    <div className={styles.item_detail}>
                      Giá: {fmt(item.battery.price)} đ
                    </div>
                  )}
                </div>

                <div className={styles.buttonslist}>
                  <div className={styles.qty_control}>
                    <button
                      type="button"
                      className={styles.qty_btn}
                      onClick={() => decrement(index)}
                      aria-label="Giảm số lượng"
                    >
                      −
                    </button>

                    {/* replaced editable input with a styled div display */}
                    <div
                      className={styles.qty_display}
                      role="status"
                      aria-live="polite"
                      aria-label={`Số lượng ${item.count}`}
                    >
                      {item.count}
                    </div>

                    <button
                      type="button"
                      className={styles.qty_btn}
                      onClick={() => increment(index)}
                      aria-label="Tăng số lượng"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className={styles.remove_btn}
                    onClick={() => handleRemove(index)}
                    aria-label="Xóa item"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cart_right}>
          <div className={styles.summary_box}>
            <div className={styles.summary_row}>
              <span>Số mục</span>
              <strong>{cart.length}</strong>
            </div>
            <div className={styles.summary_row}>
              <span>Tổng số lượng</span>
              <strong>{fmt(totalCount)}</strong>
            </div>
            <div className={styles.summary_row}>
              <span>Tổng tiền</span>
              <strong>{fmt(totalPrice)} đ</strong>
            </div>
          </div>

          <div className={styles.address_form}>
            <label htmlFor="address" className={styles.address_label}>
              Địa chỉ nhận hàng:
            </label>
            <input
              id="address"
              type="text"
              className={styles.address_input}
              value={address}
              onChange={handleAddressChange}
              required
            />
            <button
              className={styles.submit_btn}
              onClick={() => handleSubmit()}
            >
              Xác nhận đơn hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCart;
