import React from 'react'
import { useForm } from 'react-hook-form'
import _ from 'lodash'
import expLvlOptions from '../../../helpers/expLvlOptions'
import empTypeOptions from '../../../helpers/empTypeOptions'
import technologies from '../../../helpers/technologies'
import locations from '../../../helpers/locations'
import InputComponent from '../CustomInput'
import SelectComponent from '../CustomSelect'
import {
	Wrapper,
	ErrorMessage,
	InputsContainer,
} from './StyledComponents'
import { InputWrapper, Label, StyledInput } from '../StyledInputs'

const InfoSection = () => {
	const { register, errors } = useForm()
	const SALARY_STEP = 100
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
					ref={register({
						required: 'This field is required.',
						// validate by regex
						// pattern: /.../,
						validate: {
							lessThan: value =>
								value > 0 ||
								'Company size cannot equal 0.',
							moreThan: value =>
								value < 100000 ||
								'Number is too big.',
						},
					})}
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
						ref={register({
							required: 'This field is required.',
							validate: {
								lessThan: value =>
									value > 0 ||
									'Company size should be more than 0.',
								moreThan: value =>
									value < 120000 ||
									"It's too big number.",
							},
						})}
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
						ref={register({
							required: 'This field is required.',
							validate: {
								lessThan: value =>
									value > 0 ||
									'Company size should be more than 0.',
								moreThan: value =>
									value < 120000 ||
									"It's too big number.",
							},
						})}
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
