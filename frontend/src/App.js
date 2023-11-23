import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Navbar from "./Components/Navbar.jsx";
import SinglePost from "./Pages/Forum/SinglePost.jsx" 
import Forum from "./Pages/Forum/ForumPage.jsx";

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/uni1" element={<Homepage />}></Route>
          <Route path="/uni1/forum" element={<Forum />}></Route>
          <Route path="/uni1/forum/id" element={<SinglePost/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
