import React from "react";
import Sidebar from "../Components/Sidebar.jsx";
import "./seminars.css";
import { useNavigate } from "react-router-dom";
import ForumRightBar from "../Components/Forum/ForumRightBar.jsx";
import SeminarListItem from "../Components/seminarListCard.jsx";

const Profile = () => {
  const user = {
    userType: "student", // or "alumni"
    name: "John Doe",
    profileImage: "https://imgs.search.brave.com/rWnYJ9Bu6GWYUGxTuWE2AoYNY3rbKNpL7AY-r3GyESA/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzNlL0Vp/bnN0ZWluXzE5MjFf/YnlfRl9TY2htdXR6/ZXJfLV9yZXN0b3Jh/dGlvbi5qcGcvNTEy/cHgtRWluc3RlaW5f/MTkyMV9ieV9GX1Nj/aG11dHplcl8tX3Jl/c3RvcmF0aW9uLmpw/Zw", // Replace with the actual image URL
    education: "Computer Science",
    experience: "Intern at XYZ Corp",
    courses: ["React", "Node.js", "Machine Learning"],
    // ... rest of the user data ...
  };

  const handleDM = () => {
    console.log("hello");
  };

  return (
    <div>
      <div className="forumPage">
        <Sidebar />
        <div className=""></div>
        <div className="forumMain p-6">
          {/* Profile Image and Name Section */}
          <div className="flex items-center mb-6">
            <img
              src={user.profileImage}
              alt="Profile"
              className="h-16 w-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-500">Student</p>
            </div>
          </div>

          {/* User Details */}
          <div>
            <h2 className="text-2xl font-bold">
              {user.userType === "student" ? "Student" : "Alumni"} Profile
            </h2>
            <p>Education: {user.education}</p>
            <p>Experience: {user.experience}</p>
            <p>Courses: {user.courses.join(", ")}</p>
          </div>

          {/* Option to DM */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
            onClick={handleDM}
          >
            Send DM
          </button>

                    
          <div className="mb-6">
            <h3 className="text-xl font-bold">Projects</h3>
            {user.userType === "student" ? (
              <>
                <p>Completed: {user.projects.student.completed.join(", ")}</p>
                <p>Upcoming: {user.projects.student.upcoming.join(", ")}</p>
                <p>Ongoing: {user.projects.student.ongoing.join(", ")}</p>
              </>
            ) : (
              <>
                <p>Completed: {user.projects.alumni.completed.join(", ")}</p>
                <p>Interested: {user.projects.alumni.interested.join(", ")}</p>
                <p>Ongoing: {user.projects.alumni.ongoing.join(", ")}</p>
              </>
            )}
          </div>
          {user.userType === "alumni" && (
            <div className="mb-6">
              <h3 className="text-xl font-bold">Mentoring Interests</h3>
              <p>{user.mentoringInterests.join(", ")}</p>
            </div>
          )}

          {/* Endorsed Profiles */}
          <div className="mb-6">
            <h3 className="text-xl font-bold">Endorsed Profiles</h3>
            <ul>
              {user.endorsedProfiles.map((profile, index) => (
                <li key={index}>{profile}</li>
              ))}
            </ul>
          </div>

          {/* ML Model Score and Feedback */}
          <div className="mb-6">
            <h3 className="text-xl font-bold">ML Model Score</h3>
            <p>{user.mlScore}</p>
            <h3 className="text-xl font-bold">Feedback</h3>
            <p>{user.feedback}</p>
          </div>

          {/* User Plan */}
          <div className="mb-6">
            <h3 className="text-xl font-bold">Plan</h3>
            <p>{user.plan}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
