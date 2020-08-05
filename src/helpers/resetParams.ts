import { ParamsType } from '../store/reducer'

export default function resetParams(params: ParamsType) {
	return {
		...params,
		location: null,
		tech: null,
		expLvl: null,
		from: null,
		to: null,
		search: null,
	}
}
