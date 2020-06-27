const theme = {
	techColors: {
		disabled:
			'linear-gradient(-90deg, rgb(145, 147, 170), rgb(125, 130, 168))',
		all:
			'linear-gradient(to right, rgb(186, 104, 200), rgb(156, 39, 176))',
		js:
			'linear-gradient(-90deg, rgb(255, 199, 6), rgb(255, 175, 0))',
		html:
			'linear-gradient(-90deg, rgb(255, 125, 80), rgb(253, 93, 33))',
		php:
			'linear-gradient(-90deg, rgb(65, 173, 250), rgb(21, 124, 252))',
		ruby:
			'linear-gradient(-90deg, rgb(239, 83, 80), rgb(244, 67, 54))',
		python:
			'linear-gradient(-90deg, rgb(31, 94, 182), rgb(31, 123, 196))',
		java:
			'linear-gradient(-90deg, rgb(250, 101, 107), rgb(249, 89, 122))',
		net:
			'linear-gradient(-90deg, rgb(63, 197, 230), rgb(79, 164, 253))',
		scala:
			'linear-gradient(-90deg, rgb(248, 100, 104), rgb(241, 70, 76))',
		c:
			'linear-gradient(-90deg, rgb(47, 207, 187), rgb(55, 221, 156))',
		mobile:
			'linear-gradient(-90deg, rgb(224, 79, 134), rgb(186, 74, 141))',
		testing:
			'linear-gradient(-90deg, rgb(137, 219, 84), rgb(101, 175, 53))',
		devops:
			'linear-gradient(-90deg, rgb(82, 102, 225), rgb(129, 102, 224))',
		ux:
			'linear-gradient(-90deg, rgb(255, 183, 77), rgb(255, 152, 0))',
		pm:
			'linear-gradient(-90deg, rgb(128, 203, 196), rgb(77, 182, 172))',
		game:
			'linear-gradient(-90deg, rgb(255, 64, 129), rgb(236, 64, 122))',
		blockchain:
			'linear-gradient(-90deg, rgb(171, 71, 188), rgb(106, 27, 154))',
		security:
			'linear-gradient(-90deg, rgb(83, 109, 254), rgb(13, 71, 161))',
		data:
			'linear-gradient(-90deg, rgb(0, 150, 136), rgb(0, 121, 107))',
		go:
			'linear-gradient(-90deg, rgb(106, 215, 229), rgb(106, 139, 229))',
		sap:
			'linear-gradient(-90deg, rgb(2, 175, 235), rgb(27, 104, 194))',
		other:
			'linear-gradient(-90deg, rgb(236, 76, 182), rgb(212, 75, 213))',
	},
	shadows: {
		card:
			'rgba(0, 0, 0, 0.05) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 1px 5px 0px',
		cardHover:
			'rgba(0, 0, 0, 0.07) 0px 4px 4px 0px, rgba(0, 0, 0, 0.06) 0px 3px 7px 0px',
	},
	breakpoints: {
		xs: '360px',
		s: '500px',
		md: '800px',
	},
}
const lightModeTheme = {
	colors: {
		text: 'rgb(119, 119, 119)',
		title: 'rgb(55, 71, 79)',
		primary: 'rgb(255, 255, 255)',
		secondary: 'rgb(243, 246, 248)',
		divider: 'rgb(229, 234, 243)',
		logo: 'rgb(55, 71, 79)',
		pink: 'rgb(255, 64, 129)',
		opacityPink: 'rgb(204, 0, 102)',
		buttonBackground: 'rgb(255, 255, 255)',
		buttonBackgroundHover: 'rgba(0, 0, 0, 0.08)',
		buttonBorder: 'rgb(228, 232, 240)',
		buttonText: 'rgb(119, 119, 119)',
		salary: 'rgb(30, 198, 108)',
		span: 'rgb(153, 161, 171)',
		white: 'rgb(255,255,255)',
		shadow:
			'rgba(0, 0, 0, 0.05) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 1px 5px 0px',
	},
}
const darkModeTheme = {
	colors: {
		text: 'rgba(255, 255, 255, 0.8)',
		title: 'rgba(255, 255, 255, 0.8)',
		secondary: '#124d21',
		// primary: 'rgb(44, 44, 44)',
		primary: '#165c28',
		// secondary: 'rgb(33, 33, 33)',
		divider: 'rgb(60, 60, 60)',
		logo: 'rgba(255, 255, 255, 0.8)',
		pink: '#4dd43b',
		// pink: 'rgb(255, 103, 156)',
		opacityPink: '#2d8567',
		// opacityPink : 'rgba(240, 98, 146, 0.05)',
		buttonBackground: '#0f752a',
		// buttonBackground:'rgb(57, 57, 57)',
		buttonBackgroundHover: '#0f552a',
		// buttonBackgroundHover:'rgba(0, 0, 0, 0.04)',
		buttonBorder: 'rgb(57, 57, 57)',
		buttonText: 'rgba(255, 255, 255, 0.8)',
		salary: 'rgb(30, 198, 108)',
		span: 'rgb(153, 161, 171)',
		white: 'rgb(255,255,255)',
		shadow: 'rgba(10, 10, 10, 0.1) 0px 2px 18px 10px',
	},
}

export const darkMode = { ...theme, ...darkModeTheme }
export const lightMode = { ...theme, ...lightModeTheme }
