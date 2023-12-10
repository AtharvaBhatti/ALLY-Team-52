import React, { useState, useEffect } from "react";
import { filter } from '../assets/images';
import Posts from '../Components/Posts';
import Sidebar from "../Components/Sidebar.jsx";
import { hackathon } from "../assets/images";
import ScrollDialog from '../Components/Team_Popup.jsx';

const FeaturedPosts = ({ isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 ${isSelected ? 'border-b-4 border-blue-500' : ''
      }`}
  >
    Featured Posts
  </div>
);

const Hackathons = ({ isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 ${isSelected ? 'border-b-4 border-blue-500' : ''
      }`}
  >
    Hackathons
  </div>
);

const ListedProjects = ({ isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 ${isSelected ? 'border-b-4 border-blue-500' : ''
      }`}
  >
    Listed Projects
  </div>
);

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const filterOptions = ['Next', 'React', 'Github'];
  const [selectedTab, setSelectedTab] = useState('Featured Posts');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (option) => {
    setFilterBy(option);
  };

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const [hackathonData, setHackathonData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('http://127.0.0.1:8000/get_hackathon/IIT%20Bhilai/') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setHackathonData(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(hackathonData)
  }, []);
  const title = 'hey';
  const description = 'hshxhdx';
  const date = '12-12-1122';

  return (
    <div className='flex '>
      <div className="w-[250px] z-1 ">
        <Sidebar />
      </div>
      <div className='flex-1'>
        <div className='bg-[#F3F6FF]  m-0 p-0 min-h-fit'>

          <div className='flex flex-col justify-center mx-2 md:mx-16 py-8 '>
            <div className='flex z-0 space-x-4 items-center mb-4'>
              {/* Search Input */}
              <input
                type='text'
                placeholder='Search'
                value={searchTerm}
                onChange={handleSearchChange}
                className='p-3 relative border placeholder:text-blue-500 placeholder:font-bold w-full border-gray-300 rounded-full pl-10'
              />

              <CustomDropdown
                options={filterOptions}
                value={filterBy || 'Filters'}
                onChange={handleFilterChange}
              />
            </div>

            {/* Tabs */}
            <div className='flex w-fit border-b-2 border-black space-x-4'>
              <FeaturedPosts
                isSelected={selectedTab === 'Featured Posts'}
                onClick={() => handleTabChange('Featured Posts')}
              />
              <Hackathons
                isSelected={selectedTab === 'Hackathons'}
                onClick={() => handleTabChange('Hackathons')}
              />
              <ListedProjects
                isSelected={selectedTab === 'Listed Projects'}
                onClick={() => handleTabChange('Listed Projects')}
              />
            </div>

            {/* Content based on the selected tab */}
            {selectedTab === 'Featured Posts' && (
              <div className='my-4'>
                <Posts />
              </div>
            )}
            {selectedTab === 'Hackathons' && (
              <div className='mt-4'>
              
              <div className="md:flex md:gap-6 md:my-8 my-8 mb-40 mx-8">
            {/* Display hackathonData */}
            {hackathonData.map((event) => (
              <div key={event.startDate} className="md:w-[320px] w-full mb-8 md:mb-0">
                <div className="h-[250px] shadow-lg">
                  <img
                    src={hackathon}
                    alt=""
                    className="h-[250px] w-full object-cover"
                  />
                </div>
                <div className="md:flex justify-center gap-4 py-4 shadow-lg rounded-lg bg-white">
                  <div>
                    <div className="text-sky-600 text-xl font-bold font-inter">
                      {new Date(event.startDate).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                    <div className="text-black text-3xl font-bold font-inter">
                      {new Date(event.startDate).getDate()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sky-600 text-[20px] font-bold font-inter">
                      {event.oneLiner}
                    </div>
                    <div className="text-neutral-600 text-[15px] font-normal font-inter">
                      {event.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
              </div>
            )}
            {selectedTab === 'Listed Projects' && (
              <div className='mt-4'>Content for Listed Projects</div>
            )}
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
    <div className='relative'>
      <div
        onClick={handleToggleDropdown}
        className='flex items-center cursor-pointer'
      >
        {/* Filter Symbol */}
        <img src={filter} className='mr-2 h-6 w-6' />
        {/* Selected Text */}
        <div>{value}</div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className='absolute mt-2 z-50 bg-white border border-gray-300 rounded'>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionSelect(option)}
              className='p-4 cursor-pointer hover:bg-gray-200'
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
