import {SET_HOVER_REAL_ESTATE, RM_HOVER_REAL_ESTATE} from '../constants/hoverRealEstate'

const initialState = {
    id: 'undefined'
}

function hoverRealEstate(store = initialState, action) {
    if (action.type === SET_HOVER_REAL_ESTATE) {
        return Object.assign({}, store, {
            id: action.form
        })
    }
    else if (action.type === RM_HOVER_REAL_ESTATE) {
        return Object.assign({}, store, {
            id: 'undefined'
        })
    }
    else
        return store
}

export default hoverRealEstate