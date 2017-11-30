import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.scss'

import Logo from '../../components/Logo'

import OwnershipForm from './components/OwnershipForm'
import RealEstateTypes from './components/RealEstateTypes'
import City from './components/City'
import Street from './components/Street'
import Bedrooms from './components/Bedrooms'
import MaximumPrice from './components/MaximumPrice'
import Rooms from './components/Rooms'
import Bathrooms from './components/Bathrooms'
import YearBuild from './components/YearBuild'
import Options from './components/Options'

import {setOwnershipForm, setRealEstateType} from '../../actions/filter'

class Left extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moreFilters: false
        }
    }

    render() {

        this.filter = this.props.state.filter

        return (
            <div id="FiltersAndMenu">

                <Logo/>

                <OwnershipForm
                    _handlerOnClick={(form) => this.props.setOwnershipForm(form)}
                    ownershipForm={this.filter.ownershipForm}/>

                <RealEstateTypes/>

                <City/>

                <Street/>

                <Bedrooms/>

                <MaximumPrice/>

                <h3 className={'moreFiltersTitle'} onClick={() => {
                    this.setState({moreFilters: !this.state.moreFilters})
                }}>More filters</h3>

                {this.state.moreFilters ?
                    <div className="moreFilters">

                        <Rooms/>

                        <Bathrooms/>

                        <YearBuild/>

                        <Options/>

                    </div>
                    : ''}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOwnershipForm: (form) => {
            dispatch(setOwnershipForm(form))

            if (form === 'commercial') dispatch(setRealEstateType('Offices'))
            else dispatch(setRealEstateType('Single homes'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Left)