import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./identify.module.css";

const identify = () => {
  return (
    <>
      <div>
        <div className={styles.Nav}>
          <div className={styles.Logo}>
            <img
              class={styles.fb_logo}
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt="Facebook"
            />
          </div>
          <div className={styles.Form_login}>
            <input
              type="text"
              name="text"
              placeholder="Email hoặc số điện thoại"
            />
            <input type="password" name="password" placeholder="Mật khẩu" />
            <button className={styles.btn_Login}>Đăng nhập</button>
          </div>
        </div>
        <div className={styles.Form}>
          <div className={styles.Form_identify}>
            <p>Tìm tài khoản của bạn</p>
            <hr></hr>
            <p className={styles.Form_text}>
              Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản của bạn.
            </p>
            <div className={styles.Form_input}>
              <input placeholder="Email hoặc số điện thoại" />
            </div>
            <hr></hr>
            <div className={styles.Form_button}>
              <button className={styles.Form_Cancel}>Hủy</button>
              <button className={styles.Form_Search}>Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default identify;
