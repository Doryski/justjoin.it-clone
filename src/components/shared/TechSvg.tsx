import Js from '../../icons/javascript'
import Html from '../../icons/html'
import Php from '../../icons/php'
import Ruby from '../../icons/ruby'
import Python from '../../icons/python'
import Java from '../../icons/java'
import Net from '../../icons/net'
import Scala from '../../icons/scala'
import C from '../../icons/c'
import Mobile from '../../icons/mobile'
import Testing from '../../icons/testing'
import DevOps from '../../icons/devops'
import Ux from '../../icons/uxui'
import Pm from '../../icons/pm'
import Game from '../../icons/game'
import Analytics from '../../icons/analytics'
import Security from '../../icons/security'
import Data from '../../icons/data'
import Go from '../../icons/go'
import Sap from '../../icons/sap'
import Support from '../../icons/support'
import Other from '../../icons/other'

const TechSvg = ({ tech }: { tech: string | null }) => {
	switch (tech) {
		case 'js':
			return Js
		case 'html':
			return Html
		case 'php':
			return Php
		case 'ruby':
			return Ruby
		case 'python':
			return Python
		case 'java':
			return Java
		case 'net':
			return Net
		case 'scala':
			return Scala
		case 'c':
			return C
		case 'mobile':
			return Mobile
		case 'testing':
			return Testing
		case 'devops':
			return DevOps
		case 'uxui':
			return Ux
		case 'pm':
			return Pm
		case 'game':
			return Game
		case 'analytics':
			return Analytics
		case 'security':
			return Security
		case 'data':
			return Data
		case 'go':
			return Go
		case 'sap':
			return Sap
		case 'support':
			return Support
		case 'other':
			return Other
		default:
			return null
	}
}

export default TechSvg
