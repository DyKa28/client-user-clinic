import React, { useState } from "react";
import "../Booking/Booking.css";
import { Button, DatePicker, Form, Input, Select, Space, Table } from "antd";

const { Option } = Select;

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingData, setBookingData] = useState([]);
  const [form] = Form.useForm();

  const disabledDate = (current) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()); //
    const maxDate = new Date(tomorrow.getTime() + 14 * 24 * 60 * 60 * 1000); // Ngày hôm sau + 14 ngày
    return current < tomorrow || current > maxDate;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (values) => {
    const newBookingData = {
      name: values.name,
      time: values.time,
      date: selectedDate.format("DD-MM-YYYY"),
      medicalDepartment: values.medicalDepartment,
    };

    setBookingData([...bookingData, newBookingData]);

    form.resetFields();
  };

  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Thời gian khám",
      dataIndex: "time",
      key: "time",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngày khám",
      dataIndex: "date",
      key: "date",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Khoa khám bệnh",
      dataIndex: "medicalDepartment",
      key: "medicalDepartment",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Yêu cầu",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Sửa đổi</a>
          <a style={{color: "red"}}>Hủy</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="booking">
      <div className="form_booking">
        <h2 style={{color: "rgb(46, 199, 87)", paddingLeft: "10%"}}>Thông tin đăng ký khám bệnh</h2>
        <Form
          style={{ width: "500px" }}
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout="horizontal"
          onFinish={handleSubmit}
          form={form}
        >
          <Form.Item label="Họ và tên:" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Thời gian khám:" name="time" rules={[{ required: true }]}>
            <Select >
            <Option value="8-9">8-&gt;9h</Option>
              <Option value="9-10">9h-&gt;10h</Option>
              <Option value="10-11">10h-&gt;11h</Option>
              <Option value="13-14">13h-&gt;14h</Option>
              <Option value="14-15">14h-&gt;15h</Option>
              <Option value="15-16">15h-&gt;16h</Option>
              <Option value="16-17">16h-&gt;17h</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Ngày khám:" name="date" rules={[{ required: true }]}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              disabledDate={disabledDate}
            />
          </Form.Item>
          <Form.Item label="Khoa khám bệnh" name="medicalDepartment" rules={[{ required: true }]}>
            <Select>
              <Option value="Khám tổng quan">Khám tổng quan</Option>
              <Option value="Khám chuyên khoa">Khám chuyên khoa</Option>
              <Option value="Xét nghiệm và chẩn đoán hình ảnh">Xét nghiệm và chẩn đoán hình ảnh</Option>
              <Option value="Chăm sóc tiền sản khoa">Chăm sóc tiền sản khoa</Option>
              <Option value="Chăm sóc tâm lý">Chăm sóc tâm lý</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
            <Button type="primary" htmlType="submit">Đăng ký</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="info_booking">
        <Table
          className="custom_table"
          size="small"
          scroll={{
            x: 500,
            y: 300,
          }}
          columns={columns}
          dataSource={bookingData}
        />
      </div>
    </div>
  );
};

export default Booking;
