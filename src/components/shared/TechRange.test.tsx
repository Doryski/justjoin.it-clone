import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import TechRange from './TechRange'

describe('TechRange component', () => {
	it('renders without error', () => {
		const tree = renderer
			.create(
				<ThemeProvider theme={theme}>
					<TechRange range={0} tech='tech' />
				</ThemeProvider>
			)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
