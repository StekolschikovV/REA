import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setBathrooms} from '../../../actions/filter'

class Bedrooms extends Component {
    render() {
        return (
            <select className='bathrooms' onChange={(e) => this.props.setBathrooms(e.target.value)}>
                <option value='undefined'>Bathrooms: not select</option>
                <option value='1'>Bathrooms: 1</option>
                <option value='2'>Bathrooms: 2</option>
                <option value='3'>Bathrooms: 3</option>
                <option value='4'>Bathrooms: 4</option>
                <option value='5'>Bathrooms: 5</option>
            </select>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBathrooms: (count) => {
            dispatch(setBathrooms(count))
        }
    }
}

export default connect(null, mapDispatchToProps)(Bedrooms)