import React, { useState } from "react";
import styleSignUp from "./signup.module.scss";

function SignUpForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    emails: "",
    password: "",
    password_same: "",
    date: "",
    gender: "",
    cid: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Layout title="signup">
      <div className={styleSignUp.view}>
        <div className={styleSignUp.content}>
          <form onSubmit={handleSubmit}>
            <div className={styleSignUp.title}>
              <h2>
                <b>Sign Up</b>
              </h2>
            </div>

            <div className={styleSignUp.formsignup}>
              <div className={styleSignUp.group_name}>
                <div className="form-floating">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    required
                    onChange={handleChange}
                    value={form.firstname}
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <label>First Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    required
                    onChange={handleChange}
                    value={form.lastname}
                    style={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  />
                  <label>Last Name</label>
                </div>
              </div>

              <div className="form-floating">
                <input
                  type="email"
                  name="emails"
                  className="form-control"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={form.emails}
                />
                <label>Email</label>
              </div>

              <div className={styleSignUp.group_password}>
                <div className="form-floating">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                    value={form.password}
                  />
                  <label>Password</label>
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    name="password_same"
                    className="form-control"
                    placeholder="Re-enter Password"
                    required
                    onChange={handleChange}
                    value={form.password_same}
                  />
                  <label>Re-enter Password</label>
                </div>
              </div>

              <div className={styleSignUp.dobGender}>
                <div className="form-floating">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    required
                    onChange={handleChange}
                    value={form.date}
                  />
                  <label>Date of Birth</label>
                </div>
                <div className={styleSignUp.group_gender}>
                  <h4>Gender</h4>
                  <div className={styleSignUp.gender}>
                    <div className={styleSignUp.male}>
                      <label>Male</label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        checked={form.gender === "male"}
                      />
                    </div>
                    <div className={styleSignUp.female}>
                      <label>Female</label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        checked={form.gender === "female"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-floating">
                <input
                  type="tel"
                  name="cid"
                  className="form-control"
                  placeholder="Citizen ID"
                  pattern="0[0-9]{11}"
                  required
                  onChange={handleChange}
                  value={form.cid}
                />
                <label>Citizen ID</label>
              </div>

              <div className="form-floating">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  pattern="0[0-9]{9}"
                  required
                  onChange={handleChange}
                  value={form.phone}
                />
                <label>Phone Number</label>
              </div>

              <div className="form-floating">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Address"
                  required
                  onChange={handleChange}
                  value={form.address}
                />
                <label>Address</label>
              </div>

              <div className={styleSignUp.submit}>
                <button type="submit">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUpForm;
