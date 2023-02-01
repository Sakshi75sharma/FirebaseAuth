import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';

const Account = (props) => {

  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out")
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div>
      <h1>Account</h1>
      <p>{props.name ? `Welcome - ${props.name}` : "Login Please" }</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Account;
