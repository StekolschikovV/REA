import {SET_CITY_COORDINATES, RM_CITY_COORDINATES} from '../constants/selectedCity'

const initialState = {
    coordinates: 'undefined'
}

function hoverRealEstate(store = initialState, action) {
    if (action.type === SET_CITY_COORDINATES) {
        return Object.assign({}, store, {
            coordinates: action.form
        })
    }
    else if (action.type === RM_CITY_COORDINATES) {
        return Object.assign({}, store, {
            coordinates: 'undefined'
        })
    }
    else
        return store
}

export default hoverRealEstate