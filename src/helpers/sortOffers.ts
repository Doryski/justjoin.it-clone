import sortOptions from './sortOptions'
import moment from 'moment'
import DATE_FORMAT from './dateFormat'
import OfferType from '../types/OfferType'
import ParamsType from '../types/ParamsType'

export default function sortOffers(
	offers: OfferType[],
	params: ParamsType
) {
	return [...offers].sort((a, b) => {
		if (params.sort === sortOptions.salaryUp.id)
			return a.salaryFrom > b.salaryFrom ? 1 : -1
		if (params.sort === sortOptions.salaryDown.id)
			return a.salaryFrom < b.salaryFrom ? 1 : -1
		return moment(a.dateAdd, DATE_FORMAT).diff(
			moment(b.dateAdd, DATE_FORMAT)
		) < 0
			? 1
			: -1
	})
}
