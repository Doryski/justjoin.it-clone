import React from 'react'
import styled from 'styled-components'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import Switch from '@material-ui/core/Switch'
import { toggleThemeMode } from '../../store/actions'
import { connect } from 'react-redux'
import SidebarList from './SidebarList'
import JustjoinLogo from '../shared/JustjoinLogo'
import { Link } from 'react-router-dom'
import InitialStoreState from '../../types/InitialStoreState'

const SideBar = ({
	darkMode,
	toggleThemeMode,
}: {
	darkMode?: boolean
	toggleThemeMode: VoidFunction
}) => (
	<Container>
		<Link to='/'>
			<LogoWrapper>
				<JustjoinLogo />
			</LogoWrapper>
		</Link>
		<SidebarList />
		<ToggleWrapper>
			<WbSunnyIcon />
			<Switch
				checked={darkMode}
				onChange={toggleThemeMode}
				color='default'
				inputProps={{
					'aria-label': 'checkbox with default color',
				}}
			/>
			<NightsStayIcon />
		</ToggleWrapper>
	</Container>
)

export const Container = styled.div`
	min-width: 300px;
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
`
export const LogoWrapper = styled.div`
	width: 120px;
	box-sizing: content-box;
	padding: 0.9375em 4em;
	margin: auto;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`

export const ToggleWrapper = styled.div`
	display: flex;
	align-items: center;
	color: rgba(0, 0, 0, 0.54);
`

const mapStateToProps = ({ darkMode }: InitialStoreState) => ({
	darkMode,
})

export default connect(mapStateToProps, { toggleThemeMode })(SideBar)
