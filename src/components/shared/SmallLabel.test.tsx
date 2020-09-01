import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import SmallLabel from './SmallLabel'

describe('SmallLabel component', () => {
	it('renders without error', () => {
		const tree = renderer
			.create(
				<ThemeProvider theme={theme}>
					<SmallLabel>children</SmallLabel>
				</ThemeProvider>
			)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
