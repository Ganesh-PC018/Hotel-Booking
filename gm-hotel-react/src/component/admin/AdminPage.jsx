import {useState,useEffect} from 'react';
import ApiService from '../../service/ApiService';
import { useNavigate } from 'react-router-dom';
const AdminPage=()=>{
    const [adminName,setAdminName] = useState("");
    const navigate = useNavigate();
    useEffect( ()=>{
        
        const fetchAdminName= async ()=>{

            try{
                const response =await ApiService.getLoggedInProfileInfo();
                setAdminName(response.user.name);
            }catch(error){
                console.error("Error while fetching admin details.");
            }
            // console.log(response.name);
            
        }
        fetchAdminName();
    },[]);
    return(
        <div className="admin-page">
            <h1 className="welcome-message">Welcome,{adminName}</h1>
            <div className="admin-action">
                <button className="admin-button" onClick={()=>navigate('/admin/manage-rooms')}>
                    Manage Rooms
                </button>
                <button className="admin-button" onClick={()=>navigate('/admin/manage-bookings')}>
                    Manage Bookings
                </button>
                <button className="admin-button" onClick={()=>navigate('/admin/manage-users')}>
                    Manage Users
                </button>
            </div>
        </div>
    );
}

export default AdminPage;