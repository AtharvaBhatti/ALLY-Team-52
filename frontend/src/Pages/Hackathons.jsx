import React, { useState, useEffect } from "react";
import { hackathon } from "../assets/images";
import Sidebar from "../Components/Sidebar.jsx";
import ScrollDialog from '../Components/Seminar_Team_Popup.jsx';

const Hackathons = () => {
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
  const title='hey';
  const description='hshxhdx';
  const date='12-12-1122';



  return (
    <div className='flex '>
      <div className="w-[250px] z-1 ">
        <Sidebar />
      </div>
      <div className="flex-1 md:px-16 md:text-justify text-center px-2">
        <div className="md:mx-8 mx-2 my-2 md:my-8">
          {/* Your existing code */}
        </div>
        <div className="md:flex justify-center">
          <div className="md:mx-12 md:w-1/4 mx-auto">
            {/* Your existing code */}
          </div>
          <div className="md:w-3/4 md:mt-0 mt-36">
            {/* Your existing code */}
          </div>
        </div>
        <div className="my-24 mx-4">
          <div className="flex justify-between">
            <div>
              <span className="text-zinc-800 text-2xl font-semibold font-inter">
                
              </span>
              <span className="text-sky-600 text-2xl font-semibold font-inter">
                {" "}
                Hackathons

              </span>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                Create Team
              </button>

            </div>
          </div>

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
      </div>
      {isDialogOpen && (
                <ScrollDialog onClose={handleCloseDialog} seminarDetails={{ title, description, date }} />
            )}
    </div>

  );
};

export default Hackathons;
