import React from 'react'
import {Link} from 'react-router-dom';
import './style.css';

import { MdFavoriteBorder } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { FiFilter } from "react-icons/fi";




const Navbar = () => {
  return (
    <div className='navbar-container'>
     <Link to={'/otherview'}>
<<<<<<< HEAD
       <div className='mechanical'> <MdInfoOutline/></div>
       <div className='foryou'><MdFavoriteBorder /></div>
       <div className='routes'><MdHelpOutline/></div>
       <div className='filter'><FiFilter/></div>
=======
       <Link to={'/publicity'}>
       <div className='mechanical'> <MdInfoOutline/></div>
       </Link>
       <div className='foryou'><MdFavoriteBorder /></div>
       <div className='routes'><MdHelpOutline/></div>
         <div className='filter'><FiFilter/></div>
>>>>>>> upstream/master

     </Link>
    </div>
  )
}

export default Navbar;