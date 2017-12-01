import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import mapStyle from './mapStyle.js'

import locationMarker from '../../../img/location.svg'
import locationHoverMarker from '../../../img/location-hover.svg'

// eslint-disable-next-line
export default Map = withScriptjs(withGoogleMap(props =>
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
        }}>
        {props.allEl.map(function (el, i) {
            if (props.selectedCoordinates !== 'undefined'
                && parseFloat(props.selectedCoordinates.split(',')[0].trim()) === parseFloat(el.map.split(',')[0].trim())
                && parseFloat(props.selectedCoordinates.split(',')[1].trim()) === parseFloat(el.map.split(',')[1].trim())) {
                return <Marker key={i} position={{
                    lat: parseFloat(props.selectedCoordinates.split(',')[0].trim()),
                    lng: parseFloat(props.selectedCoordinates.split(',')[1].trim())
                }} icon={locationHoverMarker} />
            }
            else {
                return <Marker key={i} position={{
                    lat: parseFloat(el.map.split(',')[0].trim()),
                    lng: parseFloat(el.map.split(',')[1].trim())
                }} icon={locationMarker} />
            }

        })}
    </GoogleMap>
));