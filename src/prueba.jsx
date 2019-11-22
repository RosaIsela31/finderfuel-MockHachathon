// // //pruebas
// // import React from 'react';
// // class PruebaApi extends React.Component{
// //   constructor (props){
// //     super(props)
// //     console.log('constructor-prueba')
// //     this.state ={
// //       gasos:[]
// //     }
// //   }

// //   fetchData() {
// //   const corsproxy = 'https://cors-anywhere.herokuapp.com/';
// //   const url = 'https://api-gas-stations-mex.herokuapp.com/gasstations';
// //   fetch(corsproxy + url)
// //   .then((response) => {
// //     return console.log (response.json())
// //   })
// //   .then ((gasos) => {
// //     this.setState({gasos:gasos})
    
// //   })
// // }
// // componentDidMount(){
// //     this.fetchData();



// //pruebas
// import React from 'react';
// class PruebaApi extends React.Component{
//   constructor (props){
//     super(props)
//     console.log('constructor-prueba')
//     this.state ={
//       gasos:[]
//     }
//   }
// componentDidMount(){
//   console.log('montado')
//   const corsproxy = 'https://cors-anywhere.herokuapp.com/';
//   const url = 'https://api-gas-stations-mex.herokuapp.com/gasstations';
//   fetch(corsproxy + url)
//   .then((response) => {
//     return response.json()
//   })
//   .then ((gasos) => {
//     // this.setState(gasos)
//     console.log(gasos);
//   })

// }
// render (){
//   //const name = this.state.gasos[0]
//   return (<p> prueba 3 </p>)
// }
// }
// export default PruebaApi