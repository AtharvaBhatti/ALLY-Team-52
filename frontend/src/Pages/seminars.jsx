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
            title: 'Seminar 1',
            description: 'Description for Seminar 1',
            date: 'January 15, 2023',
            imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church%2C-church-conference%2C-new-year-eve-servi-design-template-ce92388ba63492622a656f0b29ea2449_screen.jpg?ts=1694613650',
        },
        {
            title: 'Seminar 2',
            description: 'Description for Seminar 2',
            date: 'February 20, 2023',
            imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church%2C-church-conference%2C-new-year-eve-servi-design-template-ce92388ba63492622a656f0b29ea2449_screen.jpg?ts=1694613650',
        },
        {
            title: 'Seminar 3',
            description: 'Description for Seminar 2',
            date: 'February 20, 2023',
            imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church%2C-church-conference%2C-new-year-eve-servi-design-template-ce92388ba63492622a656f0b29ea2449_screen.jpg?ts=1694613650',
        },
        {
            title: 'Seminar 4',
            description: 'Description for Seminar 2',
            date: 'February 20, 2023',
            imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church%2C-church-conference%2C-new-year-eve-servi-design-template-ce92388ba63492622a656f0b29ea2449_screen.jpg?ts=1694613650',
        },
        {
            title: 'Seminar 5',
            description: 'Description for Seminar 2',
            date: 'February 20, 2023',
            imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/church%2C-church-conference%2C-new-year-eve-servi-design-template-ce92388ba63492622a656f0b29ea2449_screen.jpg?ts=1694613650',
        }
        // Add more seminar data as needed
    ];

    return (
        <div>
            <div className="forumPage">
                <Sidebar />
                <div className="">

                </div>
                <div className="forumMain ">

                    <div className="flex space-x-4 items-center mb-4 filtersButton">
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search"

                            className="p-3 relative border w-full border-gray-300 rounded-full pl-10"
                        />

                        {/* Custom Dropdown */}

                    </div >
                    <div className="text-[#0065C1] text-xl font-bold pb-3">
                        Seminars
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {seminars.map((seminar, index) => (
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
