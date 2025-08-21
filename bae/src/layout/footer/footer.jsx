import React from "react";
import logo from "../../assets/image/Logo.png";
import stylesFooter from "./footer.module.scss"
function Footer() {
  return (
    <div id={stylesFooter.footer}>
      <div className={stylesFooter.footer_content}>
        <div className={stylesFooter.footer_content_flast}>
          <h2>Nhận thức đúng - Hành động đủ</h2>
          <div className={stylesFooter.footer_info}>
            <p>
              Trường Đại học Công nghệ Thông tin & Truyền Thông Việt - Hàn, Đại
              học Đà Nẵng
            </p>
            <p>
              Địa chỉ: 470 Đường Trần Đại Nghĩa, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng
            </p>
          </div>
          <img src={logo} alt="Logo" />
        </div>

        <div className={stylesFooter.footer_content_fbody}>
          <div className={stylesFooter.footer_content_col}>
            <h2><i className="fa-solid fa-feather"></i>Về BAE</h2>
            <div className={stylesFooter.footer_content_link}>
              <a href="#">Nghề nghiệp</a>
              <a href="#">Hoạt động</a>
              <a href="#">Nhiệm vụ</a>
              <a href="#">Nguồn lực</a>
            </div>
          </div>
          <div className={stylesFooter.footer_content_col}>
            <h2><i className="fa-solid fa-feather"></i>Mở rộng</h2>
            <div className={stylesFooter.footer_content_link}>
              <a href="#">Sáng tạo</a>
              <a href="#">Kiến trúc thông tin</a>
              <a href="#">Ủng hộ</a>
            </div>
          </div>
        </div>

        <div className={stylesFooter.footer_content_fhead}>
          <p>Liên hệ với chúng tôi</p>
          <p>Hãy để lại email nếu bạn muốn đồng hành cùng chúng tôi</p>
          <form className={stylesFooter.footer_content_connect}>
            <input type="email" required placeholder="Email của bạn" />
            <button type="submit">
              Gửi<i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
          <div className={stylesFooter.footer_content_icon}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>

      <div className={stylesFooter.footer_foot}>
        <div className={stylesFooter.footer_foot_license}>
          <p>
            <i className="fa-regular fa-copyright"></i>2023 BAE.
            Nền tảng website về môi trường
          </p>
        </div>
        <div className={stylesFooter.footer_foot_policy}>
          <a href="#">Chương trình</a>
          <a href="#">Chính sách</a>
          <a href="#">Chân thành</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
