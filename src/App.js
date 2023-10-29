import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/LoginSignup/Login';
import Signup from './Component/LoginSignup/Signup';
import Home from './Component/Home/Home';
import Booking from "./Component/Booking/Booking";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/book-appointment" element={<Booking/>} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
