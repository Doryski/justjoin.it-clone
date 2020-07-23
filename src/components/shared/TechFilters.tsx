import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TechIcon from './TechIcon'
import { Dialog } from '@material-ui/core'
import CustomButton from './CustomButton'
import { connect } from 'react-redux'
import createUrl from '../../helpers/createUrl'
import { techArray } from '../../helpers/options'
import { InitialStoreState, ParamsType } from '../../store/reducer'
import { Link as RouteLink } from 'react-router-dom'
import { MoreHoriz } from '@material-ui/icons'
import { DropdownList, DropdownListItem } from './DropdownList'
import Typography from '../../helpers/Typography'
import { setParams } from '../../store/actions'
import stringFormat from '../../helpers/stringFormat'

const getWidth = () =>
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth

const TechFilters = ({
	params,
	setParams,
}: {
	params: ParamsType
	setParams: (
		params: ParamsType
	) => {
		type: string
		payload: ParamsType
	}
}) => {
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
	const getParams = () => ({
		all: { ...params, tech: null },
		tech: (tech: string | null | undefined) => ({
			...params,
			tech: params.tech === tech ? null : tech,
		}),
	})

	const DesktopView = () => (
		<Container>
			<Link
				to={createUrl(getParams().all)}
				onClick={() => {
					setParams(getParams().all)
				}}
			>
				{/* @ts-ignore */}
				<AllIconContainer focus={!params.tech}>
					All
				</AllIconContainer>
				<TechName all>All</TechName>
			</Link>
			{techArray.slice(0, CUT_TECH_ARRAY).map(tech => (
				<RouteLink
					to={createUrl(
						getParams().tech(stringFormat(tech))
					)}
					onClick={() => {
						setParams(
							getParams().tech(stringFormat(tech))
						)
					}}
					key={tech}
				>
					<IconWrapper>
						<TechIcon
							tech={stringFormat(tech)}
							onclick={onClose}
						/>
						<TechName>{tech}</TechName>
					</IconWrapper>
				</RouteLink>
			))}
			<IconWrapper>
				<MyMoreHorizIcon onClick={toggleList} />
				<DropdownList isOpen={listOpen}>
					{techArray
						.slice(CUT_TECH_ARRAY)
						.map((tech: string) => (
							<RouteLink
								to={createUrl(getParams().tech(tech))}
								key={tech}
							>
								<DropdownListItem
									onClick={() => {
										setParams(
											getParams().tech(tech)
										)
									}}
								>
									<TechIcon
										// @ts-ignore
										tech={tech}
										onclick={onClose}
									/>
									<Typography
										// @ts-ignore
										fWeight='400'
										margin='1em 0 0 0.3em'
									>
										{tech}
									</Typography>
								</DropdownListItem>
							</RouteLink>
						))}
				</DropdownList>
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
					active={Boolean(params.tech)}
					icon
					isOpen={dialogOpen}
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
	margin: -0.15em 0 0 0;
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
	width: 36px;
	min-width: 36px;
	height: 36px;
	line-height: 36px;
	margin-top: 0.45em;
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
	font-size: 0.6875rem;
	color: ${({ theme }) => theme.colors.text};
	line-height: 15px;
	text-align: center;
	margin-top: ${({ all }: { all?: boolean }) =>
		all ? '.1em' : '-5px'};
`
const Link = styled(RouteLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	margin-right: 0.3125em;
	height: 64px;
	text-align: center;
`
const MyMoreHorizIcon = styled(MoreHoriz)`
	margin: -10px 0 0 0.125em;
	color: ${({ theme }) => theme.colors.text};
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps, { setParams })(TechFilters)
