import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import LandingNavbar from "./Components/LandingNavbar.jsx";
import Navbar from "./Components/Navbar.jsx";
import SidebarPage from "./Components/Sidebar.jsx"
import HomeNav from "./Components/HomeNav.jsx"
import SinglePost from "./Pages/Forum/SinglePost.jsx" 
import Forum from "./Pages/Forum/ForumPage.jsx";
import Hackathons from "./Pages/Hackathons.jsx";
import Upskill from "./Pages/Upskill/UpskillPage.jsx";
import Students from "./Pages/Students.jsx";
import Alumini from "./Pages/Alumini.jsx";
import Seminars from "./Pages/seminars.jsx";
import Profile from "./Pages/Profile/ProfilePage.jsx";
import MessagingComponent from "./Pages/Messaging.jsx"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";


function App() {
  const [isUni1Route, setIsUni1Route] = useState(false);

  useEffect(() => {
    // Check the current pathname on mount
    const currentPathname = window.location.pathname;
    setIsUni1Route(currentPathname.startsWith('/uni1'));
  }, []);
  return (
    <div>
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/uni1" element={<Homepage />}></Route>
          <Route path="/uni1/forum/new" element={<Forum tag={"New"}/>}></Route>
          <Route path="/uni1/forum/hot" element={<Forum tag={"Hot"}/>}></Route>
          <Route path="/uni1/forum/closed" element={<Forum tag={"Closed"}/>}></Route>
          <Route path="/uni1/forum/:id" element={<SinglePost />}></Route>
          <Route path="/uni1/hackathon" element={<Hackathons />}></Route>
          <Route path="/uni1/courses" element={<Upskill />}></Route>
          <Route path="/uni1/students" element={<Students />}></Route>

          <Route path="/uni1/alumni" element={<Alumini />}></Route>
          <Route path="/uni1/upskill" element={<Upskill />}></Route>
          <Route path="/uni1/seminars" element={<Seminars />}></Route>
          <Route path="/uni1/profile/:name" element={<Profile />}></Route>
          <Route path="/uni1/message" element={<MessagingComponent />}></Route>


        </Routes>
      </BrowserRouter>
      <div onClick={()=>
        {
          window.location.href = "/uni1/message"
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#0065C1",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={faComment} style={{ fontSize: "24px" }} />
      </div>
    </div>
  );
}

export default App;