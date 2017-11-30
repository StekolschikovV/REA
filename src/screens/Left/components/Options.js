import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setOption, removeOption} from '../../../actions/filter'

class Options extends Component {

    constructor(props){
        super(props)
        this._hendlerChange = this._hendlerChange.bind(this)
    }

    _hendlerChange(e){
        if(e.target.checked)
            this.props.setOption(e.target.id)
        else
            this.props.removeOption(e.target.id)
    }

    render() {
        return (
            <section id="checkboxOptions">
                <span>
                    <input id="garage" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="garage">Garage</label>
                </span>
                <span>
                    <input id="airConditioning" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="airConditioning">Air conditioning</label>
                </span>
                <span>
                    <input id="alarmSystem" type="checkbox"  onChange={this._hendlerChange}/>
                    <label htmlFor="alarmSystem">Alarm system</label>
                </span>
                <span>
                    <input id="arbour" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="arbour">Arbour</label>
                </span>
                <span>
                    <input id="buildInWardrobes" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="buildInWardrobes">Build in wardrobes</label>
                </span>
                <span>
                    <input id="cityViews" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="cityViews">City Views</label>
                </span>
                <span>
                    <input id="concierge" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="concierge">Concierge</label>
                </span>
                <span>
                    <input id="parking" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="parking">Parking</label>
                </span>
                <span>
                    <input id="garden" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="garden">Garden</label>
                </span>
                <span>
                    <input id="guestApartment" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="guestApartment">Guest apartment</label>
                </span>
                <span>
                    <input id="gym" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="gym">Gym</label>
                </span>
                <span>
                    <input id="homeAppliances" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="homeAppliances">Home Appliances</label>
                </span>
                <span>
                    <input id="heating" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="heating">Heating</label>
                </span>
                <span>
                    <input id="jacuzzi" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="jacuzzi">Jacuzzi</label>
                </span>
                <span>
                    <input id="solarium" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="solarium">Solarium</label>
                </span>
                <span>
                    <input id="swimmingPool" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="swimmingPool">Swimming pool</label>
                </span>
                <span>
                    <input id="tennisCourt" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="tennisCourt">Tennis court</label>
                </span>
                <span>
                    <input id="utilityRoom" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="utilityRoom">Utility room</label>
                </span>
                <span>
                    <input id="viewsToPark" type="checkbox" onChange={this._hendlerChange}/>
                    <label htmlFor="viewsToPark">Views to park</label>
                </span>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOption: (option) => {
            dispatch(setOption(option))
        },
        removeOption: (option) => {
            dispatch(removeOption(option))
        },
    }
}

export default connect(null, mapDispatchToProps)(Options)