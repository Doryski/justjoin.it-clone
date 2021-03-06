import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import InputFilter from './InputFilter'

describe('InputFilter component', () => {
	it('renders without error', () => {
		const tree = renderer
			.create(
				<ThemeProvider theme={theme}>
					<InputFilter />
				</ThemeProvider>
			)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
