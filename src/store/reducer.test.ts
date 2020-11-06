import offerListDemo from '../testHelpers/offerListDemo'
import reducer, { initialState } from './reducer'
import {
    CHANGE_VIEW_MODE,
    SET_MAP,
    SET_OFFERS,
    SET_PARAMS,
} from './types'

describe('reducer', () => {
    describe('type CHANGE_VIEW_MODE', () => {
        it('works correctly', () => {
            const STATE = { ...initialState, darkMode: false }
            const ACTION = { type: CHANGE_VIEW_MODE }
            const OUTPUT = { ...initialState, darkMode: true }

            expect(reducer(STATE, ACTION)).toEqual(OUTPUT)
        })
    })

    describe('type SET_OFFERS', () => {
        it('works correctly', () => {
            const STATE = initialState
            const ACTION = {
                type: SET_OFFERS,
                payload: offerListDemo,
            }
            const OUTPUT = { ...initialState, offers: offerListDemo }

            expect(reducer(STATE, ACTION)).toEqual(OUTPUT)
        })
    })

    describe('type SET_PARAMS', () => {
        it('works correctly', () => {
            const STATE = initialState
            const ACTION = {
                type: SET_PARAMS,
                payload: {
                    location: 'Warszawa',
                    tech: 'js',
                    expLvl: 'junior',
                    from: 2000,
                    to: 3000,
                    sort: 'sal-down',
                    search: null,
                },
            }
            const OUTPUT = { ...initialState, params: ACTION.payload }

            expect(reducer(STATE, ACTION)).toEqual(OUTPUT)
        })
    })

    describe('type SET_MAP', () => {
        it('works correctly', () => {
            const STATE = initialState
            const ACTION = {
                type: SET_MAP,
                payload: {
                    coordinates: [0, 0],
                    zoom: 6,
                },
            }
            const OUTPUT = { ...initialState, map: ACTION.payload }

            expect(reducer(STATE, ACTION)).toEqual(OUTPUT)
        })
    })

    describe('type SET_CURRENT_OFFER', () => {
        it('works correctly', () => {
            const STATE = initialState
            const ACTION = {
                type: SET_MAP,
                payload: offerListDemo[0],
            }
            const OUTPUT = {
                ...initialState,
                currentOffer: ACTION.payload,
            }

            expect(reducer(STATE, ACTION)).toEqual(OUTPUT)
        })
    })
})
