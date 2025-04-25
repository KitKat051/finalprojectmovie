// import React from 'react';
// import Signin1 from '../components/SignIn/Signin1';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// const Dashboard = (props) => {
//   const location = useLocation();
//   const { from, message } = location.state || {};
//   const { from2, message2 } = location.state || {};
//   const { from3, message3 } = location.state || {};
//   const { from4, message4 } = location.state || {};
//   const handleCreate = () => {
//     navigate("/GSignin1");
//   };
//   const handleCreate1 = () => {
//     setTimeout(() => {
//         navigate("/home");
//       }, 1000);
//   };
//   const navigate = useNavigate();
//   const testlocal = () => {

//     console.log(localStorage.getItem("myAppData"));
//   };
//   const data = JSON.parse(localStorage.getItem("myAppData")) || {};

//   // const [sessionStorageValue, setSessionStorageValue] =
//   // UseSessionStorage('mySessionStorageKey', SignIn.email);
//     return (
//       <div>
        
//         <header>
//         <button onClick={handleCreate}>Logout</button>
//         <button onClick={handleCreate1}>Go To Movie Home</button>
//         </header>
//         {/* <p>Welcome to your Dashboard {props.value}  </p> */}
//         <h1>Profile Page</h1>
//         <button onClick={testlocal}>Button</button>
//         <>
//     <p>Email: {data.email}</p>
//     <p>FAVORITE MOVIE: {data.favmovie}</p>
//     <p>BIO: {data.bio}</p>
//   </>
//       {/* {message && <p>Welcome: {message}</p>}
//       <p>{localStorage.getItem("FavMovie")}</p>
//       {message2 && <p>Favorite Movie: {message2}</p>}
//       {message3 && (
//   <div>
//     <h3>Full Data Received:</h3>
//     <ul>
//       {message3.carlist && message3.carlist.map((car, index) => (
//         <li key={index}>{car}</li>
//       ))}
//     </ul>
//   </div>
// )}
//       {message4 && <p>Bio: {message4}</p>} */}
//       </div>
//     );
//   };
//   export default Dashboard;
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import "./pPage.css"

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructuring location.state safely
  const { message, message2, message3, message4 } = location.state || {};

  const handleLogout = () => {
    // Clear session or logout logic here if needed
    navigate("/GSignin1"); // Navigate to Sign In page
  };

  const handleGoHome = () => {
        navigate("/", { replace: true });
      
  };

  const testlocal = () => {
    console.log(localStorage.getItem("myAppData")); // Debug local storage
  };

  const data = JSON.parse(localStorage.getItem("myAppData")) || {};

  return (
    <div>
      <header>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleGoHome}>Go To Movie Home</button>
      </header>

      <h1>Profile Page</h1>
      <button onClick={testlocal}>Test Local Storage</button>

      <div>
      <div>
  <p>Email: {data.email}</p>
  <p>Favorite Movie: {data.favmovie}</p>
  <p>Bio: {data.bio}</p>
  
  <h3>Reviews:</h3>
  {data.newReview && data.newReview.length > 0 ? (
    <ul>
      {data.newReview.map((review, index) => (
        <li key={index}>
          <strong>{review.author}</strong>: {review.content}
        </li>
      ))}
    </ul>
  ) : (
    <p>No reviews yet.</p>
  )}
<p>
  <strong>Last Submitted Rating:</strong>{" "}
  {data.lastRating ? `${data.lastRating}/10` : "No rating submitted yet."}
</p>
</div>

      </div>

      {/* Optional debug messages, you can uncomment if you want to check state */}
      {/* {message && <p>Welcome: {message}</p>} */}
      {/* {message2 && <p>Favorite Movie: {message2}</p>} */}
      {/* {message3 && message3.carlist && (
        <div>
          <h3>Full Data Received:</h3>
          <ul>
            {message3.carlist.map((car, index) => (
              <li key={index}>{car}</li>
            ))}
          </ul>
        </div>
      )} */}
      {/* {message4 && <p>Bio: {message4}</p>} */}
    </div>
  );
};

export default Dashboard;
