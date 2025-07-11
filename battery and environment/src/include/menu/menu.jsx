import React from "react";
import { Link } from "react-router-dom";
import logoBAE from "../../asset/image/logoBAE.png"; // Cập nhật đường dẫn theo dự án của bạn
import "./menu.scss"
function Menu({ user }) {
  const handleToggleNavbar = () => {
    // Logic tương tự opennavbar() bên ngoài nếu cần
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  };

  return (
    <div id="header">
      {/* Header logo */}
      <div id="header__logo">
        <Link to="/" className="header__logo-item">
          <img src={logoBAE} alt="BAE Logo" />
          <span>BAE</span>
        </Link>
      </div>

      <ul id="nav" className="">
        <li className="nav-li"><Link to="/">Trang chủ</Link></li>

        {user && (
          <li className="nav-li">
            <Link to="/cart">Giỏ hàng</Link>
          </li>
        )}

        <li className="nav-li"><Link to="/blog">Thảo luận</Link></li>

        <li className="nav-li" id="signupnav">
          <p>
            {user ? (
              <Link to="/information">{user.name}</Link>
            ) : (
              <Link to="/login">
                Đăng nhập <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
              </Link>
            )}
          </p>
        </li>
      </ul>

      <div className="nav__package">
        <div id="header__nav">
          {/* Responsive Menu */}
          <input
            type="checkbox"
            className="menu-btn"
            id="menu-btn"
            onClick={handleToggleNavbar}
          />
          <label htmlFor="menu-btn" className="menu-icon">
            <span className="nav__menu-icon"></span>
          </label>
        </div>

        {/* Header gift */}
        <div id="btn-active">
          <div className="InOut">
            {user ? (
              <p id="nameclientx" style={{ marginBottom: 0 }}>
                <Link to="/information">{user.name}</Link>
              </p>
            ) : (
              <Link to="/login">
                Đăng nhập <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;