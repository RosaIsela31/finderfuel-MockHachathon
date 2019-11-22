import React from 'react';
import axios from 'axios';

export default class NameList extends React.Component {
  constructor(props) {
    super(props);
    
    state = {
        data: []
    }
      const { lat, lng } = this.props.initialCenter;
      this.state = {
        currentLocation: {
          lat: lat,
          lng: lng
        }
      };
    }


    componentDidMount(){
       axios.get('https://cors-anywhere.herokuapp.com/https://api-gas-stations-mex.herokuapp.com/gasstations')
           .then(response => {
               console.log(response)
               this.setState({
                   data: response.data
               });
           }).catch(error => {console.log(error);});
       }
       render(){
           return(
               <ul>
                   {this.state.data.map(info => <li key={info.index}>{info.location.x} </li>)}
               </ul>
           )
       }
}