import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//third party styles
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import Booking from "./pages/Booking";
import QrCode from "./components/QrCode";
import Admin from "./pages/Admin";

//components

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
