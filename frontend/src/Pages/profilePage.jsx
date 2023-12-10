import React, { useState, useEffect } from "react";
import { filter } from "../assets/images";
import Sidebar from "../Components/Sidebar.jsx";
import "./seminars.css";
import { useNavigate } from "react-router-dom";
import ForumRightBar from "../Components/Forum/ForumRightBar.jsx";
import SeminarListItem from "../Components/seminarListCard.jsx";

const Profile = () => {
  

  

  return (
    <div>
      <div className="forumPage">
        <Sidebar />
        <div className=""></div>
        <div className="forumMain ">
          

          
        </div>
      </div>
    </div>
  );
};

export default Profile;