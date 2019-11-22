import React, {Component} from 'react';
import axios from 'axios';

class HomeContainer extends Component {
    state = {
        names: []
    };
    componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/https://api-gas-stations-mex.herokuapp.com/gasstations')
        .then(response => {
            this.setState({
                name: response.data
            })
        // console.log(response)
        }).catch(error => {console.log(error);})
    }



    render() {
        return(
            <div>
    <h1>Holiboli</h1>
    <ul>
        {this.state.names.map(name => 
        <li key={name}> {name} </li>)}
    </ul>
    </div>
    )
}
}

export default HomeContainer;

