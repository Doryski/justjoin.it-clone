import React from 'react'
import { useForm } from 'react-hook-form'
import _ from 'lodash'
import expLvlOptions from '../../helpers/expLvlOptions'
import empTypeOptions from '../../helpers/empTypeOptions'
import technologies from '../../helpers/technologies'
import locations from '../../helpers/locations'
import InputComponent from '../shared/CustomInput'
import SelectComponent from '../shared/CustomSelect'
import {
	Wrapper,
	ErrorMessage,
	InputsContainer,
} from './StyledComponents'
import {
	InputWrapper,
	Label,
	StyledInput,
} from '../shared/StyledInputs'
import {
	VAL_IS_ZERO_ERR,
	VAL_TOO_BIG_ERR,
	FIELD_REQUIRED_ERR,
} from '../../helpers/utils'

const InfoSection = () => {
	const { register, errors } = useForm()
	const SALARY_STEP = 100
	const checkMinValue = (value: number) =>
		value > 0 || VAL_IS_ZERO_ERR
	const checkMaxValue = (value: number) =>
		value < 100000 || VAL_TOO_BIG_ERR
	const registerNumber = register({
		required: FIELD_REQUIRED_ERR,
		validate: {
			lessThan: value => checkMinValue(value),
			moreThan: value => checkMaxValue(value),
		},
	})

	return (
		<InputsContainer>
			<SelectComponent
				name='tech'
				label='Technology'
				register={register}
				required
				errors={errors}
				options={technologies}
			/>

			<InputComponent
				type='text'
				name='offerTitle'
				label='Offer title'
				register={register}
				required
				errors={errors}
			/>
			<InputComponent
				type='text'
				name='companyName'
				label='Company name'
				register={register}
				required
				errors={errors}
			/>

			<SelectComponent
				name='city'
				label='City'
				register={register}
				required
				errors={errors}
				options={locations}
			/>
			<InputComponent
				type='text'
				name='street'
				label='Street'
				register={register}
				required
				errors={errors}
			/>
			<InputWrapper>
				<Label>Company size</Label>
				<StyledInput
					type='number'
					name='companySize'
					ref={registerNumber}
				/>
				{errors.companySize && (
					<ErrorMessage>
						{errors.companySize.message}
					</ErrorMessage>
				)}
			</InputWrapper>

			<Wrapper>
				<InputWrapper>
					<Label>Salary from</Label>
					<StyledInput
						type='number'
						name='salaryFrom'
						step={SALARY_STEP}
						ref={registerNumber}
					/>
					{errors.salaryFrom && (
						<ErrorMessage>
							{errors.salaryFrom.message}
						</ErrorMessage>
					)}
				</InputWrapper>

				<InputWrapper>
					<Label>Salary to</Label>
					<StyledInput
						type='number'
						name='salaryTo'
						step={SALARY_STEP}
						ref={registerNumber}
					/>
					{errors.salaryTo && (
						<ErrorMessage>
							{errors.salaryTo.message}
						</ErrorMessage>
					)}
				</InputWrapper>
			</Wrapper>

			<Wrapper>
				<SelectComponent
					name='empType'
					label='EMP type'
					register={register}
					required
					errors={errors}
					options={empTypeOptions}
				/>

				<SelectComponent
					name='expLvl'
					label='EXP level'
					register={register}
					required
					errors={errors}
					options={expLvlOptions.map(lvl =>
						_.capitalize(lvl)
					)}
				/>
			</Wrapper>
		</InputsContainer>
	)
}

export default InfoSection
