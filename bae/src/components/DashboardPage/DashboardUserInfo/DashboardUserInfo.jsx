import React, { useContext } from "react";
import styles from "./DashboardUserInfo.module.scss";
import { UserContext } from "../../../context/UserContext";
import { LINK_API_PROJECT } from "../../../include/until";

function DashboardUserInfo() {
  const { user } = useContext(UserContext);

  // Dữ liệu mẫu nếu chưa có user
  const demoUser = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    point: 1200,
    joinDate: "01/01/2024",
    avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  };

  const info = user || demoUser;
  console.log(user);
  

  return (
    <div className={styles.userinfo_container}>
      <div className={styles.avatar_box}>
        <img
          src={`${LINK_API_PROJECT}storage/upload/${info.cccd}/upload_image_avata.jpg`}
          alt="avatar"
        />
      </div>
      <div className={styles.info_box}>
        <h2>{info.name}</h2>
        <p>Email: <b>{info.email}</b></p>
        <p>Điểm tích lũy: <span className={styles.point}>{info.point}</span></p>
        <p>Ngày tham gia: {info.joinDate}</p>
      </div>
    </div>
  );
}

export default DashboardUserInfo;
