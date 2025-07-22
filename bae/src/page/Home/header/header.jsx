import React, { useEffect } from 'react';
import Menu from '../../../include/menu/menu';
import styles from "./header.module.scss"
import videoSrc from "../../../assets/video/cay-44749.mp4"
const Header = () => {
//   useEffect(() => {
//     ScrollReveal({
//       distance: "60%",
//       duration: 2500,
//       delay: 400,
//     });

//     ScrollReveal().reveal(".slider__info", {
//       delay: 300,
//       origin: "bottom",
//     });
//   }, []);

  return (
    <div className={styles.main}>
      <Menu />
      {/* Slider */}
      <div className={styles.slider}>
      <video autoPlay muted loop className={styles.video}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.content}>
        <div className={styles.sliderInfo}>
          <p className={styles.sliderPhara}>Thu hồi pin cũ</p>
          <p className={styles.sliderPhara}>Bảo vệ Trái Đất xanh</p>
          <span className={styles.sliderMessage}>
            - Hãy cùng chúng tôi làm những điều này nhé! -
          </span>
          <a href="#protect" className={styles.sliderBtn}>
            BẮT ĐẦU <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;

