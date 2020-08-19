import React from 'react'
import styled from 'styled-components'
import TechIcon from '../TechIcon'
import createUrl from '../../../helpers/createUrl'
import technologies from '../../../helpers/technologies'
import { Link as RouteLink } from 'react-router-dom'
import { DropdownList, DropdownListItem } from '../DropdownList'
import Typography from '../Typography'
import stringFormat from '../../../helpers/stringFormat'
import ParamsType from '../../../types/ParamsType'
import theme from '../../../theme'
import GetParamsType from '../../../types/GetParamsType'
import HandleDialogType from '../../../types/HandleDialogType'
import { setParams } from '../../../store/actions'
import { connect } from 'react-redux'
import { MoreHoriz } from '@material-ui/icons'
import InitialStoreState from '../../../types/InitialStoreState'

interface DesktopViewProps {
	getParams: GetParamsType
	params: ParamsType
	handleDialog: HandleDialogType
	isListOpen: boolean
	setParams: (params: ParamsType) => void
}

const CUT_TECH_ARRAY = 14

const DesktopView = ({
	getParams,
	params,
	handleDialog,
	isListOpen,
	setParams,
}: DesktopViewProps) => (
	<Container>
		<Link
			to={createUrl(getParams.all)}
			onClick={() => {
				setParams(getParams.all)
			}}
		>
			<AllIconContainer focus={!params.tech}>
				All
			</AllIconContainer>
			<TechName all>All</TechName>
		</Link>
		{technologies.slice(0, CUT_TECH_ARRAY).map(tech => (
			<RouteLink
				to={createUrl(getParams.tech(stringFormat(tech)))}
				onClick={() => {
					setParams(getParams.tech(stringFormat(tech)))
				}}
				key={tech}
			>
				<IconWrapper>
					<TechIcon
						tech={stringFormat(tech)}
						handleClick={handleDialog.close}
					/>
					<TechName>{tech}</TechName>
				</IconWrapper>
			</RouteLink>
		))}
		<IconWrapper>
			<StyledMoreHorizIcon onClick={handleDialog.toggle} />
			<DropdownList
				isOpen={isListOpen}
				onMouseLeave={handleDialog.close}
			>
				{technologies
					.slice(CUT_TECH_ARRAY)
					.map((tech: string) => (
						<RouteLink
							to={createUrl(
								getParams.tech(stringFormat(tech))
							)}
							key={tech}
							onClick={() => {
								setParams(
									getParams.tech(stringFormat(tech))
								)
								handleDialog.close()
							}}
						>
							<DropdownListItem>
								<TechIcon tech={stringFormat(tech)} />
								<Typography
									fWeight={theme.fontWeight[400]}
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
export const Container = styled.div`
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

export const AllIconContainer = styled.div<{ focus?: boolean }>`
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
	background: ${({ focus, theme }) =>
		focus ? theme.techColors.all : theme.techColors.disabled};
`

export const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`
export const TechName = styled.span<{ all?: boolean }>`
	font-size: 0.6875rem;
	color: ${({ theme }) => theme.colors.text};
	line-height: 15px;
	text-align: center;
	margin-top: ${({ all }) => (all ? '.1em' : '-5px')};
`
export const Link = styled(RouteLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	margin-right: 0.3125em;
	height: 64px;
	text-align: center;
`
export const StyledMoreHorizIcon = styled(MoreHoriz)`
	margin: -10px 0 0 0.125em;
	color: ${({ theme }) => theme.colors.text};
	cursor: pointer;
	border-radius: 50%;
	width: 1.25em !important;
	height: 1.25em !important;
	padding: 0.125em;
	transition: background 0.3s !important;
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})
export default connect(mapStateToProps, { setParams })(DesktopView)
