import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setYearBuild} from '../../../actions/filter'

class EearBuild extends Component {
    render() {
        return (
            <select className='yearBuild' onChange={(e) => this.props.setYearBuild(e.target.value)}>
                <option value='undefined'>Year build: not select</option>
                <option value='2000'>Year build: 2000</option>
                <option value='2001'>Year build: 2001</option>
                <option value='2002'>Year build: 2002</option>
                <option value='2003'>Year build: 2003</option>
                <option value='2004'>Year build: 2004</option>
            </select>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setYearBuild: (year) => {
            dispatch(setYearBuild(year))
        }
    }
}

export default connect(null, mapDispatchToProps)(EearBuild)