import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import "./ca.css"

const MakeAccount = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setForm(prevData => {
      const updatedForm = {
        ...prevData,
        [name]: value
      };
  
      const existingData = JSON.parse(localStorage.getItem('myAppData')) || {};
  
      const mergedData = {
        ...existingData,
        ...updatedForm
      };
  
      localStorage.setItem('myAppData', JSON.stringify(mergedData));
  
      return updatedForm;
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setForm(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      else {
    navigate("/tellaboutself");
    alert("Account Creation Successful!");
      }
  };

  return (
    <section id="contact">
      <h1>Sign In:</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={form.password} onChange={handleChange}  required />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input  type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handlePasswordChange} required/>
        <br />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
      {/* <h3>Don't Have an Account?</h3>
      <button>Create</button>       */}
    </section>
  );
};

export default MakeAccount;