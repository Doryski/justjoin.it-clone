import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import CustomSelect from './CustomSelect'
import { useForm } from 'react-hook-form'

const OPTIONS: any[] = []

describe('CustomSelect component', () => {
	it('renders without error', () => {
		const { register, errors } = useForm()

		const tree = renderer
			.create(
				<ThemeProvider theme={theme}>
					<CustomSelect
						name='name'
						label='label'
						register={register}
						required={true}
						options={OPTIONS}
						errors={errors}
					/>
				</ThemeProvider>
			)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
