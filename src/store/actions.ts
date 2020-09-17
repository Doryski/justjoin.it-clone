import {
    CHANGE_VIEW_MODE,
    SET_OFFERS,
    SET_PARAMS,
    SET_MAP,
    SET_CURRENT_OFFER,
} from './types'
import OfferType from '../types/OfferType'
import ParamsType from '../types/ParamsType'
import InitialStoreState from '../types/InitialStoreState'

export const toggleThemeMode = () => ({
    type: CHANGE_VIEW_MODE,
})

export const setOffers = (offers: OfferType[]) => ({
    type: SET_OFFERS,
    payload: offers,
})

export const setParams = (params: ParamsType) => ({
    type: SET_PARAMS,
    payload: params,
})

export const setMap = (map: InitialStoreState['map']) => ({
    type: SET_MAP,
    payload: map,
})

export const setCurrentOffer = (offer: OfferType) => ({
    type: SET_CURRENT_OFFER,
    payload: offer,
})
