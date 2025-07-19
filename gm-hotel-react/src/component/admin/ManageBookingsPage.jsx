import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import Pagination from '../common/Pagination.jsx';

const ManageBookingsPage = ()=>{
    const [bookings,setBookings] =useState([]);
    const [filteredBookings,setFilteredBookings] =useState([]);
    const [searchTerm,setSearchTerm]  = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [bookingsPerPage] = useState(6);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchBookings=async ()=>{
            try{
                const response =await ApiService.getAllBookings();
                setBookings(response.bookingList);
                setFilteredBookings(response.bookingList);
            }catch(error){
                console.log(error.message);
            }
        }

        fetchBookings();
    },[]);

    useEffect (()=>{
        filterBookings(searchTerm);
    },[searchTerm,bookings]);

    const filterBookings=(term) =>{
        if(term ===''){
            setFilteredBookings(bookings);
        }else{
            const filtered = bookings.filter((booking)=>
                booking.bookingConfirmationCode && booking.bookingConfirmationCode.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredBookings(filtered);
        }
        setCurrentPage(1);
    }
    const handleSearchChange =(e)=>{
        setSearchTerm(e.target.value);
    }

    const indexOfLastBooking = currentPage*bookingsPerPage;
    const indexOfFirstBooking  = indexOfLastBooking-bookingsPerPage;
    const currentBookings    = filteredBookings.slice(indexOfFirstBooking,indexOfLastBooking)
    const paginate = (pageNumber) =>setCurrentPage(pageNumber)

    return(
        <div className="booking-container">
            <h2>All Bookings</h2>
            <div className="search-div">
                <label htmlFor="Filter by Booking Number : ">Confirmation Code : </label>
                <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder='Enter Booking Number' />

            </div>
            <div className="booking-results">
                {currentBookings.map((booking)=>(
                    <div className="booking-result-item" key={booking.id}>
                        <p><strong>Booking Code : </strong>{booking.bookingConfirmationCode}</p>
                        <p><strong>Check In Date : </strong>{booking.checkInDate}</p>
                        <p><strong>Check Out Date : </strong>{booking.checkOutDate}</p>
                        <p><strong>Total Guest : </strong>{booking.totalNumOfGuest}</p>
                        <button className='edit-room-button' onClick={()=>navigate(`/admin/edit-booking/${booking.bookingConfirmationCode}`)}>
                            Manage Booking
                        </button>
                    </div>
                ))}
            </div>
            <Pagination
                roomsPerPage={bookingsPerPage}
                totalRooms={filteredBookings.length}
                currentPage={currentPage}
                paginate={paginate}
                />
        </div>
    );
    
};
export default ManageBookingsPage;