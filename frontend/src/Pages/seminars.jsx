import React, { useState, useEffect } from "react";
import { filter } from "../assets/images";
import Sidebar from "../Components/Sidebar.jsx";
import "./seminars.css";
import { useNavigate } from "react-router-dom";
import ForumRightBar from "../Components/Forum/ForumRightBar.jsx";
import SeminarListItem from "../Components/seminarListCard.jsx";

const Seminars = () => {
  const seminars = [
    {
      title: "Seminar 1",
      description: "Description for Seminar 1",
      date: "January 15, 2024",
      imageUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church%2C-church-conference%2C-new-year-eve-servi-design-template-ce92388ba63492622a656f0b29ea2449_screen.jpg?ts=1694613650",
    },
    {
      title: "Seminar 2",
      description: "Description for Seminar 2",
      date: "February 20, 2023",
      imageUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church%2C-church-conference%2C-new-year-eve-servi-design-template-ce92388ba63492622a656f0b29ea2449_screen.jpg?ts=1694613650",
    },
    {
      title: "Seminar 3",
      description: "Description for Seminar 2",
      date: "February 20, 2024",
      imageUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church%2C-church-conference%2C-new-year-eve-servi-design-template-ce92388ba63492622a656f0b29ea2449_screen.jpg?ts=1694613650",
    },
    {
      title: "Seminar 4",
      description: "Description for Seminar 2",
      date: "December 10, 2023",
      imageUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church%2C-church-conference%2C-new-year-eve-servi-design-template-ce92388ba63492622a656f0b29ea2449_screen.jpg?ts=1694613650",
    },
    {
      title: "Seminar 5",
      description: "Description for Seminar 2",
      date: "February 20, 2023",
      imageUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church%2C-church-conference%2C-new-year-eve-servi-design-template-ce92388ba63492622a656f0b29ea2449_screen.jpg?ts=1694613650",
    },
    // Add more seminar data as needed
  ];

  const [seminarFilter, setSeminarFilter] = useState("All");

  const filteredSeminars = seminars.filter((seminar) => {
    if (seminarFilter === "All") {
      return true; // Show all seminars if "All" is selected
    } else if (seminarFilter === "Ongoing") {
      // Add logic to filter ongoing seminars based on date comparison (e.g., ongoing seminars have a date in the past)
      // Replace the below condition with your logic
      var date = new Date(seminar.date);
      var year_given = date.getFullYear();
      var month_given = date.getMonth()+1;
      var day_given = date.getDate();
      var currentDate = new Date();
      console.log(date);
      console.log("given Year:", year_given);
      console.log("Given Month:", month_given);

      // Get the current year
      var currentYear = currentDate.getFullYear();

      // Get the current month (zero-based index, so add 1 to get the actual month)
      var currentMonth = currentDate.getMonth() + 1;
      var currentDay = currentDate.getDate();

      // Display the current year and month
      console.log("Current Year:", currentYear);
      console.log("Current Month:", currentMonth);

      return currentYear === year_given && currentMonth === month_given && day_given === currentDay;
    } else if (seminarFilter === "Completed") {
      // Add logic to filter completed seminars based on date comparison (e.g., completed seminars have a date in the past)
      // Replace the below condition with your logic
      return new Date(seminar.date) < new Date();
    } else if (seminarFilter === "Upcoming") {
      // Add logic to filter upcoming seminars based on date comparison (e.g., upcoming seminars have a date in the future)
      // Replace the below condition with your logic
      return new Date(seminar.date) > new Date();
    }
    return true;
  });

  return (
    <div>
      <div className="forumPage">
        <Sidebar />
        <div className=""></div>
        <div className="forumMain ">
          <div className="flex space-x-4 items-center mb-4 filtersButton ">
            <div className="text-[#0065C1] text-xl font-bold pb-3">
              Seminars
            </div>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search"
              className="p-3 relative border w-full border-gray-300 rounded-full pl-10"
            />
            <button onClick={() => setSeminarFilter("All")}>All</button>
            <button onClick={() => setSeminarFilter("Ongoing")}>Ongoing</button>
            <button onClick={() => setSeminarFilter("Completed")}>
              Completed
            </button>
            <button onClick={() => setSeminarFilter("Upcoming")}>
              Upcoming
            </button>

            {/* Custom Dropdown */}
          </div>

          <div className="grid grid-cols-4 gap-4">
            {filteredSeminars.map((seminar, index) => (
              <SeminarListItem
                key={index}
                title={seminar.title}
                description={seminar.description}
                date={seminar.date}
                imageUrl={seminar.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seminars;
