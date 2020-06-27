export const mapStyle = [
	{
		featureType: 'administrative.neighborhood',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'labels.text',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.business',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'labels.icon',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road.local',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'transit',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'labels.text',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
]

export const initMapOptions = () => {
	const myLatlng = new global.google.maps.LatLng(
		`52.07361700`,
		'19.200'
	)
	const mapOptions = {
		zoom: 6,
		center: myLatlng,
		disableDefaultUI: true,
		styles: mapStyle,
	}
	return mapOptions
}
