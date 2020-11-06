import offerListDemo from '../testHelpers/offerListDemo'
import {
    setCurrentOffer,
    setMap,
    setOffers,
    setParams,
    toggleThemeMode,
} from './actions'
import { initialState } from './reducer'
import {
    CHANGE_VIEW_MODE,
    SET_CURRENT_OFFER,
    SET_MAP,
    SET_OFFERS,
    SET_PARAMS,
} from './types'

describe('actions', () => {
    describe('toggleThemeMode function', () => {
        it('works correctly', () => {
            const OUTPUT = { type: CHANGE_VIEW_MODE }
            expect(toggleThemeMode()).toEqual(OUTPUT)
        })
    })

    describe('setOffers function', () => {
        it('works correctly', () => {
            const INPUT = offerListDemo

            const OUTPUT = { type: SET_OFFERS, payload: INPUT }
            expect(setOffers(INPUT)).toEqual(OUTPUT)
        })
    })

    describe('setParams function', () => {
        it('works correctly', () => {
            const INPUT = initialState.params

            const OUTPUT = { type: SET_PARAMS, payload: INPUT }
            expect(setParams(INPUT)).toEqual(OUTPUT)
        })
    })

    describe('setMap function', () => {
        it('works correctly', () => {
            const INPUT = initialState.map

            const OUTPUT = { type: SET_MAP, payload: INPUT }
            expect(setMap(INPUT)).toEqual(OUTPUT)
        })
    })

    describe('setCurrentOffer function', () => {
        it('works correctly', () => {
            const INPUT = offerListDemo[0]

            const OUTPUT = { type: SET_CURRENT_OFFER, payload: INPUT }
            expect(setCurrentOffer(INPUT)).toEqual(OUTPUT)
        })
    })
})
