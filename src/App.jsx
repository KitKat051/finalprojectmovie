// // import { Routes, Route } from "react-router-dom";

// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // import React from 'react';
// // import Home from "./pages/Home";
// // import Details from "./pages/Details";
// // import NotFound from "./pages/NotFound";
// // import SignUp from './components/SignUp/SignUp';
// // import SignIn from './components/SignIn/SignIn';
// // import NavigationBar from "./components/NavigationBar/NavigationBar";

// // import "./App.css";

// // function App() {
// //   return (
// //     <>
// //       <NavigationBar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/signup" element={<SignUp />} />
// //         <Route path="/signin" element={<SignIn />} />
// //         <Route path="/movie/:id" element={<Details />} />
// //         <Route path="*" element={<NotFound />} />
// //       </Routes>
// //     </>
// //   );
// // }

// // export default App;
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import { useLocation } from "react-router-dom";

// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // import React from 'react';
// // import Home from "./pages/Home";
// // import Details from "./pages/Details";
// // import NotFound from "./pages/NotFound";
// // // import SignUp from './components/SignUp/SignUp';
// // // import SignIn from './components/SignIn/SignIn';
// // import NavigationBar from "./components/NavigationBar/NavigationBar";
// // import GSignIn1 from './components/SignIn/SignIn1';
// // import Dashboard from "./pages/Ppage";
// // import MakeAccount from "./components/SignIn/CreateAccount";
// // import Tellaboutself from "./components/SignIn/TellAboutSelf";
// // // import ScrollToTop from "./components/NavigationBar/scrolltotop";
// // // import { PersistGate } from 'redux-persist/integration/react';
// // import { useState, useEffect } from "react";
// // import "./App.css";


// // function App() {
// //   // const [showNav, setShowNav] = useState(false);

// //   // useEffect(() => {
// //   //   const timer = setTimeout(() => setShowNav(true), 100); // slight delay helps navbar load cleanly
// //   //   return () => clearTimeout(timer);
// //   // }, []);
// //   // const location = useLocation();
// //   // const currentPath = location.pathname;
// //   const location = useLocation();
// //   // const [showNav, setShowNav] = useState(false);

// //   // useEffect(() => {
// //   //   // show the navbar only on these paths
// //   //   const pathsWithNav = ["/home", "/movie/:id"];
// //   //   const currentPath = location.pathname;

// //   //   const shouldShow =
// //   //     pathsWithNav.some((path) => currentPath.startsWith(path));

// //   //   setShowNav(shouldShow);
// //   // }, [location]);
// //   // const showNav = currentPath === "/home" || currentPath === "/movie/:id"; 
// //   return (
// //     <>
// //       {/* <NavigationBar /> */}
// //       {/* <ScrollToTop /> */}
// //       {<NavigationBar />}

      

// //       <Routes>
// //         <Route path="/" element={<GSignIn1 />} />
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/Dashboard" element={<Dashboard />} />
// //         <Route path="/MakeAccount" element={<MakeAccount />} />
// //         <Route path="tellaboutself" element={<Tellaboutself />} />
// //         {/* <Route path="/signup" element={<SignUp />} />
// //         <Route path="/signin" element={<SignIn />} /> */}
// //         <Route path="/movie/:id" element={<Details />} />
// //         {/* <Route path="*" element={<NotFound />} /> */}
// //         <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all */}
// //       </Routes>
// //     </>
// //   );
// // }

// // export default App;
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import { useLocation } from "react-router-dom";

// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // import React from 'react';
// // import Home from "./pages/Home";
// // import Details from "./pages/Details";
// // import NotFound from "./pages/NotFound";
// // import NavigationBar from "./components/NavigationBar/NavigationBar";
// // import GSignIn1 from './components/SignIn/SignIn1';
// // import Dashboard from "./pages/Ppage";
// // import MakeAccount from "./components/SignIn/CreateAccount";
// // import Tellaboutself from "./components/SignIn/TellAboutSelf";
// // import "./App.css";

// // function App() {
// //   const location = useLocation();

// //   // Logic to show NavigationBar only on specific routes
// //   const shouldShowNav = location.pathname.startsWith("/home") || location.pathname.startsWith("/movie/");

// //   return (
// //     <>
// //       {/* Conditionally render NavigationBar */}
// //       {shouldShowNav && <NavigationBar />}

// //       <Routes>
// //         <Route path="/" element={<GSignIn1 />} />
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/Dashboard" element={<Dashboard />} />
// //         <Route path="/MakeAccount" element={<MakeAccount />} />
// //         <Route path="/tellaboutself" element={<Tellaboutself />} />
// //         <Route path="/movie/:id" element={<Details />} />
// //         {/* Uncomment to use a custom NotFound page */}
// //         <Route path="*" element={<NotFound />} />
// //       </Routes>
// //     </>
// //   );
// // }

// // export default App;
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import React from 'react';
// import Home from "./pages/Home";
// import Details from "./pages/Details";
// import NotFound from "./pages/NotFound";
// import NavigationBar from "./components/NavigationBar/NavigationBar";
// import GSignIn1 from './components/SignIn/SignIn1';
// import Dashboard from "./pages/Ppage";
// import MakeAccount from "./components/SignIn/CreateAccount";
// import Tellaboutself from "./components/SignIn/TellAboutSelf";
// import "./App.css";

// function App() {
//   const location = useLocation();

//   // Logic to show NavigationBar only on specific routes
//   const shouldShowNav = location.pathname.startsWith("/home") || location.pathname.startsWith("/movie/");

//   return (
//     <>
//       {/* Conditionally render NavigationBar */}
//       {shouldShowNav && <NavigationBar />}

//       <Routes>
//         {/* Automatically redirect to /home */}
//         <Route path="/" element={<Navigate to="/home" />} />

//         <Route path="/home" element={<div>Test Home Render</div>} />
        
//         <Route path="/Dashboard" element={<Dashboard />} />
//         <Route path="/MakeAccount" element={<MakeAccount />} />
//         <Route path="/tellaboutself" element={<Tellaboutself />} />
//         <Route path="/movie/:id" element={<Details />} />
//         {/* Uncomment to use a custom NotFound page */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
// import { Routes, Route } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import React from 'react';
// import Home from "./pages/Home";
// import Details from "./pages/Details";
// import NotFound from "./pages/NotFound";
// // import SignUp from './components/SignUp/SignUp';
// // import SignIn from './components/SignIn/SignIn';
// import NavigationBar from "./components/NavigationBar/NavigationBar";

// import Dashboard from "./pages/Ppage";
// import MakeAccount from "./components/SignIn/CreateAccount";

// import "./App.css";
// import GSignIn1 from "./components/SignIn/Signin1";

// function App() {
//   return (
//     <>
//       <NavigationBar />
//       <Routes>
//         <Route path="/GSignin1" element={<GSignIn1 />} />
//         {/* <Route path="/home" element={<Home key={Math.random()} />} /> */}
//         <Route path="/Dashboard" element={<Dashboard />} />
//         {/* <Route path="/MakeAccount" element={<MakeAccount />} /> */}
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} /> */}
//         <Route path="/movie/:id" element={<Details />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Dashboard from "./pages/Ppage";
import MakeAccount from "./components/SignIn/CreateAccount";
import GSignIn1 from "./components/SignIn/Signin1";
import Tellaboutself from "./components/SignIn/TellAboutSelf";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Show NavigationBar only on the home page ("/") */}
      {location.pathname === "/" && <NavigationBar />}

      <Routes>
        <Route path="/GSignin1" element={<GSignIn1 />} />
        <Route path="/MakeAccount" element={<MakeAccount />} />
        <Route path="/tellaboutself" element={<Tellaboutself />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* <Route path="/MakeAccount" element={<MakeAccount />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

// import { Routes, Route, Link } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import React from 'react';
// import Home from "./pages/Home";
// import Details from "./pages/Details";
// import NotFound from "./pages/NotFound";
// import NavigationBar from "./components/NavigationBar/NavigationBar";

// import Dashboard from "./pages/Ppage";
// import MakeAccount from "./components/SignIn/CreateAccount";

// import "./App.css";
// import GSignIn1 from "./components/SignIn/Signin1";

// function App() {
//   return (
//     <>
//       {/* <NavigationBar /> */}
//       <Routes>
//         <Route path="/" element={<GSignIn1 />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/Dashboard" element={<Dashboard />} />
//         <Route path="/movie/:id" element={<Details />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

// export default App;