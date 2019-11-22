import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

import { FaUserCircle } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { MdViewList } from "react-icons/md";


const Header = () => {
  return (
    <div className='header'>
      <FaUserCircle  className='icon-user'/>
      <p>Gasolinas</p>
      <MdSearch  className='magnifying-glass'/>
      <Link to={'/pemex'}>
      <MdViewList />
      </Link>
    </div>
  )
}

export default Header;