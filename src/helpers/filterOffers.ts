import { OfferType, ParamsType } from '../store/reducer'
import isDefined from './isDefined'
import stringFormat from './stringFormat'

export const f = (
	param: string | number | null | undefined,
	filter: boolean,
	nextParam: boolean = true
) => (!!param ? filter && nextParam : nextParam)

export default function filterOffers(
	offers: OfferType[],
	params: ParamsType
) {
	const { location, tech, from, to, expLvl, search } = params
	const searchParams = isDefined(search) && stringFormat(search)
	const includesSearch = (text: string) =>
		// @ts-ignore
		stringFormat(text).includes(searchParams)
	return offers.filter(offer => {
		const searchFilter =
			includesSearch(offer.slug) ||
			includesSearch(offer.tech) ||
			includesSearch(offer.offerTitle) ||
			includesSearch(offer.companyName) ||
			includesSearch(offer.city) ||
			includesSearch(offer.expLvl) ||
			includesSearch(String(offer.salaryFrom)) ||
			includesSearch(String(offer.salaryTo)) ||
			offer.technology.find(({ tech }) => includesSearch(tech))

		const locationFilter = location === stringFormat(offer.city)
		const techFilter = tech === offer.tech
		// @ts-ignore
		const fromFilter = from <= offer.salaryFrom
		// @ts-ignore
		const toFilter = to >= offer.salaryTo
		const expLvlFilter = expLvl === stringFormat(offer.expLvl)

		const combinedFilters = f(
			location,
			locationFilter,
			f(
				tech,
				techFilter,
				f(
					from,
					fromFilter,
					f(to, toFilter, f(expLvl, expLvlFilter))
				)
			)
		)

		const applyFilter = !!search ? searchFilter : combinedFilters
		return applyFilter
	})
}
