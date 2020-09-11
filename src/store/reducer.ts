import {
    CHANGE_VIEW_MODE,
    SET_OFFERS,
    SET_PARAMS,
    SET_MAP,
} from './types'
import latLngOptions from '../helpers/latLngOptions'
import offerListDemo from '../helpers/offerListDemo'
import InitialStoreState from '../types/InitialStoreState'

export const initialState: InitialStoreState = {
    darkMode: JSON.parse(localStorage.darkMode || false),
    offers: !!localStorage.offers
        ? JSON.parse(localStorage.offers)
        : offerListDemo,
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
        default:
            return state
    }
}

export default reducer
