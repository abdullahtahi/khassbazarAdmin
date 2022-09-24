import React from "react";
import Navbar from "./pages/Component/NavBar/Navbar";
import SideBar from "./pages/Component/sideBar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewProduct from "./pages/NewProduct/NewProduct";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product/Product";
import Order from "./pages/Order/Order";
import Customer from "./pages/Customer/Customer";
import Admin from "./pages/Admin/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/khassbazzar/newproduct" element={<NewProduct />} />
        <Route path="/khassbazzar/product" element={<Product />} />
        <Route path="/khassbazzar/order" element={<Order />} />
        <Route path="/khassbazzar/customer" element={<Customer />} />
        <Route path="/khassbazzar/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
