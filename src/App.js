import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import MyCertificate from './Routes/MyCertificate';
import MyJobs from './Routes/Myjob';
import MyOfferletter from './Routes/MyOfferletter';
import MyPayments from './Routes/MyPayments';


const App = () => {
  return (
    <>
<Navbar/>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/jobs' element={ <MyJobs/>}/>
    <Route path='/payments' element={  <MyPayments/>}/>
    <Route path='/offerletter' element={<MyOfferletter/>}/>
    <Route path='certificate' element={ <MyCertificate/>}/>
    
    </Routes>


 
   
    
   
    </>
  );
};

export default App;