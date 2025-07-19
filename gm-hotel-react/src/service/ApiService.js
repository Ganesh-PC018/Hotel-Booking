import axios from "axios";
import { Await } from "react-router-dom";
/*
    --async and await are keyword in JS.
    --to write cleaner and asynchronous code.
    --async -> Function always returns a promise(wrapping its return value in a promise if needed)
    --The await keyword can only be used inside an async function, and it tells JS to pause executing the function
      until the promise is resolved(finished) and then continue.
    --await makes the code wait for the result of a promise without using .then()
      This "pauses" just the async function not one guide puts it
    --async --> placed before function definition.
            --> it guarantees the function returns a promise.
    --await --> Used only inside am asyc  functiom.
            --> Writing await promise makes JS wait until promise settles and returns result.
    !Token  --> Converts the value to boolean and negates it
    !!token --> giving you the actual boolean value;
*/
export default class ApiService {
static BASE_URL = import.meta.env.VITE_HOTEL_BACKEND_URL || "http://localhost:8080";
  static getHeader() {
    const token = localStorage.getItem("token");
    // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5lLmdhbmVzaC5wY0BnbWFpbC5jb20iLCJpYXQiOjE3NTA1Njg3MDksImV4cCI6MTc1MDU3ODc4OX0.6OsQZj_8gkkBsknijxYW0wekLe2f-ulho9DVCF_z9Po";
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }
  static async registerUser(registration) {
    const response = await axios.post(
      `${this.BASE_URL}/auth/register`,
      registration
    );
    return response.data;
  }
  static async loginUser(loginDetails) {
    const response = await axios.post(
      `${this.BASE_URL}/auth/login`,
      loginDetails
    );

    return response.data;
  }

  static async getAllUser() {
    const response = await axios.get(`${this.BASE_URL}/users/all`,{
      headers:this.getHeader()
    });
    return response.data;
  }

  static async getUserById(userId) {
    const response = await axios.get(
      `${this.BASE_URL}/users/get-by-id/${userId}`,{
        headers:this.getHeader()
      }
    );
    return response.data;
  }

  static async getLoggedInProfileInfo() {
    const response = await axios.get(
      `${this.BASE_URL}/users/get-logged-in-profile-info`,{
        headers:this.getHeader()
      });
    return response.data;
  }
  static async getUserBookingHistory(userId) {
    const response = await axios.get(
      `${this.BASE_URL}/users/get-user-bookings-history/${userId}`,{
        headers:this.getHeader()
      });
    return response.data;
  }

  static async deleteUser(userId) {
    const response = await axios.delete(
      `${this.BASE_URL}/users/delete-user/${userId}`
    );
    return response.data;
  }

  static async addRoom(formData) {
    const result = await axios.post(`${this.BASE_URL}/rooms/add`, formData, {
      headers: {
        ...this.getHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return result.data;
  }

  static async getAllRooms() {
    const response = await axios.get(`${this.BASE_URL}/rooms/all`);
    return response.data;
  }
  static async updateUser(userId){
    const response =await axios.get(`${this.BASE_URL}/users/update-user/${userId}`,
      {
        headers :this.getHeader()
      })
      return response.data;
  }
  static async getRoomTypes() {
    const response = await axios.get(`${this.BASE_URL}/rooms/types`);
    return response.data;
  }

  static async getRoomById(roomId) {
    const response = await axios.get(
      `${this.BASE_URL}/rooms/room-by-id/${roomId}`
    );
    return response.data;
  }

  static async getAllAvailableRooms() {
    const response = await axios.get(
      `${this.BASE_URL}/rooms/all-available-rooms`
    );
    return response.data;
  }

  static async getAllRoomsByDateAndTypes(checkInDate, checkOutDate, roomType) {
    const response = await axios.get(
      `${this.BASE_URL}/rooms/all-available-rooms-by-date-and-types?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&roomType=${roomType}`
    );
    return response.data;
  }

  static async deleteRoom(roomId) {
    const response = await axios.delete(
      `${this.BASE_URL}/rooms/delete-room/${roomId}`,
      {
        headers: this.getHeader(),
      }
    );
    return response.data;
  }

  static async updateRoom(roomId, formData) {
    const response = await axios.put(
      `${this.BASE_URL}/rooms/update-room/${roomId}`,
      formData,
      {
        headers: {
          ...this.getHeader(),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }

  static async bookRoom(roomId, userId, booking) {
    console.log("User Id : " + userId);
    const response = await axios.post(
      `${this.BASE_URL}/bookings/book-room/${roomId}/${userId}`,
      booking,
      {
        headers: this.getHeader(),
      }
    );
    return response.data;
  }

  static async getByConfirmationCode(confirmationCode) {
    const response = await axios.get(
      `${this.BASE_URL}/bookings/get-by-confirmation-code/${confirmationCode}`,
      {
        headers: this.getHeader()
      });
    return response.data;
  }

  static async getAllBookings() {
    const response = await axios.get(`${this.BASE_URL}/bookings/all-bookings`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  static async cancelBooking(bookingId) {
    const response = await axios.delete(
      `${this.BASE_URL}/bookings/cancel-booking/${bookingId}`,
      {
        headers: this.getHeader(),
      }
    );
    return response.data;
  }

  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5lLmdhbmVzaC5wY0BnbWFpbC5jb20iLCJpYXQiOjE3NTA1Njg3MDksImV4cCI6MTc1MDU3ODc4OX0.6OsQZj_8gkkBsknijxYW0wekLe2f-ulho9DVCF_z9Po"
    return !!token;
  }

  static isAdmin() {
    const role = localStorage.getItem("role");
    // const role = "ADMIN1";

    return role === "ADMIN";
  }

  static isUser() {
    const role = localStorage.getItem("role");
    // const role = "USER";
    return role === "USER";
  }
}
