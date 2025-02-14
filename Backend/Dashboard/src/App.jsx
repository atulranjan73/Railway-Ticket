import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AddTicket from "./page/AddTicket";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TicketList from "./page/TicketList";
import DashBoard from "./page/DashBoard";
import UserList from "./page/UserList";
import "./style/global.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Ensure authentication persists after page refresh
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("token"));

  useEffect(() => {
    // If no token is found, ensure the user is logged out
    if (!localStorage.getItem("token")) {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      {/* Show Header and Sidebar only if logged in */}
      {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <Sidebar />}

      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/add-ticket" element={<AddTicket />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/add-users" element={<Signup />} />
            <Route path="/ticket-list" element={<TicketList />} />
            <Route path="/dash-board" element={<DashBoard />} />

            {/* If user enters an unknown URL, redirect to home */}
            <Route path="*" element={<Navigate to="/dash-board" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            {/* Redirect all unknown routes to login page if not authenticated */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
