import React from 'react';
import gas from '../img/gas-logo.png';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
    render() {
        return (
            <div className='welcome-body'>
                <div>
                    <h1 className="title">¡Hola!</h1>
                    <p className="parrafos-bold">Te damos la bienvenida<br/>a FinderFuel</p>
                    <img className="gas" src={gas} alt="logo" />
                </div>
                <div className="square">
                    <p className="parrafos-text">Nuestro servicio esta basado en <br/>tu ubicación actual,<br/>recomendamos activar tu GPS.</p>
                    <button className="buttons">ACTIVAR GPS</button>
                    <Link to={'/about'}>
                         <button className="buttons" id="button-of">CONTINUAR</button>
                    </Link>
                </div>

            </div>
        );
    }
}

export default Welcome;