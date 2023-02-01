import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.module.css';
import { UserAuth } from './AuthContext';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const {createUser} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try{
      await createUser(email, password).then(async(res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });
      })
      navigate("/account")
    } catch (e) {
      setError(e.message)
      alert(e.message)
    }
  }
  return (
    <div className='section'>
        <div>
        <h1>Signin to your account</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='input'>
              <label >User Name</label><br />
               <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Full Nmae'/> 
            </div>
            <div className='input'>
              <label>Email</label><br />
               <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email Address'/> 
            </div>
            <div className='input'>
              <label>Password</label><br />
               <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/> 
            </div>
            <br />
            <button className='button'>Sign Up</button>
            <br />
            <br />
            <p>
                Already have an account yet? <Link to='/'>Sign in</Link>
            </p>
        </form>
    </div>
  )
}

export default Signup;
