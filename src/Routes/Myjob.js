import React from 'react'
import Myjobslinks from './Myjobslinks';
import "./MyjobStyle.css";
import { Route, Routes } from 'react-router-dom';
import Screening from './Screening';
import Solution from './Solution';
import Application from './Application';

const Myjob = () => {
  return (
    <div className='job-header'>
  <div className='head'>
  <Myjobslinks/>
  </div>
  <div className='main'>
  <Routes>
    <Route   path='/solution' element={<Solution/>}/>
    <Route path='/screening' element={<Screening/>}/>
    <Route path='/application' element={<Application/>}/>
    </Routes>
    <div className='text'>
      <h1>K10 Maths Text Book Solution</h1>
      <p>intern digipplus</p>
    </div>
  </div>

  
    </div>
  )
}

export default Myjob;