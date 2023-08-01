import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Product from "./pages/product/Product";
import Order from "./pages/order/Order";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import HomeLayout from "./layouts/HomeLayout";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="order" element={<Order />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
