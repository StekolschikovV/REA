import React, {Component} from 'react';
import {connect} from 'react-redux'
import './style.scss';

import {setSelectedRealEstate} from '../../actions/selectedRealEstate'

class Center extends Component {

    optionCheacker(filter, realEstate) {
        let result = true
        if (filter.length > 0) {
            for (let i = 0; i < filter.length; i++) {
                result = realEstate.includes(filter[i])
            }
        }
        return result
    }

    render() {

        this.selectedId = this.props.state.selectedRealEstate.id
        this.realEstate = this.props.state.realEstate
        this.filter = this.props.state.filter

        let showRealEstate = []

        for (let i = 0; i < this.realEstate.length; i++) {
            let e = this.realEstate[i]
            if (
                e.ownershipForm === this.filter.ownershipForm
                && e.realEstateType === this.filter.realEstateType
                && (this.filter.city === 'undefined' ? true : e.city === this.filter.city)
                && (this.filter.street === 'undefined' ? true : e.street === this.filter.street)
                && (this.filter.bedrooms === 'undefined' ? true : e.bedrooms.toString() === this.filter.bedrooms)
                && (this.filter.maximumPrice === 'undefined' ? true : e.price < parseInt(this.filter.maximumPrice, 10) )
                && (this.filter.rooms === 'undefined' ? true : e.rooms === parseInt(this.filter.rooms, 10))
                && (this.filter.bathrooms === 'undefined' ? true : e.bathrooms === parseInt(this.filter.bathrooms, 10))
                && (this.filter.yearBuild === 'undefined' ? true : e.yearBuild === parseInt(this.filter.yearBuild, 10))
                && (this.optionCheacker(this.filter.option, e.option))
            )

                showRealEstate.push(
                    <li key={i}
                        className={i === this.selectedId ? 'selected' : this.selectedId !== 'undefined' ? 'notSelected' : ''}
                        onClick={() => {
                            if (i === this.selectedId)
                                this.props.setSelectedRealEstate('undefined')
                            else
                                this.props.setSelectedRealEstate(i)
                        }}>
                        <div className="left">
                            <div className="realEstateType"><h2>{e.realEstateType}</h2></div>
                            <div className="floor"><h3>{e.floor} floor</h3></div>
                            <div className="bedrooms"><h3>{e.bedrooms} bedrooms</h3></div>
                            <div className="price"><h2>$ {e.price}</h2></div>
                        </div>
                        <div className="center">
                            <div className="address"><h3>{e.street}</h3></div>
                            <div className="special"><h3>{e.special}</h3></div>
                            <div className="area"><h3>{e.area}</h3></div>
                        </div>
                        <div className="right"
                             style={{backgroundImage: "url(" + require(`../../img/data/${e.imgMin}`) + ")"}}>
                            <div className={'close'}>X</div>
                        </div>
                    </li>
                )
        }

        showRealEstate = showRealEstate.filter(function (item) {
            return item !== undefined
        })

        if (showRealEstate.length === 0) {
            showRealEstate = <h2>There is no content for this filters!</h2>
        }

        return (
            <ul id="Center">
                {showRealEstate}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedRealEstate: (id) => {
            dispatch(setSelectedRealEstate(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Center)