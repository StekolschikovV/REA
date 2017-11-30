import {
    SET_OWNERSHIP_FORM, SET_REAL_ESTATE_TYPE, SET_CITY, SET_STREET, SET_BEDROOMS, SET_MAXIMUM_PRICE, SET_ROOMS,
    SET_BATHROOMS, SET_YEAR_BUILD, SET_OPTION, REMOVE_OPTION
} from '../constants/filter'

const initialState = {
    ownershipForm: 'residential',
    realEstateType: 'Single homes',
    city: 'undefined',
    street: 'undefined',
    bedrooms: 'undefined',
    maximumPrice: 'undefined',
    rooms: 'undefined',
    bathrooms: 'undefined',
    yearBuild: 'undefined',
    option: []
}

function filter(store = initialState, action) {
    if (action.type === SET_OWNERSHIP_FORM)
        return Object.assign({}, store, {
            ownershipForm: action.form
        })
    else if (action.type === SET_REAL_ESTATE_TYPE)
        return Object.assign({}, store, {
            realEstateType: action.form
        })
    else if (action.type === SET_CITY)
        return Object.assign({}, store, {
            city: action.form
        })
    else if (action.type === SET_STREET)
        return Object.assign({}, store, {
            street: action.form
        })
    else if (action.type === SET_BEDROOMS)
        return Object.assign({}, store, {
            bedrooms: action.form
        })
    else if (action.type === SET_MAXIMUM_PRICE)
        return Object.assign({}, store, {
            maximumPrice: action.form
        })
    else if (action.type === SET_ROOMS)
        return Object.assign({}, store, {
            rooms: action.form
        })
    else if (action.type === SET_BATHROOMS)
        return Object.assign({}, store, {
            bathrooms: action.form
        })
    else if (action.type === SET_YEAR_BUILD)
        return Object.assign({}, store, {
            yearBuild: action.form
        })
    else if (action.type === SET_OPTION)
        return {
            ...store,
            option: [...store.option, action.form]
        }

    else if (action.type === REMOVE_OPTION) {
        return {
            ...store,
            option: [...store.option.filter(option => option !== action.form)]
        }
    }

else
    return store
}

export default filter