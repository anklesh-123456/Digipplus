import React, {useState} from 'react'
import logo1 from "../Components/Images/download.png";
import "./NavbarStyle.css"
import {Link} from 'react-router-dom';
import { MenuList } from './MenuList';
const Navbar = () => {

    const [state, setState] = useState(false)
  const handleClick =()=>{
setState(!state);
  }
  return (
    <div className='navbar'>

        <div className='logo1'>
            <img src={logo1} alt="digipplus" />DIGI<span>PPLUS</span> 
        </div>

        
        
            <ul className={state ? "nav-menu active":"nav-menu"}>
            {MenuList.map((item, index) =>{
      return(
  <li key={index}>
<Link  className={item.cName} to={item.url}>
 {item.title}
</Link>
</li>
)
})}
            </ul>
    

        <div className='logo2'>
            <h1><span>I</span>D</h1>
        </div>
        <div className='menu-icons' onClick={handleClick}>
  <i className={state ? "fas fa-times" : "fas fa-bars"}></i>

</div>

    </div>
  )
}

export default Navbar