import React from "react";
import { hackathon } from "../assets/images";

const Hackathons = () => {
    const events = Array.from({ length: 5 }, (_, index) => index + 10);
  return (
    <div className="md:px-16 md:text-justify text-center px-2">
      <div className="md:mx-8 mx-2 my-2 md:my-8">
        <span className="text-zinc-800 text-2xl font-semibold font-inter">
          Ongoing
        </span>
        <span className="text-sky-600 text-2xl font-semibold font-inter">
          {" "}
          Hackathons
        </span>
      </div>
      <div className="md:flex justify-center">
        <div className="md:mx-12 md:w-1/4 mx-auto">
          <div className="h-[250px] md:mx-2 mx-auto w-[320px]">
            <div>
              <img src={hackathon} alt="" className="h-[250px] w-[320px]" />
            </div>
            <div className="flex justify-center gap-8 py-4 rounded-lg shadow-lg bg-white">
              <div>
                <div class="text-sky-600 text-xl font-bold font-inter">APR</div>
                <div class="text-black text-3xl font-bold font-inter">14</div>
              </div>
              <div>
                <div class="text-sky-600 text-[20px] font-bold font-inter">
                  Tutorial & Hackathon
                </div>
                <div class="text-neutral-600 text-[15px] font-normal font-inter">
                  Sessions conducted by our <br />
                  mentors for community.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-3/4 md:mt-0 mt-36">
          <div className="md:my-12">
            <div className="text-sky-600 text-[25px] font-bold">
              Hackathon & Tutorial
            </div>
            <div className="text-neutral-600 text-sm md:my-2 md:text-[20px]">
              Lorem ipsum dolor sit amet consectetur. Pharetra risus praesent
              suscipit nullam a pharetra quisque. Tortor risus feugiat eleifend
              pellentesque et. Tellus pharetra ultricies duis sit mollis vitae
              felis sed scelerisque. Facilisis faucibus adipiscing tincidunt
              tristique ultrices. Lacus mi purus velit sed maecenas dui lectus
              eget tortor.
            </div>
            <div className="flex md:justify-normal justify-center my-8 gap-8">
              <div class="text-white w-fit px-4 py-2 rounded-xl bg-blue-400 text-xl font-semibold font-inter">
                <a href="#" className="">
                  Register Now
                </a>
              </div>
              <div>
                <div class="text-sky-600 w-fit px-4 py-2 rounded-xl bg-blue-200 text-xl font-semibold font-inter">
                  <a href="#" className="">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
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
          {events.map((event) => (
            <div key={event} className="md:w-[320px] w-full mb-8 md:mb-0">
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
                    APR
                  </div>
                  <div className="text-black text-3xl font-bold font-inter">
                    {event}
                  </div>
                </div>
                <div>
                  <div className="text-sky-600 text-[20px] font-bold font-inter">
                    Tutorial & Hackathon
                  </div>
                  <div className="text-neutral-600 text-[15px] font-normal font-inter">
                    Sessions conducted by our <br />
                    mentors for the community.
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
