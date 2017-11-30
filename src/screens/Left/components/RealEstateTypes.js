import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setRealEstateType} from '../../../actions/filter'

class RealEstateTypes extends Component {

    render() {

        this.filter = this.props.state.filter

        let types = []
        if (this.filter.ownershipForm === 'residential')
            types = ['Single homes', 'Apartments', 'Cottage', 'Family house', 'Villa']
        else if (this.filter.ownershipForm === 'commercial')
            types = ['Offices', 'Retail', 'Industrial/Warehouse', 'Showrooms/Bulky Goods', 'Land/Development', 'Hotel/Leisure', 'Medical/Consulting', 'Commercial', 'Farming']

        return (
            <ul className={'realEstateTypes'}>
                {types.map((e, i) =>
                    <li
                        key={i}
                        className={this.filter.realEstateType === e ? 'active' : ''}
                        onClick={() => this.props.setRealEstateType(e)}
                    >{e}</li>
                )}
            </ul>
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
        setRealEstateType(form) {
            dispatch(setRealEstateType(form))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RealEstateTypes)