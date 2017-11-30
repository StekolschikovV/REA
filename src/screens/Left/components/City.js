import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setCity} from '../../../actions/filter'
import {setCityCoordinates, rmCityCoordinates} from '../../../actions/selectedCity'

class City extends Component {

    render() {
        let citys = []
        citys.push('not select')
        for(let i = 0; i < this.props.state.realEstate.length; i++)
            if (!citys.includes(this.props.state.realEstate[i].city))
                citys.push(this.props.state.realEstate[i].city)
                
        return (
            <select className="city" onChange={(e) => {
                let v = e.target.value
                this.props.setCity(v)
                if(v === 'undefined')
                    this.props.rmCityCoordinates(v)
                else{
                    fetch(`http://maps.googleapis.com/maps/api/geocode/json?address=${v}`)
                        .then((response) => {
                            return response.json()
                        })
                        .then((json) => {
                            this.props.setCityCoordinates(`${json.results[0].geometry.location.lat},${json.results[0].geometry.location.lng}`)
                        })
                        .catch((error) =>{ 
                            this.props.rmCityCoordinates(v)
                         });
                } 
            }}>
                {citys.map((e, i) => {
                    return <option key={i} value={e !== 'not select' ? e : 'undefined'}>{'City: '}{e}</option>
                })}
            </select>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCity: (city) => {
            dispatch(setCity(city))
        },
        rmCityCoordinates: (coordinates) => {
            dispatch(rmCityCoordinates(coordinates))
        },
        setCityCoordinates: (coordinates) => {
            dispatch(setCityCoordinates(coordinates))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)