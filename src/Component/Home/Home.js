import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Logo from "../../assets/Logo.png";
import "./Home.css";
import Booking from "../Booking/Booking";
import { Link, Route, Routes } from "react-router-dom";
import Sidebar_left from "../Layout/Sidebar_left";
const Home = () => {
  // const [selectedDate, setSelectedDate] = useState(null);

  // const minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // Ngày hôm sau
  // const maxDate = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000); // Ngày hiện tại + 14 ngày

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  return (
    <div className="home">
        <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar_left />
        <div>

          <Routes>
            <Route path="/book-appointment" element={<Booking />}> </Route>
          </Routes>
        </div>
        <div className="booking-container">
        </div>
      </div>
      
    </div>
    /* <div className="my-datepicker">
      <div className="my-datepicker-content">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    </div> */
  );
};

export default Home;
