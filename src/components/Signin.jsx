import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';
import './Signup.module.css';


const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signIn(email, password)
      navigate("/account")
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  return (
    <div className='section'>
        <div>
        <h1>Signin to your account</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='input'>
              <label>Email</label><br />
               <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email Address'/> 
            </div>
            <div className='input'>
              <label>Password</label><br />
               <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/> 
            </div>
            <br />
            <button className='button'>Sign In</button>
            <br />
            <br />
            <p>
                Don't have an account yet? <Link to='/signup'>Sign Up</Link>
            </p>
        </form>
    </div>
  )
}

export default Signin;


