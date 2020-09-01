import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Label from './Label'

describe('Label component', () => {
	it('renders without error', () => {
		const tree = renderer
			.create(
				<ThemeProvider theme={theme}>
					<Label active>children</Label>
				</ThemeProvider>
			)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
