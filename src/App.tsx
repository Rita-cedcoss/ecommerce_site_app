import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './ecommerce_site/components/SignUp';
import Login from './ecommerce_site/components/Login';
import { Route, Routes } from 'react-router-dom';
import UserDashboard from './ecommerce_site/components/UserDashboard';
import AdminDashBoard from './ecommerce_site/components/AdminDashBoard';
import ManagerDashboard from './ecommerce_site/components/ManagerDashboard';
import CartPage from './ecommerce_site/components/CartPage';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path="/user" element={<UserDashboard/>}/>
      <Route path="/admin" element={<AdminDashBoard/>}/>
      <Route path="/manager" element={<ManagerDashboard/>}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
    </>
    
  );
}

export default App;
