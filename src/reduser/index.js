import { combineReducers } from 'redux'
import realEstate from './realEstate'
import filter from './filter'
import selectedRealEstate from './selectedRealEstate'
import hoverRealEstate from './hoverRealEstate'
import selectedCity from './selectedCity'

let redusers = combineReducers({
    realEstate,
    filter,
    selectedRealEstate,
    hoverRealEstate,
    selectedCity
})

export default redusers