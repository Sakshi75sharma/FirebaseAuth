import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { AuthContextProvider } from './components/AuthContext';
import { auth } from './firebase'
import ProtectedRoute from './components/ProtectedRoute';

export default function App() { 
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setUserName(user.displayName);
      } else setUserName("");
      
    })
  })
  return (
    <div>
      <h1>Welcome, Have A Good Time Surfing!</h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/account" element={<ProtectedRoute><Account name={userName} /></ProtectedRoute>}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  )
}


