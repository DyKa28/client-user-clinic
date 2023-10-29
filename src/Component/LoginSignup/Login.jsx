import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import logo1 from '../../assets/Logo.png';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="main">
        <div className="left_login">
          <div className="left_content">
            <img src={logo1} alt="logo" />
            <h1>Phòng khám đa khoa DK</h1>
          </div>
        </div>
        <div className="right_login">
          <div className="container">
            <div className="container_header">
              <h2>Đăng nhập</h2>
            </div>
            <div className="container_center">
              <div className="form_logins">
                <div className="form_login">
                  <FontAwesomeIcon className="icon" icon={faPhone} />
                  <input placeholder="Email/Số điện thoại/CCCD" type="text" />
                </div>
                <div className="form_login">
                  <FontAwesomeIcon className="icon" icon={faLock} />
                  <input placeholder="Mật khẩu" type="password" />
                </div>
              </div>
              <div className="btn_login">
                <button>Đăng nhập</button>
              </div>
            </div>
            <div className="container_bottom">
                <Link style={{color: 'blue'}} href="">Quên mật khẩu?</Link> <Link to="/signup" style={{color: "blue", textDecoration: 'none'}}>Đăng ký</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
