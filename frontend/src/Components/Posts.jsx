import React, { useState } from "react";
import { articles, courses, projects } from "../assets/constants";
import { code } from "../assets/images";
import { FaRobot } from 'react-icons/fa';
const Posts = () => {
  const [showModal, setShowModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddMember = () => {
    // Add the searched user to the team
    // You might want to fetch the user details based on the searchInput
    if (searchInput.trim() !== "") {
      setTeamMembers([...teamMembers, searchInput]);
      setSearchInput("");
    }
  };

  const handleGenerateTeam = () => {
    // Simulate AI recommended team generation
    const recommendedTeam = ["Raj Mohommad", "Sonal Gupta", "Pradeep Fatehpuria", "Shivam Malpani"];
    setTeamMembers(recommendedTeam);
  };

  return (
    <div className="">
      <div className="md:flex justify-between">
        <div className="bg-white md:w-3/4 rounded-2xl">
          {articles.map((article) => (
            <div className="p-4 md:border-none border-b-2 border-gray-400">
              <div className="md:flex justify-between">
                <div className="ml-4">
                  <div className="bg-[#0085FF1F] align-middle flex gap-4 px-1 rounded-full w-fit">
                    <img
                      src={article.authorimg}
                      alt="Article Image"
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="text-neutral-700 text-sm md:text-[15px] py-2 font-semibold">
                      {article.author}
                      <span className="text-center mx-4 text-sky-600 text-sm md:text-[12px] font-bold uppercase">
                        ALUMNI
                      </span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <div className="font-medium my-1 text-gray-500 text-sm md:text-xl">
                    {article.title}
                  </div>

                  {/* Article Author */}
                  <div className="text-sm text-gray-500">
                    {article.description}
                  </div>
                </div>
                <div className="mx-4">
                  {/* Add margin-bottom to the post image */}
                  <img
                    src={article.postimage}
                    className="md:w-[200px] w-full h-full md:h-[120px] rounded-none md:rounded-2xl mb-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/4 my-6 md:my-0 mx-4 text-center">
          <div>
            <div class="text-gray-600 text-base font-normal">
              Recommended Courses
            </div>
            <div className="bg-white text-left rounded-3xl my-4 px-4 py-2">
              {courses.map((course) => (
                <div className="flex mx-4 my-2 justify-between">
                  <img
                    src={course.courseimg}
                    alt="Course Image"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="text-sky-600 text-lg mx-4 text-left font-medium hover:text-sky-800 hover:underline cursor-pointer">
                    {course.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div class="text-gray-600 text-base font-normal">
              Recommended Projects
            </div>
            <div className="bg-white rounded-3xl my-4 px-4 py-2">
              {projects.map((project) => (
                <div className="flex mx-2 my-2">
                  <img
                    src={code}
                    alt="Course Image"
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="md:mx-2">
                    <div onClick={toggleModal} className="text-sky-600 text-left text-lg mx-4 font-medium hover:text-sky-800 hover:underline cursor-pointer">
                      {project.title}
                    </div>
                    <div className="text-s mx-4 text-left font-medium">
                      {project.tag.split(", ").map((word, index) => (
                        <span key={index} className="px-1 py-1 mx-1 rounded-lg bg-gray-300 text-gray-500 text-s">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {showModal && (
              <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg p-8">
                  <h2 className="text-xl font-bold mb-4">Create a Team</h2>
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search for team members..."
                    className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                  />
                  <button
                    onClick={handleAddMember}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Add Member
                  </button>
                  <button
                    onClick={handleGenerateTeam}
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 relative overflow-hidden"
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50"></span>
                    <span className="relative z-10">
                      <FaRobot className="inline-block mr-2 font-extrabold" /> AI Recommended Team
                    </span>
                  </button>

                  {/* Clear Team Button */}
                  <button
                    onClick={() => setTeamMembers([])} // Clears the team members
                    className="bg-red-500 text-white px-4 py-2 rounded mt-4 mr-2 ml-2"
                  >
                    Clear Team
                  </button>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Team Members:</h3>
                    <ul>
                      {teamMembers.map((member, index) => (
                        <li key={index}>{member}</li>
                      ))}
                    </ul>
                  </div>
                  <button onClick={toggleModal} className="mt-4 text-blue-500">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
