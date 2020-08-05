import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import SideBar from '../shared/SideBar'
import AddOffer from '../shared/AddOfferModal/AddOffer'
import Typography from '../../helpers/Typography'
import CustomButton from '../shared/CustomButton'
import JustjoinLogo from '../shared/JustjoinLogo'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

const Header = () => {
	const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

	const handleMenuIconClick = () => {
		setIsSideBarOpen(!isSideBarOpen)
	}

	const DrawerComponent = () => (
		<Drawer
			anchor='right'
			open={isSideBarOpen}
			onClose={handleMenuIconClick}
		>
			<SideBar />
		</Drawer>
	)

	return (
		<Container>
			<Link to='/'>
				<LogoWrapper>
					<JustjoinLogo />
				</LogoWrapper>
			</Link>
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
					padding='0.375em 0.625em 0.375em 1.125em'
					margin='0 0.9375em 0 0'
				>
					Sign in
				</CustomButton>
				<IconButton onClick={handleMenuIconClick}>
					<MyMenuIcon />
				</IconButton>
			</Wrapper>
			<DrawerComponent />
		</Container>
	)
}
export const Container = styled.header`
	min-height: 68px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => theme.colors.primary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
	width: 100%;
`

export const LogoWrapper = styled.div`
	display: inline-block;
	width: 120px;
	float: left;
	margin: 7px 15px 0px 25px;
`
export const Wrapper = styled.div`
	display: flex;
	height: 38px;
	margin-right: 0.75em;
	align-items: center;
`

export const MyMenuIcon = styled(MenuIcon)`
	color: ${({ theme }) => theme.colors.span};
`

export default Header
