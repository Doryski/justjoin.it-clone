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
	padding-top: 10px;
`

const ListItem = styled.li`
	display: flex;
	padding: 8px 16px 8px 32px;
	height: 56px;
	width: 100%;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.sideBarText};
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
	margin: auto 0 auto 32px;
`

export default SidebarList
