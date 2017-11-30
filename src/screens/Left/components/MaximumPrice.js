import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setMaximumPrice} from '../../../actions/filter'

class MaximumPrice extends Component {
    render() {
        return (
            <select className='maximumPrice' onChange={(e) => this.props.setMaximumPrice(e.target.value)}>
                <option value='undefined'>Maximum price: not select</option>
                <option value='20000'>Maximum price: $20000</option>
                <option value='25000'>Maximum price: $25000</option>
            </select>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMaximumPrice: (price) => {
            dispatch(setMaximumPrice(price))
        }
    }
}

export default connect(null, mapDispatchToProps)(MaximumPrice)