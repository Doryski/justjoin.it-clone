import ParamsType from './ParamsType'

export default interface GetParamsType {
	all: ParamsType
	tech: (tech: string | null | undefined) => ParamsType
}
