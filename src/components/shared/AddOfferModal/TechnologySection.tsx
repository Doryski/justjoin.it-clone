import React from 'react'
import { techLvlOptions } from '../../../helpers/options'
import SelectComponent from '../CustomSelect'
import InputComponent from '../CustomInput'
import styled from 'styled-components'
import { Wrapper, InputsContainer } from './StyledComponents'
import { useForm } from 'react-hook-form'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

const TechnologySection = ({ techSize, setTechSize }) => {
	const { register, errors } = useForm()

	const techSizeHandler = (action: string = '') => {
		setTechSize(action === 'add' ? techSize + 1 : techSize - 1)
	}

	return (
		<InputsContainer>
			{[...Array(techSize)].map((v, index) => (
				<Wrapper key={index}>
					<InputComponent
						max='35'
						type='text'
						id={`tech_${index}`}
						label='Technology'
						register={register}
						required
						errors={errors}
					/>

					<SelectComponent
						id={`tech_lvl_${index}`}
						label='Tech level'
						register={register}
						required
						errors={errors}
						options={techLvlOptions}
					/>
				</Wrapper>
			))}

			<IconsWrapper>
				{techSize < 10 && (
					<IconWrapper
						onClick={() => techSizeHandler('add')}
					>
						<MyAddIcon />
					</IconWrapper>
				)}

				{techSize > 1 && (
					<IconWrapper onClick={() => techSizeHandler()}>
						<MyRemoveIcon />
					</IconWrapper>
				)}
			</IconsWrapper>
		</InputsContainer>
	)
}
const IconsWrapper = styled.div`
	padding: 5px 10px;
	border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	margin: auto;
`
const IconWrapper = styled.div`
	padding: 5px 10px;
	border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 3px;
	width: 50%;
	cursor: pointer;
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
`

const MyAddIcon = styled(AddIcon)`
	color: ${({ theme }) => theme.colors.span};
`
const MyRemoveIcon = styled(RemoveIcon)`
	color: ${({ theme }) => theme.colors.span};
`
export default TechnologySection
