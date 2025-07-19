import './App.css'
import Navbar from './component/common/Navbar.jsx';
import HomePage from './component/home/HomePage.jsx';
import Footer from './component/common/Footer.jsx';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import AllRoomPage from './component/booking_rooms/AllRoomsPage.jsx';
import FindBookingPage from './component/booking_rooms/FindBookingPage.jsx';
import RoomDetailsPage from './component/booking_rooms/RoomDetailsPage.jsx';
import LoginPage from './component/auth/loginPage.jsx';
import RegisterPage from './component/auth/RegisterPage.jsx';
import ProfilePage from './component/profile/ProfilePage.jsx';
import EditProfilePage from './component/profile/EditProfilePage.jsx';
import AdminPage from './component/admin/AdminPage.jsx';
import ManageRoomPage from './component/admin/ManageRoomPage.jsx';
import AddRoomsPage from './component/admin/AddRoomPage.jsx';
import ManageBookingsPage from './component/admin/ManageBookingsPage.jsx';
import EditBookingPage from './component/admin/EditBookingPage.jsx';
import EditRoomPage from './component/admin/EditRoomPage.jsx';
import ManageUsers from './component/admin/ManagerUsers.jsx';
// import {ProtectedRoute,AdminRoute} from './service/Guard.js';
function App() {

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path="/rooms" element={<AllRoomPage/>}/>
          <Route exact path='/find-booking' element={<FindBookingPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/register' element={<RegisterPage/>}/>
          <Route exact path='/room-details-book/:roomId' element={<RoomDetailsPage/>}/>
          <Route exact path='/Profile'  element={<ProfilePage/>}/>
          <Route exact path='/edit-profile'  element={<EditProfilePage/>}/>
          <Route exact path='/admin' element={<AdminPage/>}/>
          <Route exact path='/admin/manage-rooms' element={<ManageRoomPage/>}/>
          <Route exact path='/admin/add-room' element={<AddRoomsPage/>}/>
          <Route exact path='/admin/manage-bookings' element={<ManageBookingsPage/>}/>
          <Route exact path='/admin/edit-booking/:bookingConfirmationCode' element={<EditBookingPage/>}/>
          <Route exact path='/admin/edit-room/:roomId' element={<EditRoomPage/>}/>
          <Route exact path='/admin/manage-users' element={<ManageUsers/>}/>
          {/* <Route path='*' element={<Navigate to="/" />} /> */}
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
