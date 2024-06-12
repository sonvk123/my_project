import React, { useState, useEffect } from "react";


const Register = () => {
  function populateDays() {
    const daySelect = document.getElementById("day");
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement("option");
      option.text = i;
      option.value = i;
      daySelect.add(option);
    }
  }

  // Hàm để tạo danh sách tháng từ 1 đến 12
  function populateMonths() {
    const monthSelect = document.getElementById("month");
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement("option");
      option.text = "Tháng " + i;
      option.value = i;
      monthSelect.add(option);
    }
  }

  // Hàm để tạo danh sách năm từ năm hiện tại trở về 100 năm trước
  function populateYears() {
    const yearSelect = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
      const option = document.createElement("option");
      option.text = i;
      option.value = i;
      yearSelect.add(option);
    }
  }

  useEffect(() => {
    populateDays();
    populateMonths();
    populateYears();
  }, []);

  return (
    <form>
      <div>
        <div>
          <h1>Đăng ký</h1>
          <p>Nhanh chóng và dễ dàng.</p>
        </div>
        <div>
          <button>X</button>
        </div>
      </div>
      <div>
        <div>
          <input type="text" placeholder="Họ" />
          <input type="text" placeholder="Tên" />
        </div>
        <div>
          <input type="text" placeholder="Email hoặc số điện thoại" />
          <input type="password" placeholder="Mật khẩu mới" />
        </div>
        <div>
          <label>Ngày sinh</label>
          <select name="day" id="day"></select>

          <select name="month" id="month"></select>

          <select name="year" id="year"></select>
        </div>
      </div>
      <div>
        <label for="gender">Giới tính:</label>
        <input type="radio" name="gender" id="male" value="male" />
        <label for="male">Nam</label>

        <input type="radio" name="gender" id="female" value="female" />
        <label for="female">Nữ</label>

        <input type="radio" name="gender" id="other" value="other" />
        <label for="other">Khác</label>
      </div>
      <div>
        <button>Đăng ký</button>
      </div>
    </form>
  );
};

export default Register;
