import React, { useState, useEffect } from "react";
import { filter } from "../../assets/images";
import Sidebar from "../../Components/Sidebar.jsx";
import "./ForumPage.css";
import { useNavigate } from "react-router-dom";
import ForumRightBar from "../../Components/Forum/ForumRightBar.jsx";
import ForumCards from "../../Components/Forum/ForumCards.jsx";

const ForumPage = ({ tag }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const filterOptions = ["Next", "React", "Github"];
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFilterChange = (option) => {
    setFilterBy(option);
  };

  const [activeTag, setActiveTag] = useState(tag);
  const nav = useNavigate();
  const handleTagClick = (tag) => {
    nav(`/uni1/forum/${tag}`);
  };

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/posts/1";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.results);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="forumPage">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="forumMain">
        <div className="flex space-x-4 items-center mb-4 filtersButton">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-3 relative border w-full border-gray-300 rounded-full pl-10"
          />

          {/* Custom Dropdown */}
          <CustomDropdown
            options={filterOptions}
            value={filterBy || "Filters"}
            onChange={handleFilterChange}
          />
        </div>

        <div className="page-forum-tags">
          {["New", "Hot", "Closed"].map((tag) => (
            <div
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`page-forum-tag ${activeTag === tag ? "active" : ""}`}
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="middleSection">
          <div className="Forum-cards">
            {loading ? <p>Loading...</p> : <ForumCards Posts={posts} />}
          </div>
          <div className="forumRightBar">
            <ForumRightBar />
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={handleToggleDropdown}
        className="flex items-center cursor-pointer"
      >
        {/* Filter Symbol */}
        <img src={filter} className="mr-2 h-6 w-6" alt="Filter" />
        {/* Selected Text */}
        <div>{value}</div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionSelect(option)}
              className="p-4 cursor-pointer hover:bg-gray-200"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default ForumPage;