import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();

  const click_Register = () =>{
    navigate('/register')
  }
  // const click_Register = () =>{
  //   navigate('/register')
  // }
  return (
    <div className={styles.Login}>
      <div className={styles.Logo}>
        <img
          class={styles.fb_logo}
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt="Facebook"
        />
      </div>
      <div className={styles.Form_login}>
        <input type="text" name="text" placeholder="Email hoặc số điện thoại" />
        <input type="password" name="password" placeholder="Mật khẩu" />
        <button className={styles.btn_Login}>Đăng nhập</button>
        <div className={styles.Identify}>
          <a href="http://localhost:3000/identify">Quên mật khẩu ?</a>
        </div>
        <hr></hr>
        <div className={styles.btn_Register}>
          <button onClick={click_Register}>Tạo tài khoản mới</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
