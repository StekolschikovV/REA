import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setStreet} from '../../../actions/filter'

class Street extends Component {

    render() {

        let street = []
        street.push('not select')
        for(let i = 0; i < this.props.state.realEstate.length; i++)
            if (!street.includes(this.props.state.realEstate[i].street))
                street.push(this.props.state.realEstate[i].street)


        return (
            <select className="city" onChange={(e) => this.props.setStreet(e.target.value)}>
                {street.map((e, i) => {
                    return <option key={i} value={e !== 'not select' ? e : 'undefined'}>{'Street: '}{e}</option>
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
        setStreet: (street) => {
            dispatch(setStreet(street))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Street)