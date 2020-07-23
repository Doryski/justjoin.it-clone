export const MAPTILER_ACCESS_TOKEN = 'Ul2DFpf7S2qrxVlIzimV'
export const MAP_ID = 'streets'

export default function mapTilerProvider(
	x: string,
	y: string,
	z: string,
	dpr: number
) {
	return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
		dpr >= 2 ? '@2x' : ''
	}.png?key=${MAPTILER_ACCESS_TOKEN}`
}
