import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setCity} from '../../../actions/filter'

class City extends Component {

    render() {

        let citys = []
        citys.push('not select')
        for(let i = 0; i < this.props.state.realEstate.length; i++)
            if (!citys.includes(this.props.state.realEstate[i].city))
                citys.push(this.props.state.realEstate[i].city)


        return (
            <select className="city" onChange={(e) => this.props.setCity(e.target.value)}>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)