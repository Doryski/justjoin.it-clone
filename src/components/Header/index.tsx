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
import JustjoinLogo from '../shared/JustjoinLogo'
import Navigation from './Navigation'

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
			<JustjoinLogo />
			<Logo />
			{/* @ts-ignore */}
			<Typography color='span' fWeight='400'>
				#1 Job Board for IT industry in Poland
			</Typography>
			<Navigation />
			<Wrapper>
				<AddOffer />
				<CustomButton
					fWeight='400'
					icon
					pink
					padding='0.125em 0.375em 0.1875em 0.875em'
					margin='0 0.9375em 0 0'
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

const Wrapper = styled.div`
	display: flex;
	height: 38px;
	margin-right: 0.75em;
	align-items: center;
`

const MyMenuIcon = styled(MenuIcon)`
	color: ${({ theme }) => theme.colors.span};
`

export default Header
