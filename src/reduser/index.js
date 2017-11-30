import { combineReducers } from 'redux'
import realEstate from './realEstate'
import filter from './filter'
import selectedRealEstate from './selectedRealEstate'
import hoverRealEstate from './hoverRealEstate'

let redusers = combineReducers({
    realEstate,
    filter,
    selectedRealEstate,
    hoverRealEstate
})

export default redusers