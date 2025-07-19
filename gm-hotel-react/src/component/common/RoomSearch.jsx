import React,{useState,useEffect} from 'react';
// import datePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ApiService from '../../service/ApiService';
import DatePicker from 'react-datepicker';

const RoomSearch = ({handleSearchResult}) =>{
    const [startDate,setStartDate] = useState(null);
    const [endDate,setEndDate] = useState(null);
    // const [checkInDate,setCheckInDate] = useState(null)
    // const [checkOutDate,setCheckOutDate] = useState(null)
    const [roomType,setRoomType] = useState("");
    const [roomTypes,setRoomTypes] = useState([]);
    const [error,setError] = useState("");

  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const types = await ApiService.getRoomTypes();
        setRoomTypes(types);
      } catch (error) {
        console.error('Error fetching room types:', error.message);
      }
    };
    fetchRoomTypes();
  }, []);

    useEffect(() =>{
        if(startDate && endDate && roomType){
            // console.log("We are Here");
            handleInternalSearch();
        }
    },[startDate,endDate,roomType])

    const showError = (message,timeOut=5000) =>{
            setError(message);
            setTimeout(() =>{
                setError("")
            },timeOut);
            return;
    };
    const handleInternalSearch = async () =>{
        if(!startDate || !endDate || !roomType){
            showError("Please Select all fields.");
            return false
        }
        try{
            const formattedStartDate = startDate ? startDate.toISOString().split('T')[0] : null;
            const formattedEndDate   = endDate   ? endDate.toISOString().split('T')[0] : null;
            const response = await ApiService.getAllRoomsByDateAndTypes(formattedStartDate,formattedEndDate,roomType);
            if(response.statusCode === 200){
                if(response.roomList.length === 0){
                    showError("Room Not currently Available for this Dates.");
                    return;
                }
                handleSearchResult(response.roomList);
                setError("");
            }
        }catch(error){
            console.log("Error")
            
            showError("Unknown error occurred : "+error.response.data.message);
        }

    };

    return(
        <section className='search-container'>
            <div className="search-field">
                <label>Check-in Date</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date)=>setStartDate(date)}
                    dateFormat ="dd/MM/yyyy"
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Select check-in-date.."
                />
            </div>
            <div className="search-field">
                <label >Check-out Date</label>
                <DatePicker
                selected={endDate}
                onChange={(date)=>setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select check-out-date.."
                />
            </div>
            <div className="search-field">
                <label>Room Type</label>
                <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                <option value="" disabled>Select Room type</option>
                    {roomTypes.map((roomType) =>(
                        <option key={roomType} value={roomType}>{roomType}</option>
                    ))}
                </select>
            </div>
            {/* <button className="home-search-button" >
          Search Rooms
        </button> */}
      {error && <p className="error-message">{error}</p>}

        </section>
    );

}

export default RoomSearch;