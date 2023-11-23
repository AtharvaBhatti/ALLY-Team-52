import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Navbar from "./Components/Navbar.jsx";
import SidebarPage from "./Components/Sidebar.jsx"

function App() {
  return (
    <div>
      <Navbar/>
      <SidebarPage/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
