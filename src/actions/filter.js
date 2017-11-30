import { SET_OWNERSHIP_FORM, SET_REAL_ESTATE_TYPE, SET_CITY, SET_STREET, SET_BEDROOMS, SET_MAXIMUM_PRICE, SET_ROOMS,
    SET_BATHROOMS, SET_YEAR_BUILD, SET_OPTION, REMOVE_OPTION } from '../constants/filter'

export const setOwnershipForm = (form) => ({
    type: SET_OWNERSHIP_FORM,
    form: form
})
export const setRealEstateType = (form) => ({
    type: SET_REAL_ESTATE_TYPE,
    form: form
})
export const setCity = (city) => ({
    type: SET_CITY,
    form: city
})
export const setStreet = (street) => ({
    type: SET_STREET,
    form: street
})
export const setBedrooms = (count) => ({
    type: SET_BEDROOMS,
    form: count
})
export const setMaximumPrice = (count) => ({
    type: SET_MAXIMUM_PRICE,
    form: count
})
export const setRooms = (count) => ({
    type: SET_ROOMS,
    form: count
})
export const setBathrooms = (count) => ({
    type: SET_BATHROOMS,
    form: count
})
export const setYearBuild = (count) => ({
    type: SET_YEAR_BUILD,
    form: count
})
export const setOption = (title) => ({
    type: SET_OPTION,
    form: title
})
export const removeOption = (title) => ({
    type: REMOVE_OPTION,
    form: title
})