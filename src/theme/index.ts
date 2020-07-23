const theme = {
	techColors: {
		disabled: 'rgb(125, 130, 168)',
		all:
			'linear-gradient(-90deg, rgb(186, 104, 200), rgb(156, 39, 176))',
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
			'linear-gradient(-90deg, rgb(103, 37, 114), rgb(150, 70, 163))',
		scala:
			'linear-gradient(-90deg, rgb(248, 100, 104), rgb(241, 70, 76))',
		c:
			'linear-gradient(-90deg, rgb(47, 207, 187), rgb(55, 221, 156))',
		mobile:
			'linear-gradient(-90deg, rgb(224, 79, 134), rgb(186, 74, 141))',
		testing:
			'linear-gradient(-90deg, rgb(0, 150, 136), rgb(0, 121, 107))',
		devops:
			'linear-gradient(-90deg, rgb(82, 102, 225), rgb(129, 102, 224))',
		ux:
			'linear-gradient(-90deg, rgb(255, 183, 77), rgb(255, 152, 0))',
		pm:
			'linear-gradient(-90deg, rgb(128, 203, 196), rgb(77, 182, 172))',
		game:
			'linear-gradient(-90deg, rgb(255, 64, 129), rgb(236, 64, 122))',
		analytics:
			'linear-gradient(-90deg, rgb(59, 89, 152), rgb(112, 140, 199))',
		security:
			'linear-gradient(-90deg, rgb(83, 109, 254), rgb(13, 71, 161))',
		data:
			'linear-gradient(-90deg, rgb(137, 219, 84), rgb(101, 175, 53))',
		go:
			'linear-gradient(-90deg, rgb(106, 215, 229), rgb(106, 139, 229))',
		sap:
			'linear-gradient(-90deg, rgb(2, 175, 235), rgb(27, 104, 194))',
		support:
			'linear-gradient(-90deg, rgb(212, 104, 222), rgb(82, 77, 225))',
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
		sm: '500px',
		md: '800px',
	},
	fontSize: {},
	fontWeight: {},
	distance: {},
}
const lightModeTheme = {
	colors: {
		text: 'rgb(119, 119, 119)',
		title: 'rgb(55, 71, 79)',
		primary: 'rgb(255, 255, 255)',
		secondary: 'rgb(243, 246, 248)',
		divider: 'rgb(229, 234, 243)',
		pink: 'rgb(255, 64, 129)',
		opacityPink: 'rgb(204, 0, 102)',
		buttonBackground: 'rgb(255, 255, 255)',
		buttonBackgroundHover: 'rgb(245, 245, 245)',
		buttonBackgroundActive: 'rgba(255, 64, 129, 0.08)',
		buttonBorder: 'rgb(228, 232, 240)',
		salary: 'rgb(30, 198, 108)',
		span: 'rgb(153, 161, 171)',
		white: 'rgb(255, 255, 255)',
		shadow:
			'rgba(0, 0, 0, 0.05) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 1px 5px 0px',
	},
}

const darkModeTheme = {
	colors: {
		text: 'rgba(255, 255, 255, 0.8)',
		title: 'rgba(255, 255, 255, 0.8)',
		primary: 'rgb(44, 44, 44)',
		secondary: 'rgb(33, 33, 33)',
		divider: 'rgba(0, 0, 0, 0.12)',
		pink: 'rgb(255, 103, 156)',
		opacityPink: 'rgba(240, 98, 146, 0.05)',
		buttonBackground: 'rgb(57, 57, 57)',
		buttonBackgroundHover: 'rgba(0, 0, 0, 0.04)',
		buttonBackgroundActive: 'rgba(240, 98, 146, 0.05)',
		buttonBorder: 'rgb(57, 57, 57)',
		salary: 'rgb(30, 198, 108)',
		span: 'rgb(153, 161, 171)',
		white: 'rgb(255, 255, 255)',
		shadow: 'rgba(10, 10, 10, 0.1) 0px 2px 18px 10px',
	},
}

export const darkMode = { ...theme, ...darkModeTheme }
export const lightMode = { ...theme, ...lightModeTheme }
export type ThemeType = typeof darkMode
