import { combineReducers } from 'redux'
import realEstate from './realEstate'
import filter from './filter'
import selectedRealEstate from './selectedRealEstate'

let redusers = combineReducers({
    realEstate,
    filter,
    selectedRealEstate
})

export default redusers