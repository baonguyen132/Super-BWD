import React, { useState } from "react";
import { Link } from "react-router-dom";
import styleLogin from "./login.module.scss";

import logo from "../../assets/image/login.png";
import Layout from "../layout";
function LoginPage() {
  const [form, setForm] = useState({ gmail: "", passwords: "" });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Layout title="Login">
      <div className={styleLogin.view}>
        <div className={styleLogin.content}>
          <form>
            <div className={styleLogin.avata}>
              <img className="avata" src={logo} alt="login" />
            </div>

            <div className={styleLogin.title}>
              <h2>
                <b>Welcome</b>
              </h2>
            </div>

            <div className={styleLogin.username}>
              <div class="input-group input-group-lg ">
                <span class="input-group-text">
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
              <div class="input-group input-group-lg ">
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
              <button type="submit" name="submitLoginAdmin">
                Sign in
              </button>
            </div>

            <div className={styleLogin.ForgotPass_SignUp}>
              <div className= {styleLogin.forgotpass}>
                <a href="#">Forgot Password?</a>
              </div>
              <div className={styleLogin.signup}>
                <Link to="/signup">Sign up</Link>
              </div>
            </div>

            <div className={styleLogin.loginSoical}>
              <a href="/auth/google">
                <img
                  src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
                  alt="Google Login"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
