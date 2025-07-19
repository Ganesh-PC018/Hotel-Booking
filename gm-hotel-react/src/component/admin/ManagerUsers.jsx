import { useEffect, useState } from "react";
import ApiService from "../../service/ApiService";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [role,setRole] = useState("");
  const [success,setSuccessMessage] = useState("");
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await ApiService.getAllUser();
        setUsers(response.userList);
      } catch (error) {
        console.log("Error fetching users:", error.message);
      }
    };

    fetchUserDetails();
  },[]);

  const handleRoleChange = async (id) => {
  try {
    const response1 = await ApiService.getUserById(id);
    const currentUser = response1.user;
    const updatedRole = currentUser.role === 'USER' ? 'ADMIN' : 'USER';

    const updatedUser = {
      ...currentUser,
      role: updatedRole,
    };

    const res = await ApiService.updateUser(id, updatedUser);
    if (res.statusCode === 200) {
      alert("Updated Successfully");
      // Update local state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, role: updatedRole } : user
        )
      );
    } else {
      alert("Error While Updating");
    }
  } catch (error) {
    console.error("Failed to fetch or update role:", error.message);
  }
};


return (
    <div className="user-container">
      <h2>All Users</h2>
       <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Change Role</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
          <button className="change-role-button" onClick={() => handleRoleChange(user.id)}>
            Change Role
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default ManageUsers;
