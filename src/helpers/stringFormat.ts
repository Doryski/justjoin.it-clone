import _, { isNull } from 'lodash'

export default (string: string | null | undefined) =>
	isNull(string)
		? null
		: _.camelCase(string)
				.toLocaleLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')
				.replace(/\u0142/g, 'l')
