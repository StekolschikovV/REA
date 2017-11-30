import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setRooms} from '../../../actions/filter'

class Rooms extends Component {
    render() {
        return (
            <select className='rooms' onChange={(e) => this.props.setRooms(e.target.value)}>
                <option value='undefined'>Rooms: not select</option>
                <option value='1'>Rooms: 1</option>
                <option value='2'>Rooms: 2</option>
                <option value='3'>Rooms: 3</option>
                <option value='4'>Rooms: 4</option>
            </select>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRooms: (count) => {
            dispatch(setRooms(count))
        }
    }
}

export default connect(null, mapDispatchToProps)(Rooms)