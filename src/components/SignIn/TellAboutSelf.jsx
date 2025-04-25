import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../pages/Ppage';
import { useLocation } from 'react-router-dom';
// import "./tas.css"



const Tellaboutself = (props) => {
  
      const location = useLocation();
      const { from, message } = location.state || {};
// const { from2, message2 } = location.state || {};
  const navigate = useNavigate();
  const [form, setForm] = useState({
    favmovie: '',
    bio: ''
  });
  const [name2, setName] = useState('');
  const [pwd, setPwd] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm(prevData => {
  //     const updatedForm = {
  //       ...prevData,
  //       [name]: value
  //     }
  //     localStorage.setItem('myAppData', JSON.stringify(updatedForm));
  //     return updatedForm;
  //     });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setForm(prevData => {
      const updatedForm = {
        ...prevData,
        [name]: value
      };
  
      // Get existing data from localStorage (or empty object if none)
      const existingData = JSON.parse(localStorage.getItem('myAppData')) || {};
  
      // Merge existing data with the updated form
      const mergedData = {
        ...existingData,
        ...updatedForm
      };
  
      // Store the merged result back into localStorage
      localStorage.setItem('myAppData', JSON.stringify(mergedData));
  
      return updatedForm;
    });
  };
  
  const data = () => ({
email: '',
favmovie: '',   
bio: ''
  });

  // const handleSubmit = () => {
  //   // navigate("/Dashboard",
  //   //   {state: {from: 'Signin', message: form.email } },
  //   //   {state: {from2: 'Signin', message2: form.favmovie } }
  //   // );
  //   navigate('/dashboard', {
  //     state: {
  //       message: form.email,
  //       message2: form.favmovie,
  //       message3: cars
  //     }
  //   });
  //   alert("Login Successful!");
  // };
  const handleSubmit = () => {
    const fullData = {
      ...form,        // email, password, favmovie
      carlist: cars   // add cars to it
    };
  
    navigate('/dashboard', {
      state: {
        message2: form.favmovie,
        message4: form.bio // ← sending bio here
      }
    });
  
    alert("Login Successful!");
  };
  const cars = ['Ford', 'BMW', 'Audi'];
  const handleCreate = () => {
    navigate("/MakeAccount");
  };
  const data1 = JSON.parse(localStorage.getItem("myAppData")) || {};

  return (
    <section id="contact">

      <form>
      <p>Email: {data1.email}</p>
        <br />
        <label htmlFor="FavMovie">FavoriteMovie:</label>
        <input 
          type="text"
          id="FavMovie" 
          name="favmovie"
          value={form.favmovie} 
          onChange={handleChange} 
          required 
        />
        <br />
        <br />
        <h1>Tell us about yourself</h1>
        <br></br>
        <label htmlFor="Bio">Bio:</label>
        <input 
          type="text"
          id="bio" 
          name="bio"
          value={form.bio} 
          onChange={handleChange} 
          required 
        />
        <br />
        

    <>
</>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>  
    </section>
  );
};
{/* <Link to="/Ppage.jsx" state={{ message: form.email }}>Go to Detail Page</Link> */}
export default Tellaboutself;