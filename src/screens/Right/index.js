import React, {Component} from 'react'
import {connect} from 'react-redux'
// import Info from './Info'
import mapStyle from './components/mapStyle.js'
import './style.scss';
import m from '../../img/m.png'

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
        defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}}
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
            // console.log(el.map)
            return <Marker key={i} position={{lat: -34.397 + i, lng: 150.644}} icon={m}/>
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

        return (
            <div id="Right">
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&center=Chicago`}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `100%`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                    hoverId={hoverId}
                    allEl={allEl}
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

const mapDispatchToProps = (dispatch) => {
    return {
        setOwnershipForm: (form) => {
            // dispatch(setOwnershipForm(form))

            // if (form === 'commercial') dispatch(setRealEstateType('Offices'))
            // else dispatch(setRealEstateType('Single homes'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Right)
