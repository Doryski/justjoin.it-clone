import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TechIcon from './TechIcon'
import { Dialog } from '@material-ui/core'
import CustomButton from './CustomButton'
import { connect } from 'react-redux'
import url from '../../helpers/urlFunc'
import { techArray } from '../../helpers/options'
import { InitialStoreState } from '../../store/reducer'
import { Link as RouteLink } from 'react-router-dom'
import { MoreHoriz } from '@material-ui/icons'
import DropdownList from './DropdownList'

const getWidth = () =>
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth

const TechFilters = ({ params }) => {
	const [dialogOpen, setDialogOpen] = useState(false)
	const [mobileView, setMobileView] = useState(getWidth() <= 1025)
	const [listOpen, setListOpen] = useState(false)

	const CUT_TECH_ARRAY = 14
	const onClose = () => {
		setDialogOpen(false)
		setListOpen(false)
	}

	const toggleList = () => {
		setListOpen(!listOpen)
	}

	useEffect(() => {
		const resizeListener = () => {
			setMobileView(getWidth() < 1025 ? true : false)
		}

		window.addEventListener('resize', resizeListener)

		return () => {
			window.removeEventListener('resize', resizeListener)
		}
	}, [])

	const DesktopView = () => (
		<Container>
			<Link to={url({ ...params, tech: null })}>
				{/* @ts-ignore */}
				<AllIconContainer focus={!params.tech}>
					All
				</AllIconContainer>
				<TechName all>All</TechName>
			</Link>
			{techArray.slice(0, CUT_TECH_ARRAY).map(tech => (
				<IconWrapper key={tech}>
					<TechIcon tech={tech} onclick={onClose} />
					<TechName>{tech}</TechName>
				</IconWrapper>
			))}
			{/* 3 dots onClick select Component */}
			<IconWrapper>
				<MoreHoriz onClick={toggleList} />
				<DropdownList
					cutArray={CUT_TECH_ARRAY}
					selectItem={onClose}
					isOpen={listOpen}
					params={params}
				/>
			</IconWrapper>
		</Container>
	)

	const MobileView = () => (
		<>
			<ButtonWrapper>
				<CustomButton
					onclick={() => {
						setDialogOpen(true)
					}}
					active={params.tech}
					icon
				>
					Tech
				</CustomButton>
			</ButtonWrapper>

			<Dialog
				maxWidth='md'
				open={dialogOpen}
				onClose={onClose}
				fullWidth={true}
			>
				<DesktopView />
			</Dialog>
		</>
	)

	return mobileView ? <MobileView /> : <DesktopView />
}
const Container = styled.div`
	display: flex;
	align-items: center;

	flex: 1;

	@media (max-width: 1025px) {
		padding: 1.875em;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}
`

const ButtonWrapper = styled.div`
	margin: 0 0.3125em;
`

const AllIconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.875rem;
	text-transform: none;
	width: 32px;
	min-width: 32px;
	height: 32px;
	line-height: 32px;
	margin-top: 0.3125em;
	color: ${({ theme }) => theme.colors.white};
	border-radius: 50%;
	background: ${({
		focus,
		theme,
	}: {
		focus: boolean
		theme: any
	}) => (focus ? theme.techColors.all : theme.techColors.disabled)};
`

const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`
const TechName = styled.span`
	/* font-size: ${({ all }: { all?: boolean }) =>
		all ? '0.725rem' : '0.6875rem'};
	*/ 
	font-size: 0.6875rem;  
	color: ${({ theme }) => theme.colors.text};
	line-height: 15px;
	text-align: center;
	margin-top: ${({ all }: { all?: boolean }) => (all ? 'auto' : '3px')};
		
`
const Link = styled(RouteLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	margin-right: 0.3125em;
	height: 60px;
	text-align: center;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(TechFilters)
