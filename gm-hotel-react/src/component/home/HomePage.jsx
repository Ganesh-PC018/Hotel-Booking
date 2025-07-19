import React from 'react';
import {useState,useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import RoomSearch from '../common/RoomSearch.jsx';
import RoomResult from '../common/RoomResult.jsx'
import backgroundImage from '../../assets/images/Wallpaper_Hotel.jpg';
import airConditioning from '../../assets/images/air-conditioner.png';
import minibar from '../../assets/images/mini-bar.png';
import parking from '../../assets/images/parking.png';
import wifi from '../../assets/images/wifi.png';


function HomePage(){ 
    const [roomSearchResults,setRoomSearchResults] = useState([])
    const handleSearchResult = (result) =>{
        setRoomSearchResults(result);
        console.log(result);
    }
   return (
        <div className='home'>
            <section>
                <header className='header-banner'>
                    <img src={backgroundImage} alt="Hotel home page" className='header-image'/>
                    <div className='overlay'>
                    <div className='animated-texts overlay-content'>
                        <h1 id='titleName-header'>
                        Welcome to <span className='hotelCover-color'>GM International</span>
                        </h1>
                        <h3 id='quote-hotel'>Step into a haven of comfort and care.</h3>
                    </div>
                    </div>
                </header>
            </section>
            {/* <section> */}
            <div className="search-box">
                <RoomSearch handleSearchResult={handleSearchResult}/>
                {roomSearchResults && <RoomResult roomSearchResults={roomSearchResults}/>}
            </div>
            {/* </section> */}
            <h4><a className='view-rooms-home' href='/rooms'>All Rooms</a></h4>
            <h2 className='home-services'> Services At <span className='hotelCover-color'>GM International</span></h2>
            <section className='service-section'>
                <div className='service-card'>
                    <img src={airConditioning} alt='Air Conditioning'/>
                    <div className="service-details">
                        <h3 className='service-title'>Air Conditioning</h3>
                        <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air Conditioning.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src={minibar} alt="Mini Bar"/>
                    <div className="service-details">
                        <h3 className="service-title">Mini Bar</h3>
                        <p className="service-description">Enjoy a convenient Selection of beverages and snacks stocked in your room's mini bar with no additional cost.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src={parking} alt="Parking" />
                    <div className="service-details">
                        <h3 className="service-title">Parking</h3>
                        <p className="service-description">We offer on-site parking for your convenience . Please inquire about valet parking options if available.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src={wifi} alt="WiFi" />
                    <div className="service-details">
                        <h3 className="service-title">WiFi</h3>
                        <p className="service-description">Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
                    </div>
                </div>
            </section>

        </div>
   )
}   

export default HomePage;