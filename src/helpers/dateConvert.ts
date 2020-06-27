// moment().today().diff(moment(d), 'days')
export default (d: string) => {
	const date = new Date(d)
	return Math.round((Date.now() - +date) / (1000 * 3600 * 24))
}
