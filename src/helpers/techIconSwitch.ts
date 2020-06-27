import js from '../static/js.png'
import html from '../static/html.png'
import php from '../static/php.png'
import ruby from '../static/ruby.png'
import python from '../static/python.png'
import java from '../static/java.png'
import net from '../static/net.png'
import c from '../static/c.png'
import scala from '../static/scala.png'
import mobile from '../static/mobile.png'
import devops from '../static/devops.png'
import data from '../static/data.png'
import other from '../static/other.png'

export default (tech: string) => {
	switch (tech) {
		case 'js':
			return js
		case 'html':
			return html
		case 'php':
			return php
		case 'ruby':
			return ruby
		case 'python':
			return python
		case 'java':
			return java
		case 'net':
			return net
		case 'c':
			return c
		case 'scala':
			return scala
		case 'mobile':
			return mobile
		case 'devops':
			return devops
		case 'data':
			return data
		case 'other':
			return other
	}
}
