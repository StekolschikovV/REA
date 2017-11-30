import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setBedrooms} from '../../../actions/filter'

class Bedrooms extends Component {
    render() {
        return (
            <select className='bedrooms' onChange={(e) => this.props.setBedrooms(e.target.value)}>
                <option value='undefined'>Bedrooms: not select</option>
                <option value='1'>Bedrooms: 1</option>
                <option value='2'>Bedrooms: 2</option>
                <option value='3'>Bedrooms: 3</option>
                <option value='4'>Bedrooms: 4</option>
                <option value='5'>Bedrooms: 5</option>
            </select>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBedrooms: (count) => {
            dispatch(setBedrooms(count))
        }
    }
}

export default connect(null, mapDispatchToProps)(Bedrooms)