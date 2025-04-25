import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import "./SigninPage.css"
const GSignIn1 = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const data1 = JSON.parse(localStorage.getItem("myAppData")) || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const testlocal = () => {
    console.log(localStorage.getItem("myAppData"));
    console.log("Password: " + localStorage.getItem('password'));
    console.log("Email: " + localStorage.getItem('email'));
  };

  const localstoragrclear = () => {
    localStorage.clear();
  };

  const handleSubmit = () => {
    // Check if the form's email and password match the stored credentials
    if (form.password !== data1.password || form.email !== data1.email) {
      alert("Invalid email or password!");
      return;
    }

    // Navigate to the Dashboard on successful login
    navigate('/Dashboard', {
      state: {
        message: form.email,
      }
    });
  };

  const handleCreate = () => {
    navigate("/MakeAccount");
  };

  return (
    <section id="contact">
      <h1>Sign In:</h1>
      <button onClick={testlocal}>Test Local Storage</button>
      <button onClick={localstoragrclear}>Clear Local Storage</button>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
      <h3>Don't Have an Account?</h3>
      <button type="button" onClick={handleCreate}>Create Account</button>
    </section>
  );
};

export default GSignIn1;
