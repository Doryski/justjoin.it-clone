import ParamsType from '../types/ParamsType'

const resetParams = (params: ParamsType) => ({
	...params,
	location: null,
	tech: null,
	expLvl: null,
	from: null,
	to: null,
	search: null,
})
export default resetParams
