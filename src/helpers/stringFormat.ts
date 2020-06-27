import _ from 'lodash'

export default (str: string) =>
	_.camelCase(str)
		.toLocaleLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\u0142/g, 'l')
