import React from 'react'
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
      <MdViewList />
    </div>
  )
}

export default Header;