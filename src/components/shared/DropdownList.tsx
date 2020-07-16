import React from 'react'
import TechIcon from './TechIcon'
import styled from 'styled-components'
import { techArray } from '../../helpers/options'
import Typography from '../../helpers/Typography'
import { ParamsType } from '../../store/reducer'

type DropdownListPropsTypes = {
	selectItem: VoidFunction
	isOpen: boolean
	params: ParamsType
	cutArray: number
}

const DropdownList = ({
	selectItem,
	isOpen,
	params,
	cutArray,
}: DropdownListPropsTypes) => {
	return (
		<StyledList isOpen={isOpen}>
			{techArray.slice(cutArray).map(tech => (
				<StyledItem key={tech}>
					<TechIcon
						params={params}
						tech={tech}
						onclick={selectItem}
					/>
					{/* @ts-ignore */}
					<Typography margin='0 0 0 0.625em'>
						{tech}
					</Typography>
				</StyledItem>
			))}
		</StyledList>
	)
}

const StyledList = styled.ul`
	display: ${({ isOpen }: { isOpen: boolean }) =>
		isOpen ? 'block' : 'none'};
	position: absolute;
	top: 0;
	left: -50px;
	cursor: pointer;
	list-style-type: none;
	background: ${({ theme }) => theme.colors.buttonBackground};
	z-index: 20;
	max-height: 30vh;
	overflow-y: auto;
	width: 150px;
	padding: 0.5em 0;
`
const StyledItem = styled.li`
	display: flex;
	justify-content: flex-start;
	padding: 0.5em 0.7em;
	border-bottom: 1px solid
		${({ theme }) => theme.colors.buttonBorder};
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
`

export default DropdownList
