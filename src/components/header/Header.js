import React from 'react'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> upstream/master
import './style.css';

import { FaUserCircle } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { MdViewList } from "react-icons/md";


const Header = () => {
  return (
    <div className='header'>
      <FaUserCircle  className='icon-user'/>
<<<<<<< HEAD
      <p>Gasolineras</p>
      <MdSearch  className='magnifying-glass'/>
      <MdViewList />
=======
      <p>Gasolinas</p>
      <MdSearch  className='magnifying-glass'/>
      <Link to={'/pemex'}>
      <MdViewList />
      </Link>
>>>>>>> upstream/master
    </div>
  )
}

export default Header;