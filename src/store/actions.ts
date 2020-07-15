import {
	CHANGE_VIEW_MODE,
	SET_MARKERS,
	SET_MARKER_CLASS,
	SET_ALL_OFFERS,
	SET_MAP,
	SET_OFFERS_LIST,
	SET_PARAMS,
} from './types'

export const changeViewMode = () => ({
	type: CHANGE_VIEW_MODE,
})

export const setMarkers = (data: string) => ({
	type: SET_MARKERS,
	payload: data,
})

export const setMarkerClass = (markerClass: string) => ({
	type: SET_MARKER_CLASS,
	payload: markerClass,
})

export const setAllOffers = (data: any) => ({
	type: SET_ALL_OFFERS,
	payload: data,
})

export const setGoogleMap = (map: string) => ({
	type: SET_MAP,
	payload: map,
})

export const setOffersList = (list: string) => ({
	type: SET_OFFERS_LIST,
	payload: list,
})

export const setParams = (params: string) => ({
	type: SET_PARAMS,
	payload: params,
})
