import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import SidebarPage from "./Components/Sidebar.jsx"
import HomeNav from "./Components/HomeNav.jsx"
import SinglePost from "./Pages/Forum/SinglePost.jsx" 
import Forum from "./Pages/Forum/ForumPage.jsx";
import Hackathons from "./Pages/Hackathons.jsx";
import Upskill from "./Pages/Upskill/UpskillPage.jsx";

function App() {
  return (
    <div>
      {/* <HomeNav/> */}
      <Navbar />
      {/* <SidebarPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/uni1" element={<Homepage />}></Route>
          <Route path="/uni1/forum/new" element={<Forum tag={"New"}/>}></Route>
          <Route path="/uni1/forum/hot" element={<Forum tag={"Hot"}/>}></Route>
          <Route path="/uni1/forum/closed" element={<Forum tag={"Closed"}/>}></Route>
          <Route path="/uni1/forum/:id" element={<SinglePost />}></Route>
          <Route path="/uni1/hackathon" element={<Hackathons />}></Route>
          <Route path="/uni1/upskill" element={<Upskill />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
