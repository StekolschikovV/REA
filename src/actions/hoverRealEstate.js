import {
    SET_HOVER_REAL_ESTATE,
    RM_HOVER_REAL_ESTATE
} from '../constants/hoverRealEstate'

export const setHoverRealEstate = (form) => ({
    type: SET_HOVER_REAL_ESTATE,
    form: form
})

export const rmHoverRealEstate = (form) => ({
    type: RM_HOVER_REAL_ESTATE,
    form: form
})