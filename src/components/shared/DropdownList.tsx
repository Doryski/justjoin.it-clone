import React from 'react'
import TechIcon from './TechIcon'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import url from '../../helpers/urlFunc'
import { techArray } from '../../helpers/options'
import Typography from '../../helpers/Typography'

const DropdownList = ({ selectItem, isOpen, params, cutArray }) => {
	return (
		<StyledList isOpen={isOpen}>
			{techArray.slice(cutArray).map(tech => (
				<Link
					key={tech}
					to={url({
						...params,
						tech: params.tech === tech ? null : tech,
					})}
				>
					<StyledItem>
						<TechIcon tech={tech} onclick={selectItem} />
						<Typography margin='0 0 0 10px'>
							{tech}
						</Typography>
					</StyledItem>
				</Link>
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
