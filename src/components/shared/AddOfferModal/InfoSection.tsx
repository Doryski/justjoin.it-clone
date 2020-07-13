import React from 'react'
import { useForm } from 'react-hook-form'
import {
	techOptions,
	expLvlOptions,
	empTypeOptions,
} from '../../../helpers/options'
import {
	InputComponent,
	SelectComponent,
	InputWrapper,
	Label,
	StyledTextField,
} from '../CustomInputs'
import {
	Wrapper,
	ErrorMessage,
	InputsContainer,
} from './StyledComponents'

const InfoSection = () => {
	const { register, errors } = useForm()

	return (
		<InputsContainer>
			<SelectComponent
				id='tech'
				label='Technology'
				register={register}
				required
				errors={errors}
				options={techOptions}
			/>

			<InputComponent
				type='text'
				id='offer_title'
				label='Offer title'
				register={register}
				required
				errors={errors}
			/>
			<InputComponent
				type='text'
				id='company_name'
				label='Company name'
				register={register}
				required
				errors={errors}
			/>

			<InputComponent
				type='text'
				id='city'
				label='City'
				register={register}
				required
				errors={errors}
			/>
			<InputComponent
				type='text'
				id='street'
				label='Street'
				register={register}
				required
				errors={errors}
			/>
			<InputWrapper>
				<Label>Company size</Label>
				<StyledTextField
					type='number'
					name='companySize'
					ref={register({
						required: 'This field is required.',
						validate: {
							lessThan: value =>
								value > 0 ||
								'Company size should be more than 0.',
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
					<StyledTextField
						type='number'
						name='salaryFrom'
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
					<StyledTextField
						type='number'
						name='salaryTo'
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
					id='emp_type'
					label='EMP type'
					register={register}
					required
					errors={errors}
					options={empTypeOptions}
				/>

				<SelectComponent
					id='exp_lvl'
					label='EXP level'
					register={register}
					required
					errors={errors}
					options={expLvlOptions}
				/>
			</Wrapper>
		</InputsContainer>
	)
}

export default InfoSection
