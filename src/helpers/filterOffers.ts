import stringFormat from './stringFormat'
import OfferType from '../types/OfferType'
import ParamsType from '../types/ParamsType'

export const f = (
    param: string | number | null | undefined,
    filter: boolean,
    nextParam: boolean = true
) => (!!param ? filter && nextParam : nextParam)

export default function filterOffers(offers: OfferType[], params: ParamsType) {
    const { location, tech, from, to, expLvl, search } = params
    const searchParams = !!search ? stringFormat(search) : ''
    const includesSearch = (text: string) =>
        stringFormat(text).includes(searchParams)
    return offers.filter((offer) => {
        const {
            slug,
            tech: offerTech,
            offerTitle,
            companyName,
            city,
            expLvl: offerExplvl,
            salaryFrom,
            salaryTo,
            technology,
        } = offer
        const searchFilter =
            includesSearch(slug) ||
            includesSearch(offerTech) ||
            includesSearch(offerTitle) ||
            includesSearch(companyName) ||
            includesSearch(city) ||
            includesSearch(offerExplvl) ||
            includesSearch(String(salaryFrom)) ||
            includesSearch(String(salaryTo)) ||
            technology.find(({ tech }) => includesSearch(tech))

        const locationFilter = location === stringFormat(city)
        const techFilter = tech === offerTech
        const fromFilter = !!from ? from <= salaryFrom : true
        const toFilter = !!to ? to >= salaryTo : true
        const expLvlFilter = expLvl === stringFormat(offerExplvl)

        const combinedFilters = f(
            location,
            locationFilter,
            f(
                tech,
                techFilter,
                f(from, fromFilter, f(to, toFilter, f(expLvl, expLvlFilter)))
            )
        )

        const applyFilter = !!search ? searchFilter : combinedFilters
        return applyFilter
    })
}
