import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService.js";

function Navbar(){
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin  = ApiService.isAdmin();
    const isUser   = ApiService.isUser();
    const navigate  = useNavigate();
    const isActive = ({isActive}) =>{
        return isActive ? 'active' : '';
    }
    
    const handleLogOut = () =>{
        const isLogout = window.confirm("Are you sure you really want to logout");
        if(isLogout){
            ApiService.logout();
            navigate('/');
        }
    }
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/">GM-International</NavLink>
            </div>
            <ul className="navbar-ul">
                <li><NavLink to="/" className={isActive}> Home </NavLink></li>
                <li><NavLink to="/rooms" className={isActive}> Rooms </NavLink></li>
                <li><NavLink to="/find-booking" className={isActive}> Find by bookings </NavLink></li>
                {isAdmin && <li><NavLink to="/profile" className={isActive}> Profile</NavLink></li>}
                {isUser && <li><NavLink to="/profile" className={isActive}> Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" className={isActive}> Admin</NavLink></li>}
                {!isAuthenticated && <li><NavLink to="/login" className={isActive}> Login</NavLink></li>}
                {!isAuthenticated && <li><NavLink to="/register" className={isActive}> Register/SignUp</NavLink></li>}
                {/* {isAuthenticated && <li onClick={handleLogOut}>logout</li>}  */}
            </ul>
        </nav>
    );
}

export default Navbar;