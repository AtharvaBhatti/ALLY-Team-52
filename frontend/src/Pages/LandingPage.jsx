import React, { useState } from 'react';
import LoginForm from '../Components/Form';
import './LandingPage.css'




const LandingPage = () => {
  
  return (
    <div className='bg-[#F3F6FF] m-0 p-0 min-h-screen'>
      <div className='LandingPage'>
        <div className="landingUp">

        
        <div className='Landing-Left'>
         <div className='Landing-Left-1'>
          <div><span className="text-black my-2 text-[35px] font-semibold font-inter">Your </span><span className="text-black text-[35px] font-normal font-['Nova Script']">Private</span><span className="text-black text-[35px] font-semibold font-inter"> Social Media</span></div>
          <div className='border-sky-600 my-2 bg-blue-100 w-fit px-4 py-2 border-l-4 text-[25px]'>Only for your institute.</div>
          <div className="text-black my-2 text-opacity-50 text-lg font-semibold font-inter text-[25px]">Connect, Grow, Learn</div>
          <div className="text-sky-600 my-2 bg-blue-100 rounded-lg w-fit px-4 py-4 text-sm font-semibold font-inter leading-tight"><i class="fas fa-comment px-2 "></i>Contact Us</div>
          </div>
          <div className='Landing-Left-2'>
            <LoginForm/>
          </div>
          
        </div>
        <div className='Landing-Right'>
          
          <div>
          <div className="flex-[1] my-2 bg-white rounded-[13px] p-8 flex-col justify-start items-start gap-4">
            <div className="text-container">
              <div className="bg-sky-600 bg-opacity-25 rounded-[5px] p-1 flex gap-3">
                <div className="text-sky-600 text-[11px] font-bold font-inter">FACT</div>
              </div>
            </div>
              <div>
                <span className="text-sky-600 text-[20px] font-semibold font-inter">Making connections is</span>
                <span className="text-sky-600 text-[20px] font-black font-inter"> <br />important.</span>
              </div>
              <div className="text-sky-600 text-s font-medium font-inter">We at Ally will help you in ensuring <br />you do not lose any connection.</div>
            </div>

              {/* Card 2 */}
              <div className="flex-[1] my-2 bg-white rounded-[13px] p-8 flex-col justify-start items-start gap-4">
                
                  <div className="text-sky-600 text-[20px] font-semibold font-inter"><i class="px-1 fas fa-chart-line"></i>Upskill yourself</div>
                
                <div>
                  <span className="text-sky-600 text-s font-medium font-inter">with our Ai based</span>
                  <span className="text-sky-600 text-s font-medium font-inter"> <br />Course Recommendations</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex-[1] my-2 bg-white rounded-[13px] p-8 flex-col justify-start items-start gap-4">
                
                  <div className="text-sky-600 text-[20px] font-semibold font-inter"><i class="px-1 fas fa-industry"></i>Get Industry Experience</div>
                
                <div>
                  <span className="text-sky-600 text-s font-medium font-inter">in projects mentored by</span>
                  <span className="text-sky-600 text-s font-medium font-inter"> <br />your Institute Alumnus</span>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="sponsors">
            <div className="text-sky-600 text-[30px] py-6 font-semibold font-inter justify-center flex  items-center">
              OUR SPONSORS
            </div>
            <div className="sponsorimg">

            
            <div className="sponsor">
              <img src="https://pngimg.com/uploads/cocacola_logo/cocacola_logo_PNG7.png" alt="" style={{height: "10vh", width: "auto"}}/>
            </div>
            <div className="sponsor">
              <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" style={{height: "10vh", width: "auto"}} alt="" />
            </div>
            <div className="sponsor">
              <img src="https://www.facebook.com/images/fb_icon_325x325.png"  style={{height: "10vh", width: "auto"}} alt="" />
            </div>
            <div className="sponsor">
              <img src="https://images.squarespace-cdn.com/content/v1/5a5dbe4632601eb31977f947/1629703651716-J8RVOTD1XO3SDINHP2RG/unnamed+%281%29.png" style={{height: "10vh", width: "auto"}} alt="" />
            </div>
            <div className="sponsor">
              <img src="https://www.pngall.com/wp-content/uploads/14/Zoom-PNG.png"style={{height: "10vh", width: "auto"}}  alt="" />
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};



export default LandingPage
