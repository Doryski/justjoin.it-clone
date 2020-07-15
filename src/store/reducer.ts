import {
	CHANGE_VIEW_MODE,
	SET_MARKERS,
	SET_MARKER_CLASS,
	SET_ALL_OFFERS,
	SET_MAP,
	SET_OFFERS_LIST,
	SET_PARAMS,
} from './types'

export type ParamsType = {
	location?: string
	tech?: string
	expLvl?: string
	from?: number
	to?: number
	sort?: string
}

export type InitialStoreState = {
	darkMode?: boolean
	markerClass: any
	markers: any[]
	loading: boolean
	allOffers: any[]
	offersList: any[]
	map?: string
	params?: ParamsType
}

const initialState: InitialStoreState = {
	darkMode: JSON.parse(localStorage.darkMode || false),
	markerClass: null,
	markers: null,
	loading: true,
	allOffers: null,
	offersList: null,
	map: null,
	params: {
		location: null,
		tech: null,
		expLvl: null,
		from: null,
		to: null,
		sort: null,
	},
}

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case CHANGE_VIEW_MODE:
			localStorage.setItem(
				'darkMode',
				JSON.stringify(!state.darkMode)
			)
			return {
				...state,
				darkMode: !state.darkMode,
			}

		case SET_MARKERS:
			return {
				...state,
				markers: action.payload,
			}
		case SET_MARKER_CLASS:
			return {
				...state,
				markerClass: action.payload,
			}
		case SET_ALL_OFFERS:
			return {
				...state,
				loading: false,
				allOffers: action.payload,
			}
		case SET_MAP:
			return {
				...state,
				map: action.payload,
			}

		case SET_OFFERS_LIST:
			return {
				...state,
				offersList: action.payload,
			}
		case SET_PARAMS:
			return {
				...state,
				params: action.payload,
			}

		default:
			return state
	}
}

export default reducer
