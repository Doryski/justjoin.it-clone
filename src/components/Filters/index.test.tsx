import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Filters from '.'

describe('Filters component', () => {
	it('renders without error', () => {
		const tree = renderer
			.create(
				<ThemeProvider theme={theme}>
					<Filters />
				</ThemeProvider>
			)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
