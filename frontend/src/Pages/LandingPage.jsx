import React, { useState } from 'react';
import LoginForm from '../Components/Form';




const LandingPage = () => {
  
  return (
    <div className='bg-[#F3F6FF] m-0 p-0 min-h-screen'>
      <div className='flex justify-between mx-4 md:mx-16 py-8'>
        <div>
          <div><span className="text-black my-2 text-[25px] font-semibold font-inter">Your </span><span className="text-black text-[25px] font-normal font-['Nova Script']">Private</span><span className="text-black text-[25px] font-semibold font-inter"> Social Media</span></div>
          <div className='border-sky-600 my-2 bg-blue-100 w-fit px-4 py-2 border-l-4'>Only for your institute.</div>
          <div className="text-black my-2 text-opacity-50 text-lg font-semibold font-inter">Connect, Grow, Learn</div>
          <div className="text-sky-600 my-2 bg-blue-100 rounded-lg w-fit px-4 py-2 text-sm font-semibold font-inter leading-tight">Contact Us</div>
        </div>
        <div className='flex gap-8'>
          <div>
            <LoginForm/>
          </div>
          <div>
            <div className="flex-[1] my-2 bg-white rounded-[13px] p-6 flex-col justify-start items-start gap-4">
              <div className="self-stretch bg-sky-600 bg-opacity-25 rounded-[5px] p-1 flex justify-center items-center gap-3">
                <div className="text-sky-600 w-fit text-[11px] font-bold font-inter">FACT</div>
              </div>
              <div>
                <span className="text-sky-600 text-[15px] font-semibold font-inter">Making connections is</span>
                <span className="text-sky-600 text-[15px] font-black font-inter"> <br />important.</span>
              </div>
              <div className="text-sky-600 text-xs font-medium font-inter">We at Ally will help you in ensuring <br />you do not lose any connection.</div>
            </div>

              {/* Card 2 */}
              <div className="flex-[1] my-2 bg-white rounded-[13px] p-6 flex-col justify-start items-start gap-4">
                
                  <div className="text-sky-600 text-[11px] font-bold font-inter">Upskill yourself</div>
                
                <div>
                  <span className="text-sky-600 text-[15px] font-semibold font-inter">with our Ai based</span>
                  <span className="text-sky-600 text-[15px] font-black font-inter"> <br />Course Recommendations</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex-[1] my-2 bg-white rounded-[13px] p-6 flex-col justify-start items-start gap-4">
                
                  <div className="text-sky-600 text-[11px] font-bold font-inter">Get Industry Experience</div>
                
                <div>
                  <span className="text-sky-600 text-[15px] font-semibold font-inter">in projects mentored by</span>
                  <span className="text-sky-600 text-[15px] font-black font-inter"> <br />your Institute Alumnus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};



export default LandingPage
