import React from 'react';
import imgcircular from '../../img/img-circular.png';
import { Link } from 'react-router-dom';
import './styles.css';

class About extends React.Component {
    render() {
        return (
            <div className="w-about">
            <div className="square-gde">
                <div className="wallpaper"></div>
                    <img className="img-circular" src={imgcircular} alt="img-circular" />
                    <p className="parrafos-bold">Encuentra descuentos y<br/>servicios</p>
                    <p className="parrafos-text">No importa que sea para ti una
                    <br/>emergencia, localiza en<br/>cualquier momento una grúa
                    <br/>cercana, refacciones para auto<br/>o comida.</p>
                    <Link to={'/landing'}>
                      <button className="buttons">SIGUIENTE</button>
                    </Link>

            </div>

            </div>
        );
    }
}

export default About;