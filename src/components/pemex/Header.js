import React, { Component } from 'react'
import './style.css';

import { FaUserCircle } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { MdViewList } from "react-icons/md";

import pemexpng from '../../img/gasolinera2.jpg'
import Like from '../../likecomponents/Like';


class Header  extends Component  {
  handleChecket1 = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
    localStorage.setItem('comment1', JSON.stringify(election)); 
  }

  handleChecket2 = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
    localStorage.setItem('comment2', JSON.stringify(election)); 
  }

  handleChecket3 = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
    localStorage.setItem('comment3', JSON.stringify(election)); 
  }

  render(){
    return (
      <div className='header-pemex'>
      <div className='icons-container'>
        <FaUserCircle  className='user'/>
        <p>Gasolinera Pemex</p>
        <MdSearch  className='magnifying'/>
        <MdViewList className='list'/>
      </div>
        <img src={pemexpng}  className='pemexpng' alt='pemexpng'/>
        <div className='inf-gas'>
          <Like/>
          <p>Yucatan No.155 Esq. C.U. Benito Juárez, 06700 
            <br/>
            Xalapa Enríquez, CDMX
            <br/><br/>
            800 736 3900
            <br/><br/>
            9:00 - 18:00 Abierto ahora
          </p>
          <div className='container-divs'>
            <div className='green'>Magna <br/> 20.20</div>
            <div className='red'>Premium <br/> 21.40</div>
            <div className='black'>Diesel <br/> 21.30</div>
          </div>
          <div className='comments'>

            <input  type='text' placeholder='Deja un comentario' className='input-commit'onChange={this.handleChecket1}/>
            <button className='btn-forgo'>
              <a href="javascript:location.reload()" className='btn-forgo'>Enviar</a>
            </button>

            <tr><th> {localStorage.getItem('comment1')} </th></tr>


            <input  type='text' placeholder='Deja un comentario' className='input-commit'onChange={this.handleChecket2}/>
            <button className='btn-forgo'>
              <a href="javascript:location.reload()" >Enviar</a>
            </button>

             <tr><th> {localStorage.getItem('comment2')} </th></tr>

            <input  type='text' placeholder='Deja un comentario' className='input-commit'onChange={this.handleChecket3}/>
            <button className='btn-forgo'>
              <a href="javascript:location.reload()" className='btn-forgo'>Enviar</a>
            </button>
           
             <tr><th> {localStorage.getItem('comment3')} </th></tr>
          </div>
  
        
          
        </div>
      </div>
    )
  }
}

export default Header;