import React from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";
import './style.css';

class Advertising extends React.Component {
    render() {
        return (
            <di className="w-publish">
            <div className='header'>
                <IoIosInformationCircleOutline  className='icon-user'/>
                <p>Información para ti</p>
            </div>

            </di>
        );
    }
}

export default Advertising;