import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';
export default function Login() 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/login', formData);
      if (response.data != null) {
        console.log(response.data)
        navigate("/dashboard");
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

    return (
    <div>
      <NavBar/>
       {
          message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
        }

      <form class="form-control" onSubmit={handleSubmit}>
  <p class="title">Login</p>
  <div class="input-field">
    <input  class="input" type="email" id='email' value={formData.email}  onChange={handleChange} required/>
    <label class="label" for="input">Enter Email</label>
  </div>
  <div class="input-field">
    <input  class="input" type="password" id='password' value={formData.password}  onChange={handleChange} required/>
    <label class="label" for="input">Enter Password</label>
  </div>
  <a href='s'>Forgot your password?</a>
  <button class="submit-btn" type='submit' disabled={!formData}>Login</button>

</form>
    </div>
  )
}