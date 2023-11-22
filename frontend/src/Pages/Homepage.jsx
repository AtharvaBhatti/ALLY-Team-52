import React, { useState } from 'react';
import { filter } from '../assets/images';
import Posts from '../Components/Posts';

const FeaturedPosts = ({ isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 ${
      isSelected ? 'border-b-4 border-blue-500' : ''
    }`}
  >
    Featured Posts
  </div>
);

const Hackathons = ({ isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 ${
      isSelected ? 'border-b-4 border-blue-500' : ''
    }`}
  >
    Hackathons
  </div>
);

const ListedProjects = ({ isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 ${
      isSelected ? 'border-b-4 border-blue-500' : ''
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

  return (
    <div className='bg-[#F3F6FF] m-0 p-0 min-h-fit'>
      <div className='flex flex-col justify-center mx-4 md:mx-16 py-8'>
        <div className='flex space-x-4 items-center mb-4'>
          {/* Search Input */}
          <input
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={handleSearchChange}
            className='p-3 relative border w-full border-gray-300 rounded-full pl-10'
          />

          {/* Custom Dropdown */}
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
            <Posts/>
          </div>
        )}
        {selectedTab === 'Hackathons' && (
          <div className='mt-4'>Content for Hackathons</div>
        )}
        {selectedTab === 'Listed Projects' && (
          <div className='mt-4'>Content for Listed Projects</div>
        )}
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
        <img src={filter} className='mr-2 h-6 w-6'/>
        {/* Selected Text */}
        <div>{value}</div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className='absolute mt-2 bg-white border border-gray-300 rounded'>
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
