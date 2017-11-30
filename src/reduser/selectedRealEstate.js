import {SET_SELECTED_REAL_ESTATE} from '../constants/selectedRealEstate'

const initialState = {
    id: 'undefined'
}

function selectedRealEstate(store = initialState, action) {
    if (action.type === SET_SELECTED_REAL_ESTATE) {
        return Object.assign({}, store, {
            id: action.form
        })
    }
    else
        return store
}

export default selectedRealEstate