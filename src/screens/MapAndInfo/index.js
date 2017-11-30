// import React, {Component} from 'react'
// import Info from './Info'
// import mapStyle from './mapStyle.js'
// import './style.scss';
// import m from '../../img/m.png'

// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     // FusionTablesLayer,
//     Marker,
//     // MarkerClusterer,
// } from "react-google-maps";

// let key = 'AIzaSyCdU3vOouOlfFnBr9THzGXHBo6GD8Y1XJk'

// const Map = withScriptjs(withGoogleMap(props =>
//     <GoogleMap
//         panControl={false} streetViewControl={false}
//         defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}}
//         defaultOptions={{
//             styles: mapStyle,
//             streetViewControl: false,
//             scaleControl: false,
//             mapTypeControl: false,
//             panControl: false,
//             zoomControl: false,
//             rotateControl: false,
//             fullscreenControl: false
//         }}
//     >
//         {[1, 2, 3, 4, 5, 6].map(function (i) {
//             return <Marker key={i} position={{lat: -34.397 + i, lng: 150.644}} icon={m}/>
//         })}
//     </GoogleMap>
// ));


// class MapAndInfo extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             showInfo: false
//         }
//     }

//     componentWillReceiveProps() {
//         setTimeout(() => {
//             this.setState({
//                 showInfo: this.props.showInfo
//             })
//         }, 0)
//     }

//     render() {

//         return (
//             <div id="MapAndInfo">
//                 <Map
//                     googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&center=Chicago`}
//                     loadingElement={<div style={{height: `100%`}}/>}
//                     containerElement={<div style={{height: `100%`}}/>}
//                     mapElement={<div style={{height: `100%`}}/>}
//                 />
//                 {this.state.showInfo ? <Info id={this.state.showInfo} data={this.props.data}/> : ''}
//             </div>
//         );
//     }
// }

// export default MapAndInfo;
