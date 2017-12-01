import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.scss';

import Map from './components/Map'
import Info from './components/Info'

let key = 'AIzaSyCdU3vOouOlfFnBr9THzGXHBo6GD8Y1XJk'

class Right extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showInfo: false
        }
    }

    render() {

        let selectedRealEstate = this.props.state.selectedRealEstate.id
        let hoverId = this.props.state.hoverRealEstate.id
        let allEl = this.props.state.realEstate
        let selectedCoordinates = 'undefined'
        if (hoverId !== 'undefined')
            selectedCoordinates = allEl[hoverId].map
        let cityCoordinates = this.props.state.selectedCity.coordinates
        if (cityCoordinates === 'undefined')
            cityCoordinates = allEl[0].map
        return (
            <div id="Right">
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    hoverId={hoverId}
                    allEl={allEl}
                    selectedCoordinates={selectedCoordinates}
                    cityCoordinates={cityCoordinates} />
                { selectedRealEstate !=='undefined' ? <Info id={this.state.showInfo} data={this.props.state}/> : ''}
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
