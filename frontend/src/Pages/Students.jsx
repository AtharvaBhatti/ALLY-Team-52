import { Icon } from "@mui/material";
import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar.jsx";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip} from "react-bootstrap";
import Navbar from "../Components/Navbar.jsx";
import {
    faGraduationCap,
    faUser,
    faStar,
    faCode,
    faMessage,
    faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import dummyuser from "../assets/images/profile.png";

// Dummy data
const studentsData = [
    {
        id: 1,
        name: "Goldy Rogers",
        email: "goldyrogers@gmail.com",
        batch: "2021-2025",
        branch: "Computer Science",
        allScore: 95,
        techStack: ["Angular", "Dyjango", "NextJs"],
    },
    {
        id: 2,
        name: "Nishant",
        email: "nishantVerma@gmail.com",
        batch: "2019-2023",
        branch: "Data Science",
        allScore: 95,
        techStack: ["Web", "Android", "iOS", "Machine Learning"],
    },
    {
        id: 3,
        name: "Ojus",
        email: "goelojus@gmail.com",
        batch: "2021-2025",
        branch: "Computer Science",
        allScore: 95,
        techStack: ["Web", "Android", "iOS"],
    },
    {
        id: 4,
        name: "Saurav",
        email: "jhasaurav@gmail.com",
        batch: "2021-2025",
        branch: "Mechanical Science",
        allScore: 95,
        techStack: ["Matlab", "Android", "Swift", "Linux"],
    },
    {
        id: 5,
        name: "Goldy Nishchay",
        email: "nishchay@gmail.com",
        batch: "2021-2025",
        branch: "Biological Science",
        allScore: 95,
        techStack: ["MongoDB", "Node", "iOS"],
    },
    {
        id: 6,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS", "Python"],
    },
    {
        id: 7,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Kotlin", "iOS"],
    },
    {
        id: 8,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS", "Java"],
    },
    {
        id: 9,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS", "Sql", ],
    },
    {
        id: 10,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS, React",],
    },
    {
        id: 11,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS", "React", "Angular", "Vue"],
    },
    {
        id: 12,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS", "React"],
    },
    {
        id: 13,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS"],
    },
    {
        id: 14,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS"],
    },
    {
        id: 15,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS"],
    },
    {
        id: 16,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2024",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS"],
    },
    {
        id: 17,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2020-2024",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS"],
    },
    {
        id: 18,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS"],
    },
    {
        id: 19,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS"],
    },
    {
        id: 20,
        name: "Omendra",
        email: "om369@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 95,
        techStack: ["Arduino", "Android", "iOS"],
    },
    {
        id: 21,
        name: "Sudeep",
        email: "sudeep@gmail.com",
        batch: "2021-2025",
        branch: "Electrical Science",
        allScore: 99,
        techStack: ["Arduino", "Android", "iOS"],
    },
    // Add more students as needed
];

// import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearch, setCurrentPage}) => (
    <div className="flex items-center h-16 mx-3 my-3">
        <input
            type="text"
            placeholder="Search..."
            style={{ '::placeholder': { color: "#0065C1" } }}
            className="m-2 p-2 pl-10 pr-4 border-gray-300 w-full border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
            }}
        />
        <SearchIcon className="absolute m-4" style={{ color: "#0065C1" }} />
        {/* <FilterButton /> */}
    </div>
);

const FilterButton = () => (
    <button className="m-2 p-2 bg-blue-500 text-white rounded">Filter</button>
);
function getRandomColor() {
    let r, g, b;
    let brightness;

    do {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        brightness = Math.sqrt(
            0.299 * Math.pow(r, 2) + 0.587 * Math.pow(g, 2) + 0.114 * Math.pow(b, 2)
        );
    } while (brightness < 70 || brightness > 200); // Avoid colors that are too dark or too light

    return `rgba(${r}, ${g}, ${b}, 1)`;
}

function getLowerIntensityColor(color) {
    const rgba = color.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
    const lowerIntensityColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 0.1)`;
    return lowerIntensityColor;
}

function getBrightness(color) {
    const rgb = color.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
    return Math.sqrt(
        0.299 * Math.pow(rgb[0], 2) +
            0.587 * Math.pow(rgb[1], 2) +
            0.114 * Math.pow(rgb[2], 2)
    );
}


const StudentRow = ({ student }) => (

    <tr className="border-b-2 border-gray-200  m-14 " onClick={()=>console.log(student.name)}>
        <td className="p-2 flex items-center justify-start font-inter font-normal">
            <img
                src={dummyuser}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-2"
            />
            <div className="flex-col justify-start text-left">
                <span style={{ color: "#0065C1", fontSize: "16px", textAlign: "left" }}>
                    {student.firstName+" "+student.lastName}
                </span>
                <br />
                <span style={{ color: "#5E5873BF", fontSize: "14px" }}>
                    {student.email}
                </span>
            </div>
        </td>
        <td className="p-2 flex-col justify-center text-left items-center">
            <span
                style={{ color: "#0065C1", fontSize: "16px", textAlign: "left" }}
                className="font-inter font-normal flex  justify-center"
            >
                {student.institute}
            </span>
            <br />
            <span
                style={{ color: "#5E5873BF", fontSize: "14px" }}
                className="font-inter font-normal flex  justify-center"
            >
                {student.branch}
            </span>
        </td>
        <td className="p-2 flex justify-center">
            <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: "#0065C1" }}
            >
                {student.currentScore}
            </div>
        </td>
        <td className="p-2">
      {student.techStack.slice(0, 2).map((tech, index) => {
        const color = getRandomColor();
        const backgroundColor = getLowerIntensityColor(color);
        return (
          <span
            key={index}
            className="rounded-md p-1 mr-2 font-inter font-bold"
            style={{ color: color, backgroundColor: backgroundColor }}
          >
            {tech}
          </span>
        );
      })}

      {student.techStack.length > 2 && (
        <OverlayTrigger
          trigger="hover"
          placement="top"
          overlay={
            <Tooltip id="techStackTooltip">
              <div className="tooltip-container" 
              style={{                
                padding: '10px', // Adjust padding as needed
                border: '1px solid #ccc', // Adjust border styles as needed
                borderRadius: '5px', // Adjust border radius as needed
                backgroundColor: '#fff', // Adjust background color as needed
                whiteSpace: 'normal', // Prevents tooltip from breaking onto multiple lines
                // wordWrap: 'break-word', // Prevents tooltip from breaking onto multiple lines
                width: '230px', // Adjust width as needed
                lineHeight: '2.0', // Adjust line height as needed
                overflowWrap: 'anywhere', // Prevents tooltip from breaking onto multiple lines
              }}
              >
                {student.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-md p-1 mr-2 font-inter font-bold"
                    style={{
                      color: getRandomColor(),
                      backgroundColor: getLowerIntensityColor(
                        getRandomColor()
                      ),
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Tooltip>
          }
        >
          <span
            className="rounded-full p-1 font-inter font-bold"
            style={{
              backgroundColor: getLowerIntensityColor(getRandomColor()),
              color: 'black',
            }}
          >
            +{student.techStack.length - 2}
          </span>
        </OverlayTrigger>
      )}
    </td>
        <td className="p-2">
             < FontAwesomeIcon icon = {faMessage} color = "#0065C1" className = "" />
                </td>
    </tr>
);

function StudentTable() {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(8);



    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/all_students/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
    
                const data = await response.json();
    
                setStudents(data);
                // console.log(data, 'server'); // Log the fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    
        fetchData();
    }, []);

    const filteredStudents = students.filter((student) => {
        const searchWords = search.toLowerCase().split(" ");
        return searchWords.every((word) =>
            student.firstName.toLowerCase().includes(word) ||
            student.lastName.toLowerCase().includes(word) ||
            student.techStack.some((tech) => tech.toLowerCase().includes(word)) ||
            student.branch.toLowerCase().includes(word) ||
            student.email.toLowerCase().includes(word) ||
            student.currentScore.toString().includes(word) ||
            student.institute.toLowerCase().includes(word)
        );
    });

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
    <Navbar /> 
        <div className="flex">
            <div className="sideBar w-1/6 relative">
                <Sidebar />
            </div>
            <div className="flex flex-col flex-grow items-center w-3/4 mx-3 my-3">
                <div className="w-full mr-10">
                <SearchBar setSearch={setSearch} setCurrentPage={setCurrentPage} />
                </div>
                {/* <FilterButton /> */}
                <div className="w-full mr-10 shadow-md shadow-white rounded-3xl bg-white pl-10 pr-10 pb-4">
                    <table className="m-2  text-sm divide-y w-full ">
                        <thead className=" h-12">
                            <tr className="border-b-2 border-gray-200 text-center">
                                <th className="p-2 font-inter font-normal text-sm">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        color="#0065C1"
                                        className="mr-2"
                                    />{" "}
                                    Name
                                </th>
                                <th className="p-2 font-inter font-normal text-sm">
                                    <FontAwesomeIcon
                                        icon={faUniversity}
                                        color="#0065C1"
                                        className="mr-2"
                                    />
                                    Institue/ Branch
                                </th>
                                <th className="p-2 font-inter font-normal text-sm">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        color="#0065C1"
                                        className="mr-2"
                                    />
                                    Ally Score
                                </th>
                                <th className="p-2 font-inter font-normal text-sm">
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        color="#0065C1"
                                        className="mr-2"
                                    />
                                    Tech Stack
                                </th>
                                <th className="p-2 font-inter font-normal text-sm">
                                    <FontAwesomeIcon
                                        icon={faMessage}
                                        color="#0065C1"
                                        className="mr-2"
                                    />
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="p-14 text-center" >
                            {currentItems.map((student) => (
                                <StudentRow key={student.id} student={student} />
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: Math.ceil(filteredStudents.length / itemsPerPage) }, (_, i) => (
                            <button
                                key={i}
                                className={`mx-1 px-2 py-1 rounded ${
                                    currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                                }`}
                                onClick={() => paginate(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default StudentTable;
