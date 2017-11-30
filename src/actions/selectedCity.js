import {
    SET_CITY_COORDINATES,
    RM_CITY_COORDINATES
} from '../constants/selectedCity'

export const setCityCoordinates = (form) => ({
    type: SET_CITY_COORDINATES,
    form: form
})

export const rmCityCoordinates = (form) => ({
    type: RM_CITY_COORDINATES,
    form: form
})