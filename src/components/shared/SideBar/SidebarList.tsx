import React from 'react'
import styled from 'styled-components'
import sideBarItems from './SideBarItems'
import Typography from '../../../helpers/Typography'

const SidebarList = () => {
	return (
		<List>
			{sideBarItems.map(item => (
				<ListItem key={item.title}>
					<IconWrapper>{item.icon}</IconWrapper>
					<TitleWrapper>
						<Typography
							color='sideBarText'
							// @ts-ignore
							fWeight='400'
						>
							{item.title}
						</Typography>
					</TitleWrapper>
				</ListItem>
			))}
		</List>
	)
}

const List = styled.ul`
	width: 100%;
	padding-bottom: 0.625em;
`

const ListItem = styled.li`
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

const IconWrapper = styled.div`
	display: inline-flex;
	margin: auto 0;
`
const TitleWrapper = styled.div`
	margin: auto 0 auto 2em;
`

export default SidebarList
