import React, { useState } from 'react'
import { filter } from '../../assets/images';
import Sidebar from '../../Components/Sidebar.jsx';
import './UpskillPage.css'
import { useNavigate } from "react-router-dom";
import UpskilBigCards from '../../Components/Upskill/UpskillBigCards.jsx'
import UpskilSmallCards from '../../Components/Upskill/UpskillSmallCards.jsx'

const UpskillPage = ({tag}) => {
  const [filterBy, setFilterBy] = useState('');
  const filterOptions = ['Next', 'React', 'Github'];
  const handleFilterChange = (option) => {
    setFilterBy(option);
  };
  const nav = useNavigate();
    return (
        <div className='upskillPage'>
            <div className="sideBar">
                <Sidebar />
            </div>
            <div className="upskillMain">
            <div className='flex justify-between mx-4 md:mx-16 py-8'>
              <div>
                  <div><span className="font-inter upskillHeading">Specific courses tailored for you</span></div>
                  <div><span className="font-inter upskillSubheading1">Recommended </span><span className="font-inter upskillSubheading2">Course</span></div>
              </div>
              <div>
                  <CustomDropdown
                        options={filterOptions}
                        value={filterBy || 'Filters'}
                        onChange={handleFilterChange}
                        className="upskillFilter"
                    />
              </div>
            </div>
            <div className='upskill-middleSection'>
              <div className="Upskill-cards-container">
                <UpskilBigCards />
                <UpskilBigCards />
                <UpskilBigCards />
              </div>
            </div>
            <div className='justify-between mx-4 md:mx-16 py-8'>
              <span className="font-inter upskillSubheading1 upskillOngoing">Ongoing </span><span className="font-inter upskillSubheading2 upskillOngoing">Course</span>
            </div>
              <div className='upskill-middleSection'>
                <div className="Upskill-cards-container">
                  <UpskilSmallCards />
                  <UpskilSmallCards />
                  <UpskilSmallCards />
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
      <div className='relative upskillFilter'>
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

export default UpskillPage;
