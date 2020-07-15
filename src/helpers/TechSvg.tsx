import Js from '../icons/javascript'
import Html from '../icons/html'
import Php from '../icons/php'
import Ruby from '../icons/ruby'
import Python from '../icons/python'
import Java from '../icons/java'
import Net from '../icons/net'
import Scala from '../icons/scala'
import C from '../icons/c'
import Mobile from '../icons/mobile'
import Testing from '../icons/testing'
import DevOps from '../icons/devops'
import Ux from '../icons/ux'
import Pm from '../icons/pm'
import Game from '../icons/game'
import Analytics from '../icons/analytics'
import Security from '../icons/security'
import Data from '../icons/data'
import Go from '../icons/go'
import Sap from '../icons/sap'
import Support from '../icons/support'
import Other from '../icons/other'

const TechSvg = ({ tech }: { tech: string }) => {
	switch (tech) {
		case 'JS':
			return Js
		case 'HTML':
			return Html
		case 'PHP':
			return Php
		case 'Ruby':
			return Ruby
		case 'Python':
			return Python
		case 'Java':
			return Java
		case '.Net':
			return Net
		case 'Scala':
			return Scala
		case 'C':
			return C
		case 'Mobile':
			return Mobile
		case 'Testing':
			return Testing
		case 'DevOps':
			return DevOps
		case 'UX/UI':
			return Ux
		case 'PM':
			return Pm
		case 'Game':
			return Game
		case 'Analytics':
			return Analytics
		case 'Security':
			return Security
		case 'Data':
			return Data
		case 'Go':
			return Go
		case 'SAP':
			return Sap
		case 'Support':
			return Support
		case 'Other':
			return Other
		default:
			return null
	}
}

export default TechSvg
