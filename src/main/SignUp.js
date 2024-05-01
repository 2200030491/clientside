import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import NavBar from './NavBar';

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usernameValue = data.get('username');
    const emailValue = data.get('email');
    const mobileValue = data.get('mobile');
    const accountNumberValue = data.get('accountNumber');
    const passwordValue = data.get('password');

    // Validate account number and mobile number format
    const isAccountNumberValid = accountNumberValue.length === 12;
    const isMobileValid = mobileValue.length === 10;

    if (!isAccountNumberValid) {
      console.error('Account number must be 12 digits');
      return;
    }

    if (!isMobileValid) {
      console.error('Mobile number must be 10 digits');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/insert', {
        username: usernameValue,
        email: emailValue,
        mobile: mobileValue,
        accountNumber: accountNumberValue,
        password: passwordValue,
        balance: 100000 // Default account balance
      });
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <><NavBar/>
    
    <div className="main">
      
      <div className="main-sub1">
        
        <h2 className="main-sub2">
          Sign up to your account
        </h2>
      </div>

      <div className="main-sub3">
        <form className="input-field" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="username">
              Username
            </label>
            <div className="username-field">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="off"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="email">
              Email address
            </label>
            <div className="email-field">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="mobile" className="mobile">
              Mobile Number
            </label>
            <div className="mobile-field">
              <input
                id="mobile"
                name="mobile"
                type="text"
                autoComplete="off"
                required
                pattern="[0-9]{10}"
                title="Mobile number must be 10 digits"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="accountNumber" className="accountnumber">
              Account Number
            </label>
            <div className="accountnumber-field">
              <input
                id="accountNumber"
                name="accountNumber"
                type="text"
                autoComplete="off"
                required
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="password">
              <label htmlFor="password" className="password-label">
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="password-field">
                <a href="#" className="forgot">
                  Forgot password?
                </a>
              </div>
          </div>
          <div>
            <button
              type="submit"
              className="button1"
            >
              Register
            </button>
          </div>
        </form>
        <p className="para1">
          Already a member?{' '}
          <Link to="/login" className="login">
            Login here
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}