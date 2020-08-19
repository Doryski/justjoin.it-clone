import React from 'react'
import styled from 'styled-components'
import Typography from '../shared/Typography'
import navLinks from '../../helpers/navLinks'
import theme, { textColors } from '../../theme'

const Navigation = () => (
	<NavList>
		{navLinks.map(({ title, active }) => (
			<NavItem key={title}>
				<Typography
					fWeight={theme.fontWeight[600]}
					color={active ? textColors.pink : textColors.span}
					margin='0 0.375em'
					minWidth='64px'
					hoverColor={
						active ? 'none' : textColors.lightPink
					}
				>
					{title}
				</Typography>
			</NavItem>
		))}
	</NavList>
)

export const NavList = styled.ul`
	display: flex;
	justify-content: flex-end;
	flex: 1 1 0%;
`
export const NavItem = styled.li`
	display: block;
	cursor: pointer;
`

export default Navigation
