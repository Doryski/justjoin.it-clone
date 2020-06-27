interface UrlFuncTypes {
	location: any
	tech: any
	expLvl: any
	from: any
	to: any
	sort: any
}

export default function urlFunc({
	location,
	tech,
	expLvl,
	from,
	to,
	sort,
}: UrlFuncTypes) {
	return [
		location
			? `/${location}`
			: to || from || expLvl || tech
			? '/all'
			: '',
		tech ? `/${tech}` : to || from || expLvl ? '/all' : '',
		expLvl ? `/${expLvl}` : to || from ? '/all' : '',
		from ? `/${from / 1000}k` : to ? '/-' : '',
		to ? `/${to / 1000}k` : '',
		sort ? '?sort=' + sort : '',
	].join('')
}
