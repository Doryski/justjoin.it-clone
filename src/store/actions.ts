import {
	CHANGE_VIEW_MODE,
	SET_MARKERS,
	SET_MARKER_CLASS,
	SET_ALL_OFFERS,
	SET_MAP,
	SET_OFFERS_LIST,
	SET_PARAMS,
} from './types'
import { ParamsType, OfferType } from './reducer'

export const changeViewMode = () => ({
	type: CHANGE_VIEW_MODE,
})

export const setMarkers = (data: any) => ({
	type: SET_MARKERS,
	payload: data,
})

export const setMarkerClass = (markerClass: any) => ({
	type: SET_MARKER_CLASS,
	payload: markerClass,
})

export const setAllOffers = (data: any) => ({
	type: SET_ALL_OFFERS,
	payload: data,
})

export const setGoogleMap = (map: any) => ({
	type: SET_MAP,
	payload: map,
})

export const setOffersList = (list: OfferType[]) => ({
	type: SET_OFFERS_LIST,
	payload: list,
})

export const setParams = (params: ParamsType) => ({
	type: SET_PARAMS,
	payload: params,
})
