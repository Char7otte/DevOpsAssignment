import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../SimpleDashboard.css";
import axios from "axios";
import {useEffect, useState} from "react";

const SimpleDashboard = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const [Users, setUsers] = useState([])

  const getAllUsers = async () => {
    try {

      const response = await axios.get(`${import.meta.env.VITE_API_URL}/Users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      // Handle error appropriately (show toast, set error state, etc.)
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []) // Empty dependency array to run only on component mount


  return (
    <div className="simple-dashboard">
      <nav className="simple-navbar">
        <h1 className="simple-logo">DevOps</h1>
        <div className="simple-nav-right">
          <span className="simple-username">{user?.username}</span>
          <button onClick={handleLogout} className="simple-logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <div className="simple-content">
        <div className="simple-welcome-card">
          <h2>Welcome, {user?.username}</h2>
          <p>You have logged in.</p>

          <div className="simple-info-box">
            <div className="simple-info-item">
              <span className="simple-info-label">Email:</span>
              <span className="simple-info-value">{user?.email}</span>
            </div>
            <div className="simple-info-item">
              <span className="simple-info-label">Role:</span>
              <span className="simple-info-value">{user?.role}</span>
            </div>
          </div>
        </div>
      </div>

      {Users && isAdmin && (Users.map((user) => (
          <div key={user.userid}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </div>
      )))}


    </div>
  );
};

export default SimpleDashboard;
