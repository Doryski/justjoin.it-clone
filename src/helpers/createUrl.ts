import ParamsType from '../types/ParamsType'

export default function createUrl({
	location,
	tech,
	expLvl,
	from,
	to,
	sort,
	search,
}: ParamsType) {
	const techType = tech
		? tech.toLowerCase().replace(/\.\+/, '')
		: null

	return [
		location
			? `/${location}`
			: to || from || expLvl || techType
			? '/all'
			: '',
		techType
			? `/${techType}`
			: to || from || expLvl
			? '/all'
			: '',
		expLvl ? `/${expLvl}` : to || from ? '/all' : '',
		from ? `/${from / 1000}k` : to ? '/-' : '',
		to ? `/${to / 1000}k` : '',
		sort ? `?sort=${sort}` : '',
		search ? `?search=${search}` : '',
	].join('')
}
