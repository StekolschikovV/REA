import React, {Component} from 'react';
import './App.css';
// import Content from './screens/Content/'
import Center from './screens/Center/'
import Left from './screens/Left/'
// import MapAndInfo from './screens/MapAndInfo/'
import {connect} from 'react-redux'

import data from './data.json'

class App extends Component {
    //
    // constructor(props) {
    //     super(props)
    //
    //     // this.state = {
    //     //     showInfo: false,
    //     //     isFirstClick: true,
    //     //     ownershipForm: 'residential',
    //     // }
    //
    //     // this._handlerShowInfo = this._handlerShowInfo.bind(this)
    //
    //
    //     // this.props.state.subscribe(() => {
    //     //     console.log(123)
    //     // })
    // }

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
                {/*<Content data={data} showInfo={this._handlerShowInfo}/>*/}
                {/*<MapAndInfo data={data} showInfo={this.state.showInfo}/>*/}
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
