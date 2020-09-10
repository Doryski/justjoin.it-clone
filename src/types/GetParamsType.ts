import ParamsType from './ParamsType'

type GetParamsType = {
	all: ParamsType
	tech: (tech: string | null | undefined) => ParamsType
}
export default GetParamsType
