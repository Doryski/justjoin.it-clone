import moment from 'moment'
import DATE_FORMAT from './dateFormat'

export default (
	date: string,
	unit: moment.unitOfTime.Diff = 'days'
) => moment().diff(moment(date, DATE_FORMAT), unit)
