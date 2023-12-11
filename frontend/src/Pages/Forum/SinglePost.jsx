import "./SinglePost.css";
import React, { useEffect, useState } from "react";
import { filter, posts, arrow, dummyuser } from "../../assets/images";
import Sidebar from "../../Components/Sidebar.jsx";
import CommentCard from "../../Components/Forum/CommentCards.jsx";
import "./ForumPage.css";
import ForumRightBar from "../../Components/Forum/ForumRightBar.jsx";
import "../../Pages/Forum/ForumPage.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SinglePost = () => {
  const location = useLocation();
  const { post } = location.state;
  
  console.log(post);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const filterOptions = ["Next", "React", "Github"];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (option) => {
    setFilterBy(option);
  };
  const navigate = useNavigate(); // Initialize useHistory
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div className="forumPage">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="forumMain">
        <div className="flex space-x-4 items-center mb-4">
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

        <div className="middleSection">
          <div class="SPF">
            <div className="SF-post-header">
              <div className="forum-back-arrow">
                <button onClick={handleGoBack} className="back-button">
                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
                <div
                  className="forum-three-dots"
                  onClick={toggleDropdown}
                  onBlur={closeDropdown}
                >
                  &#8942;
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 z-[100] mt-6 w-48 bg-white rounded shadow-lg">
                    <ul>
                      <li className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer">
                        Copy Link
                      </li>
                      <li className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer">
                        Share
                      </li>
                      <li
                        className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          // Add logout functionality
                        }}
                      >
                        Report User
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="forum-info-dots">
                <div className="forum-user-info">
                  <img src={dummyuser} alt="Post Image" class="forum-user-image"></img>
                  <div className="forum-user-details">
                    <div className="forum-user-name">{post.postedBy===4?"Ronit Roy":"Ashish Ranjan"}</div>
                    <div className="forum-last-seen">16 Hours Ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="SPForum-Content">
              <div class="SPForum-Heading">{post.postedBy===4?"My Experience at GSoC 2023 was incredible!!":"Got promoted to SDE - III at Google!!!"} </div>

              <p>{post.content}</p>
              {/* <img src={posts} alt="Post Image" class="SPForum-Image"></img> */}
            </div>

            <div class="forum-post-footer">
              <div className="forum-footer">
                {post?.tags && (
                  <div className="forum-tags">
                    {post.tags.map((tag, index) => (
                      <div className="forum-tag" key={index}>
                        {tag.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button class="SPForum-Vote-Button">
                <img src={arrow} className="arrow-img"></img> Vote{" "}
              </button>
            </div>

            <div className="forum-comments">
              <CommentCard postid={post.id} />
            </div>
            <div />
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
        <img src={filter} className="mr-2 h-6 w-6" />
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

export default SinglePost;
