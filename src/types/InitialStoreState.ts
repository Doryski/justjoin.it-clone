import OfferType from './OfferType'
import ParamsType from './ParamsType'

type InitialStoreState = {
    darkMode?: boolean
    offers: OfferType[]
    params: ParamsType
    map: { coordinates: number[]; zoom: number }
    currentOffer: OfferType | null
}
export default InitialStoreState
