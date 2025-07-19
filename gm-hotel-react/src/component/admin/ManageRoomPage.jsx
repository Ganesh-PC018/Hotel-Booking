import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import ApiService from '../../service/ApiService';
import Pagination from '../common/Pagination';
import RoomResult from '../common/RoomResult';

const ManageRoomPage = () =>{
    const [rooms,setRooms] = useState([]);
    const [filteredRooms,setFilteredRooms] = useState([]);
    const [roomTypes,setRoomTypes] = useState([]);
    const [selectedRoomType,setSelectedRoomType]  = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [roomsPerPage] = useState(5);
    const [err,setError] = useState("");
    const [hovered,setHovered] =useState(false);
    const navigate = useNavigate();

    useEffect(() =>{
        const fetchRooms = async () =>{
            try{
                const response = await ApiService.getAllRooms();
                setRooms(response.roomList);
                setFilteredRooms(response.roomList);
            }catch(error){
                setError(`Couldn't Fetch All Rooms : ${error.message}`);
                setTimeout(()=>{
                    setError("")
                },5000);
            }
        };

        const fetchRoomTypes =async () =>{
            try{
               const response = await ApiService.getRoomTypes();
               setRoomTypes(response);
            }catch(error){
                setError(`Couldn't Fetch Room types +${error.message}`)
                setTimeout(()=>{
                    setError('');
                },5000)
            }
        }
        fetchRooms();
        fetchRoomTypes();
    },[])
    const handleRoomTypeChange =(e) =>{
        setSelectedRoomType(e.target.value);
        filterRooms(e.target.value);
    }

    const filterRooms=(type) =>{
        if(type === ''){
            setFilteredRooms(rooms);
        }else{
          const filtered =  rooms.filter((room)=>(
                room.roomType === type
          ));
            setFilteredRooms(filtered);
        }
        setCurrentPage(1);
    }
    
    const indexOfLastRoom = currentPage*roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom  - roomsPerPage;
    const currentRooms = filteredRooms.slice(indexOfFirstRoom,indexOfLastRoom);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <div className='all-rooms'>
            <h2>All Rooms</h2>
            <div className="all-rooms-filter-div" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className="filter-select-div">
                    <label>Filter by Room Type :</label>
                    <select value={selectedRoomType} onChange={handleRoomTypeChange}>
                        <option value="">All</option>
                        {roomTypes.map((type)=>(
                            <option value={type} key={type}>{type}</option>
                        ))}
                    </select>
                   <button
  className='add-room-button'
  onClick={() => navigate('/admin/add-room')}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  style={{
    backgroundColor : hovered ? '#9a3274' : '#9a3274',
    color : hovered ? '#007bff' :'white',
    transition:'0.3s'
  }}
>
  {hovered ? '🗑️' : 'Add Room'}
</button>
                </div>
            </div>
            <RoomResult roomSearchResults={currentRooms}/>
            <Pagination
                roomsPerPage={roomsPerPage}
                totalRooms={filteredRooms.length}
                currentPage={currentPage}
                paginate={paginate}/>
        </div>
    );
};

export default ManageRoomPage;