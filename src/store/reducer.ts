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
	offers: JSON.parse(localStorage.offers || null) || offerListDemo,
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
			localStorage.setItem(
				'darkMode',
				JSON.stringify(!state.darkMode)
			)
			return {
				...state,
				darkMode: !state.darkMode,
			}
		case SET_OFFERS:
			localStorage.setItem(
				'offers',
				JSON.stringify(action.payload)
			)
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
