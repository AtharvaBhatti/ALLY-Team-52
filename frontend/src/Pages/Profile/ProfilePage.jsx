import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar.jsx";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';

const ProfilePage = ({ tag }) => {
  const user = {
    profilePicture: 'path-to-profile-picture.jpg',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '01/01/1990',
    email: 'john.doe@example.com',
    mobileNumber: '123-456-7890',
    about: 'A passionate individual with diverse skills...',
    type: 'Student',
    institute: 'Example University',
    yearOfPassing: 2022,
    branch: 'Computer Science',
    yearsOfExperience: 3,
    company: 'Tech Co.',
    currentScore: 95,
    plan: 'Premium',
    endorsements: 10,
    courses: ['React Basics', 'Node.js Fundamentals', 'Bootstrap Mastery'],
  };
//   useEffect(() => {
//     const apiUrl = "http://localhost:8000/course_list/";

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setcourses(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

// useEffect(() => {
//   const apiUrl = "http://localhost:8000/view_userprofile/1/";

//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       try {
//         // Parse the JSON string in the 'courses' property
//         const coursesArray = JSON.parse(data.courses);

//         // Assuming coursesArray is an array of objects with a 'courseId' property
//         const courseIds = coursesArray.map((course) => course.courseId);

//         setregcourses(courseIds);
//         console.log(courseIds);
//       } catch (error) {
//         console.error("Error parsing JSON:", error);
//       }
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// }, []);

  return (
    <div className="md:mt-4 flex">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="container mt-5 profile">
      <div className="row">
        <div className="col-md-4">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="Profile" className="img-fluid rounded-circle" style={{ width: '150px' }} />
        </div>
        <div className="col-md-8">
          <h2 style={{marginLeft: '5vh', marginBottom: '1vh'}}>{`${user.firstName} ${user.lastName}`}</h2>
          <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile Number:</strong> {user.mobileNumber}</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6" style={{ marginBottom: '1vh' }}>
          <h4><strong>About Me:</strong></h4>
          <p>{user.about}</p>
        </div>
        <div className="col-md-6">
          <h4><strong>Education</strong></h4>
          <p>Type: {user.type}</p>
          <p>Institute: {user.institute}</p>
          <p>Year of Passing: {user.yearOfPassing}</p>
          <p>Branch: {user.branch}</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4" style={{marginBottom: '1vh'}}>
          <h4><strong>Work Experience</strong></h4>
          <p>Years of Experience: {user.yearsOfExperience}</p>
          <p>Company: {user.company}</p>
        </div>
        <div className="col-md-4" style={{marginBottom:'1vh'}}>
          <h4><strong>Other Details</strong></h4>
          <p>Current Score: {user.currentScore}</p>
          <p>Plan: {user.plan}</p>
        </div>
        <div className="col-md-4">
          <p><strong>Endorsements:</strong> {user.endorsements}</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <p><strong>Courses:</strong> {user.courses.join(', ')}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
