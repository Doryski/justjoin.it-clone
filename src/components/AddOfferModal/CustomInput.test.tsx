import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import CustomInput from './CustomInput'
import { useForm } from 'react-hook-form'

describe('CustomInput component', () => {
	it('renders without error', () => {
		const { register, errors } = useForm()

		const tree = renderer
			.create(
				<ThemeProvider theme={theme}>
					<CustomInput
						name='name'
						label='label'
						register={register}
						required
						errors={errors}
						type='text'
					/>
				</ThemeProvider>
			)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
