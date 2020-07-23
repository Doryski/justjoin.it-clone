import moment from 'moment'

export default (
	date: string,
	unit: moment.unitOfTime.Diff = 'days'
) => moment().diff(moment(date, 'DD.MM.YYYY'), unit)
