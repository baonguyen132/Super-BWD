import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styleLogin from "./login.module.scss";

import logo from "../../assets/image/login.png";
import Layout from "../../components/common/layout";
import { LINK_API_PROJECT } from "../../include/until";

import Cookies from "js-cookie";

function LoginPage() {
  if (Cookies.get("API_USER")) {
    location.href = "/";
  }

  const [form, setForm] = useState({ gmail: "", passwords: "" });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginHandle = async (e) => {
    try {
      const login = await fetch(`${LINK_API_PROJECT}api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await login.json();
      if (data.result) {
        setResult("Login successful!");
        console.log(data.user);
        const expires = new Date();
        expires.setMonth(expires.getMonth() + 1);

        Cookies.set("API_USER", JSON.stringify(data.user), {
          expires: expires,
          path: "/",
        });

        window.location.href = "/";
      } else {
        setResult("Login failed: " + data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("Network error or server unavailable");
    }
  };
  return (
    <Layout title="Login">
      <div className={styleLogin.view}>
        <div className={styleLogin.content}>
          <div className={styleLogin.form}>
            <div className={styleLogin.avata}>
              <img className="avata" src={logo} alt="login" />
            </div>

            <div className={styleLogin.title}>
              <h2>
                <b>Welcome</b>
              </h2>
            </div>

            <div className={styleLogin.username}>
              <div className="input-group input-group-lg ">
                <span className="input-group-text">
                  <i className="material-icons">person</i>
                </span>
                <input
                  type="email"
                  name="gmail"
                  required
                  placeholder="Gmail"
                  className="form-control"
                  autoComplete="off"
                  value={form.gmail}
                  onChange={handleChange}
                />
              </div>

              {errors.gmail && <p>{errors.gmail}</p>}
            </div>

            <div className={styleLogin.password}>
              <div className="input-group input-group-lg ">
                <span className="input-group-text">
                  <i className="material-icons">vpn_key</i>
                </span>
                <input
                  type="password"
                  name="passwords"
                  required
                  placeholder="Password"
                  className="form-control"
                  autoComplete="off"
                  value={form.passwords}
                  onChange={handleChange}
                />
              </div>

              {errors.passwords && <p>{errors.passwords}</p>}
            </div>

            {result && (
              <div className={styleLogin.result}>
                <p>{result}</p>
              </div>
            )}

            <div className={styleLogin.submit}>
              <button
                type="submit"
                name="submitLoginAdmin"
                onClick={loginHandle}
              >
                Sign in
              </button>
            </div>

            <div className={styleLogin.ForgotPass_SignUp}>
              <div className={styleLogin.forgotpass}>
                <a href="#">Forgot Password?</a>
              </div>
              <div className={styleLogin.signup}>
                <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
