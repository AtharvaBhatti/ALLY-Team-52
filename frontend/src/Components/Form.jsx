import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form className="w-[314px] h-[311px] relative bg-white rounded-[13px]" onSubmit={handleSubmit}>
      <div className="left-[23px] top-[64px] absolute flex-col justify-start items-start gap-[11px] inline-flex">
        <div className="text-sky-600 text-opacity-75 text-xs font-semibold font-inter">Email Address</div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-[259px] h-[34px] px-[9px] py-0.5 bg-blue-100 border-l-4 border-sky-600 justify-start items-center gap-2.5 inline-flex"
        />
        <div className="text-sky-600 text-opacity-75 text-xs font-semibold font-inter">Password</div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-[259px] h-[34px] px-[9px] py-0.5 bg-blue-100 border-l-4 border-sky-600 justify-start items-center gap-[121px] inline-flex"
        />
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="text-sky-600 text-opacity-75 text-[11px] font-semibold font-inter">Forgot Password?</div>
          <button type="submit" className="w-[85px] px-4 py-1 bg-gradient-to-r from-sky-600 to-sky-500 rounded-[5px] justify-center items-center gap-[3px] inline-flex">
            <div className="text-white text-[13px] font-bold font-inter">Login</div>
          </button>
        </div>
      </div>
      <div className="left-[23px] top-[9px] absolute" />
      <div className="left-[23px] top-[36px] absolute text-sky-600 text-xs font-bold font-inter">Goto your university</div>
      <div className="w-[222px] h-[120px] left-[204px] top-[196px] absolute">
        {/* Your SVG elements go here */}
      </div>
    </form>
  );
};

export default LoginForm;
