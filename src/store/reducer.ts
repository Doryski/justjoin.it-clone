import {
    CHANGE_VIEW_MODE,
    SET_OFFERS,
    SET_PARAMS,
    SET_MAP,
    SET_CURRENT_OFFER,
} from './types'
import latLngOptions from '../helpers/latLngOptions'
import InitialStoreState from '../types/InitialStoreState'

export const initialState: InitialStoreState = {
    darkMode: JSON.parse(localStorage.darkMode || false),
    offers: [],
    map: {
        coordinates: latLngOptions.poland,
        zoom: 6,
    },
    params: {
        location: null,
        tech: null,
        expLvl: null,
        from: null,
        to: null,
        sort: null,
        search: null,
    },
    currentOffer: null,
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_VIEW_MODE:
            return {
                ...state,
                darkMode: !state.darkMode,
            }
        case SET_OFFERS:
            return {
                ...state,
                offers: action.payload,
            }
        case SET_PARAMS:
            return {
                ...state,
                params: action.payload,
            }
        case SET_MAP:
            return { ...state, map: action.payload }
        case SET_CURRENT_OFFER:
            return { ...state, currentOffer: action.payload }
        default:
            return state
    }
}

export default reducer
