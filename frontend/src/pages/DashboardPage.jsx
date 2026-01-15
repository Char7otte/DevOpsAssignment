import React from 'react'
import {useAuth} from "../contexts/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header.jsx";
import "../SimpleDashboard.css";

const DashboardPage = () => {
    const { user, logout, isAdmin } = useAuth();
    const navigate = useNavigate();



    return (
        <div className="simple-dashboard">
           <Header></Header>

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

        </div>
    );
}
export default DashboardPage
