import React from 'react'
import styled from 'styled-components'
import sideBarItems from './SideBarItems'
import Typography from '../Typography'
import theme from '../../../theme'

const SidebarList = () => (
	<List>
		{sideBarItems.map(item => (
			<ListItem key={item.title}>
				<IconWrapper>{item.icon}</IconWrapper>
				<TitleWrapper>
					<Typography fWeight={theme.fontWeight[400]}>
						{item.title}
					</Typography>
				</TitleWrapper>
			</ListItem>
		))}
	</List>
)

export const List = styled.ul`
	width: 100%;
	padding-bottom: 0.625em;
`

export const ListItem = styled.li`
	display: flex;
	padding: 0.5em 1em 0.5em 2em;
	height: 56px;
	width: 100%;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.title};
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
`

export const IconWrapper = styled.div`
	display: inline-flex;
	margin: auto 0;
`
export const TitleWrapper = styled.div`
	margin: auto 0 auto 2em;
`

export default SidebarList
