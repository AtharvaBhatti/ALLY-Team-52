import React, { useState } from 'react'
import { filter } from '../../assets/images';
import Sidebar from '../../Components/Sidebar.jsx';
import ForumCard from '../../Components/Forum/ForumCard.jsx';
import './ForumPage.css'
import ForumRightBar from '../../Components/Forum/ForumRightBar.jsx';
const ForumPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const filterOptions = ['Next', 'React', 'Github'];
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (option) => {
    setFilterBy(option);
  };
    return (
        <div className='forumPage'>
            <div className="sideBar">
                <Sidebar />
            </div>
            <div className="forumMain">
              <div>
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
                </div>
            
            <div className='middleSection'>
              <div className="card">
                <ForumCard />
                <ForumCard />
                <ForumCard />
              </div>
              <div className="forumRightBar">
                  <ForumRightBar/>
              </div>
            </div>
            </div>
        </div>
    )
}

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

export default ForumPage;
