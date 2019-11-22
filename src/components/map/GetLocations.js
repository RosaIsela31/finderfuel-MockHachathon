// import React from 'react';
// import axios from 'axios';

// export default class LocationList extends React.Component {
//        constructor(props) {
//           super(props);
//           console.log('constructor-prueba')
//           this.state = {
//             GasLocations: {
//               lat: "",
//               lng: ""
//             }
//           };
    
//       componentDidMount() {
//         axios.get('https://cors-anywhere.herokuapp.com/https://api-gas-stations-mex.herokuapp.com/gasstations')
//         .then(response => {
//             console.log(response)
//             this.setState({
//                 locationsInfo: response.data
//             });
//         }).catch(error => {console.log(error);});
//     }
// }
// }
    // fetch('https://www.datos.gov.co/resource/g373-n3yy.json')
    // .then(response => response.json())
    // .then(locations => {
    //     console.log(locations)

    //     response.forEach(data => {
    //         let locationsData = {
    //             position:{lat:data.location.x[1],lng:data.location.y[0]},
    //             name: data.name                
    //         }
    //         locationsInfo.push(locationsData)
    //     })
    //     if(navigator.geolocation){
    //         navigator.geolocation.getCurrentPosition((data)=>{
    //             let currentPosition = {
    //                 lat: data.location.x,
    //                 lng: data.location.y
    //             }
    //             initMap(currentPosition)
    //         })
    //     }
    // }
//     render(){
//         return(
//             <ul>
//                 {this.state.data.map(info => <li key={info.index}>{info.location.x} </li>)}
//             </ul>
//         )
//     }

// }
import React from 'react';
import axios from 'axios';

export class LocationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Gaslocations: {
            x: "",
            y: ""
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