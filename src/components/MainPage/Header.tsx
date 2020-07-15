import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import SideBar from '../shared/SideBar'
import AddOffer from '../shared/AddOfferModal/AddOffer'
import Logo from '../shared/Logo'
import Typography from '../../helpers/Typography'
import CustomButton from '../shared/CustomButton'

const navList = [
	{ title: 'Offers', active: true },
	{ title: 'Brands', active: false },
	{ title: 'News', active: false },
	{ title: 'Matchmaking', active: false },
	{ title: 'Select', active: false },
]

const Header = () => {
	const [openDrawer, setOpenDrawer] = useState(false)

	const openDrawerHandler = () => {
		setOpenDrawer(!openDrawer)
	}

	const DrawerComponent = () => (
		<Drawer
			anchor='right'
			open={openDrawer}
			onClose={openDrawerHandler}
		>
			<SideBar />
		</Drawer>
	)

	return (
		<Container>
			<Logo />
			{/* @ts-ignore */}
			<Typography color='span' fWeight='400'>
				#1 Job Board for IT industry in Poland
			</Typography>
			<NavList>
				{navList.map(item => (
					<NavItem key={item.title}>
						<Typography
						//@ts-ignore
							fWeight='600'
							color={item.active ? 'pink' : 'span'}
							margin='0 6px'
							minWidth='64px'
							hoverColor='rgb(244, 143, 177)'
						>
							{item.title}
						</Typography>
					</NavItem>
				))}
			</NavList>
			<Wrapper>
				<AddOffer />
				<CustomButton
					fWeight='400'
					icon
					pink
					padding='2px 6px 3px 14px'
					margin='0 15px 0 0'
				>
					Sign in
				</CustomButton>
				<IconButton onClick={openDrawerHandler}>
					<MyMenuIcon />
				</IconButton>
			</Wrapper>
			<DrawerComponent />
		</Container>
	)
}
const Container = styled.header`
	min-height: 68px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => theme.colors.primary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
	width: 100%;
`

const NavList = styled.ul`
	display: flex;
	justify-content: flex-end;
	flex: 1 1 0%;
`
const NavItem = styled.li`
	display: block;
	cursor: pointer;
`
const Wrapper = styled.div`
	display: flex;
	height: 38px;
	margin-right: 12px;
	align-items: center;
`

const MyMenuIcon = styled(MenuIcon)`
	color: ${({ theme }) => theme.colors.span};
`

export default Header
