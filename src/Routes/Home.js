import React from 'react';
import "./HomeStyle.css";
import logo1 from "../Components/Images/download.png";
const Home = () => {
  return (
    <div className='home-page'>
      <div className="home-logo">
        <img src={logo1} alt="img" />
      </div>
      <div className="heading">
      <h1>Welcome To Digipplus</h1>
      </div>
     
      <div className='work'>
        <h2>Work Action</h2>
        <h4>view Intern Data</h4>
        <h2>Internship</h2>
        <textarea placeholder="Write Section"  rows="5"></textarea>
      </div>
    </div>
  );
};

export default Home;