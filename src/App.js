import React, {Component} from 'react';
import './App.css';
// import Content from './screens/Content/'
import Center from './screens/Center/'
import Left from './screens/Left/'
import Right from './screens/Right/'
// import MapAndInfo from './screens/MapAndInfo/'
import {connect} from 'react-redux'

import data from './data.json'

class App extends Component {
    
    componentWillMount(){
        this.loadDefaultData()
    }

    loadDefaultData(){
        data.map((e, i) => {
            return this.props.addRealEstate(e)
        })
    }

    render() {

        return (
            <div className="App">
                <Left />
                {<Center />}
                <Right/>
            </div>
        );
    }

    _handlerShowInfo(id) {
        this.setState({
            showInfo: this.state.showInfo ? false : id
        })
    }



}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        addRealEstate(obj){
            dispatch({type: 'ADD_REAL_ESTATE', obj: obj})
        }
    })
)(App);
