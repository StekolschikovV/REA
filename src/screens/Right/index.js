import React, {Component} from 'react'
import {connect} from 'react-redux'
import mapStyle from './components/mapStyle.js'
import './style.scss';
import locationMarker from '../../img/location.svg'

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

let key = 'AIzaSyCdU3vOouOlfFnBr9THzGXHBo6GD8Y1XJk'

const Map = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        panControl={false} streetViewControl={false}
        defaultZoom={12} 
        defaultCenter={{
            lat: parseFloat(props.cityCoordinates.split(',')[0].trim()), 
            lng: parseFloat(props.cityCoordinates.split(',')[1].trim())
        }}
        center={{
            lat: parseFloat(props.cityCoordinates.split(',')[0].trim()), 
            lng: parseFloat(props.cityCoordinates.split(',')[1].trim())
        }}
        defaultOptions={{
            styles: mapStyle,
            streetViewControl: false,
            scaleControl: false,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            rotateControl: false,
            fullscreenControl: false
        }}
    >
    {
        props.allEl.map(function (el, i) {
            return <Marker key={i} position={{
                lat: parseFloat(el.map.split(',')[0].trim()), 
                lng: parseFloat(el.map.split(',')[1].trim())
            }} icon={locationMarker}/>
        })  
    }
    </GoogleMap>
));

class Right extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showInfo: false
        }
    }

    render() {
        let hoverId = this.props.state.hoverRealEstate.id
        let allEl = this.props.state.realEstate
        let cityCoordinates = this.props.state.selectedCity.coordinates
        if(cityCoordinates === 'undefined')
            cityCoordinates = allEl[0].map
        return (
            <div id="Right">
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&center=Chicago`}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `100%`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                    hoverId={hoverId}
                    allEl={allEl}
                    cityCoordinates={cityCoordinates}
                   
                />
                {/* {this.state.showInfo ? <Info id={this.state.showInfo} data={this.props.data}/> : ''} */}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, null)(Right)
