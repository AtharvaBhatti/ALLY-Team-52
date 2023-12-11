import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar.jsx";
import { useNavigate, useParams } from "react-router-dom";
import "./ProfilePage.css";
import Navbar from "../../Components/Navbar.jsx";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   // ... (other imports)
// } from 'mdb-react-ui-kit';

const ProfilePage = ({ tag, users }) => {
  const [user, setUser] = useState(null);
  const { name } = useParams(); // Access the name parameter from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data based on the name from your API
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/view_userprofile/${name}/`);
        const userData = await response.json();
        setUser(userData);
        console.log(userData)
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle errors or redirect to a different page
        navigate("/error-page");
      }
    };

    fetchUserData();
  }, [name, navigate]);

  if (!user) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }



  return (
    <>
    <Navbar/>
    <div className="md:mt-4 flex">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="container profile">
      <div className="row">
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="Profile" className="img-fluid rounded-circle" style={{ margin:"auto", width: '150px' }} />
        <div className="centerUser">
        <h1 >{`${user[0].firstName} ${user[0].lastName}`}</h1>
          <h4 style={{ margin:"auto"}}>{user[0].about}</h4>
        </div>
        
      </div>

        
        <div className="centerUser col-md-8 d-flex justify-content-center align-items-center">
          
          <p>Born on {user[0].dateOfBirth}</p>
          <p><strong>📞 {user[0].mobileNo}</strong> </p>
          <p><strong>📧 {user[0].email}</strong> </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6" style={{ marginBottom: '1vh' }}>
          <h4><strong>About Me:</strong></h4>
          <p>{user[0].description}</p>
        </div>
        <div className="col-md-6">
          <h4><strong>Education: </strong></h4>
          <p>Currently a {user[0].type}</p>
          <p>Institute: {user[0].institute}</p>
          <p>Year of Passing: {user[0].yearOfPassing}</p>
          <p>Branch: {user[0].branch}</p>
        </div>
      </div>

      <div className="row mt-3">
        
          {user[0].yearsOfExperience!==0&&<div className="col-md-4" style={{marginBottom: '1vh'}}>
          <h4><strong>Work Experience: </strong></h4>
          <p>Years of Experience: {user[0].yearsOfExperience}</p><p>Company: {user[0].company}</p> </div>}
       
        <div className="col-md-4" style={{marginBottom:'1vh'}}>
          <h4><strong>Other Details</strong></h4>
          <p>Current Score: {user[0].currentScore}</p>
          <p>Plan: {user[0].plan}</p>
        </div>
        <div className="col-md-4">
          <p><strong>Endorsements:</strong> None </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <p><strong>Courses:</strong> {user[0].courses?user[0].courses.join(' '):"None"}</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ProfilePage;
