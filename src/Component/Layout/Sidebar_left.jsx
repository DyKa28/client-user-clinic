import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  FormOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Booking from "../Booking/Booking";
import { Content } from "antd/es/layout/layout";

function getItem(label, key, icon, path) {
  return {
    key,
    icon,
    label,
  };
}


const Sidebar_left = () => {
  // const location = useLocation();
  // const [selectedKeys, setSelectedKeys] = useState("/");

  // useEffect(() => {
  //   const pathName = location.pathname;
  //   setSelectedKeys(pathName);
  // }, [location.pathname]);
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className="sidebar-left"
      style={{
        height: "100vh",
        border: "solid 1px",
        background:
          "radial-gradient(circle farthest-corner at 10% 20%, rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6%)",
      }}
    >
      <Button
        type="white"
        onClick={toggleCollapsed}
        style={{
          margin: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
      onClick={(item) => {
        //item.key
        navigate(item.key);
      }}
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        mode="vertical"
        theme=""
        inlineCollapsed={collapsed}
        items={[
          {
            label: "Đặt lịch khám bệnh",
            icon: <FormOutlined />,
            key: "/book-appointment"
          },
          {
            label: "Thông tin lịch khám",
            icon: <DesktopOutlined />,
            key: "/appointment-info"
          },
          {
            label: "Thông tin cá nhân",
            icon:  <ContainerOutlined />,
            key: "/personal-info"
          },
        ]}
      >
      </Menu>
      <Content/>
      {/* <Routes>
            <Route path="/book-appointment" element={<Booking />}> </Route>
          </Routes> */}
      {/* <Outlet /> */}
    </div>
  );
};

export default Sidebar_left;
