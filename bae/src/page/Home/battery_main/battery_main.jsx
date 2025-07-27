import { useEffect, useState } from "react";
import styles from "./battery_main.module.scss";
import CardBattery from "./card_battery";
import { LINK_API_PROJECT, LINK_API_AI } from "../../../include/until";

function BatteryMain() {
  const [listNumberBattery, setListNumberBattery] = useState({});
  const [batteryList, setBatteryList] = useState([]);

  const uploadImage = async () => {
    const input = document.getElementById("imageInput");
    const file = input.files[0];

    if (!file) {
      alert("Vui lòng chọn một ảnh!");
      return;
    }

    const newFileName = "processed_" + Date.now();
    const newFile = new File([file], newFileName + ".jpg", { type: file.type });

    const formData = new FormData();
    formData.append("image", newFile);

    try {
      const response = await fetch(LINK_API_AI + "upload_image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Lỗi từ server: ${errorData.message}`);
        return;
      }

      const responseData = await response.json();
      const data = JSON.parse(responseData.message);

      localStorage.setItem("namefile", newFileName);
      setListNumberBattery(data);
    } catch (error) {
      alert("Đã xảy ra lỗi khi gửi ảnh: " + error.message);
    }
  };

  const handleSendImage = (e) => {
    e.target.blur(); // 👉 Bỏ focus khỏi nút
  
    uploadImage();    // 👉 Gửi ảnh
    const modalEl = document.getElementById("open_mode_load_image");
    const modal = bootstrap.Modal.getInstance(modalEl); // hoặc new Modal nếu chưa được khởi tạo
    modal?.hide();    // 👉 Đóng modal đúng cách
  };

  function addCart() {
    const inputs = document.querySelectorAll('input[id^="count_"]');

    inputs.forEach((input) => {
      const count = Number(input.value);
      const id = input.name.split("_")[1];

      if (count !== 0) {
        const url = LINK_API_PROJECT+`api/cart/add/${id}-${count}`;

        fetch(url)
          .then((res) => res.text())
          .then((data) => {
            if (data === "fail") {
              alert("Cần đăng nhập");
            } else {
              // Có thể show toast hoặc thông báo khác
              console.log("Đã thêm vào giỏ hàng:", id, count);
            }
          })
          .catch((err) => {
            console.error("Lỗi khi thêm vào giỏ hàng:", err);
          });

        input.value = "0";
      }
    });
  }
  useEffect(() => {
    const fetchBatteryList = async () => {
      try {
        const response = await fetch(
          LINK_API_PROJECT + "api/battery",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "ngrok-skip-browser-warning": "true"
            }
          }
        );
        const data = await response.json();
        setBatteryList(data.records || []);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu pin:", error);
      }
    };

    fetchBatteryList();
  }, [listNumberBattery]);

  return (
    <>
      <div id={styles.main_battery}>
        <div className={styles.batterys}>
          <h2 className={styles.slogan_battery}>
            <span>
              Phân loại pin cũ - <strong>Tích điểm</strong> đổi quà
            </span>
          </h2>

          <div className={styles.center_page} id="okkk">
            <div className={`row ${styles.parent_battery}`}>
              {batteryList.map((element) => {
                const key = element.name_battery?.split(" ")[1];
                const value = listNumberBattery?.[key] || 0;
                return (
                  <CardBattery
                    element={element}
                    value={value}
                    key={element.id}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.center_battery}>
            <button
              className={styles.open_mode_load_image}
              data-bs-toggle="modal"
              data-bs-target="#open_mode_load_image"
            >
              Tải ảnh lên
            </button>
            <button className={styles.add_battery} onClick={addCart}>
              Addcart
            </button>
          </div>
        </div>

        {/* Modal tải ảnh */}
        <div className="modal fade" id="open_mode_load_image" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Tải ảnh lên</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className={styles.form_upload_image}>
                  <div className={`mb-3 ${styles.forminput}`}>
                    <input
                      type="file"
                      id="imageInput"
                      className="form-control"
                    />
                  </div>
                  <button
                    onClick={handleSendImage}
                    data-bs-dismiss="modal"
                    className={`btn ${styles.send_image}`}
                  >
                    Gửi ảnh
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BatteryMain;
