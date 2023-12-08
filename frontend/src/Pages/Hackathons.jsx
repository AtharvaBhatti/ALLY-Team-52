import React, { useState, useEffect } from "react";
import { hackathon } from "../assets/images";

const Hackathons = () => {
  const [hackathonData, setHackathonData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('http://127.0.0.1:8000/get_hackathon/IIT%20Bhilai/') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setHackathonData(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(hackathonData)
  }, []);


  return (
    <div className="md:px-16 md:text-justify text-center px-2">
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
        <span className="text-zinc-800 text-2xl font-semibold font-inter">
          Past
        </span>
        <span className="text-sky-600 text-2xl font-semibold font-inter">
          {" "}
          Hackathons
        </span>
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
  );
};

export default Hackathons;
