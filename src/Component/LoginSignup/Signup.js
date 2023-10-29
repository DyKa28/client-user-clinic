import React, { useState } from 'react'
import { Form } from 'react-hook-form';
import "./Signup.css";
import { Link } from 'react-router-dom';
const registerformValue = {
  name: "",
  phoneNumber: "",
  identification: "",
  SHI: "",
  passwords: "",
  repassword: "",
}
const inputs = [
  {
    id: 1,
  name : "name",
  type: "text",
  placeholder: "Nguyễn Văn A",
  label: "Họ và tên",
  },
  {
    id: 2,
  name : "phoneNumber",
  type: "text",
  placeholder: "0987654321",
  label: "Số điện thoại",
  },
  {
    id: 3,
  name : "password",
  type: "password",
  placeholder: "",
  label: "Mật khẩu",
  },
  {
    id: 4,
  name : "repassword",
  type: "password",
  showPassword: false,
  placeholder: "",
  label: "Nhập lại mật khẩu",
  },
]
function Signup() {
  const [values, setValues ] = useState(registerformValue);
  return (
    <div className="signup">
      <div className="signup_content">
        <form>
          <h1 className='title'>Đăng ký</h1>
          {inputs.map((input) => (
            <div key={input.id} className='form_input'>
              <label>{input.label}</label>
            <input key={input.id} {...input}></input>
            </div>
          ))}
          <div>
            <Link to="/">
          <button className='btn_signin'>Đăng ký</button>

            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup