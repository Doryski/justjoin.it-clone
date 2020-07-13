import _ from 'lodash'

export default (string: string) =>
	_.camelCase(string)
		.toLocaleLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\u0142/g, 'l')
