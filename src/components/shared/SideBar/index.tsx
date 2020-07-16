import React from 'react'
import styled from 'styled-components'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import Switch from '@material-ui/core/Switch'
import { changeViewMode } from '../../../store/actions'
import { connect } from 'react-redux'
import Logo from '../Logo'
import { InitialStoreState } from '../../../store/reducer'
import SidebarList from './SidebarList'

const SideBar = ({ darkMode }: { darkMode?: boolean }) => {
	return (
		<Container>
			<LogoWrapper>
				<Logo center />
			</LogoWrapper>
			<SidebarList />
			<ToggleWrapper>
				<MyWbSunnyIcon />
				<Switch
					checked={darkMode}
					onChange={changeViewMode}
					color='default'
					inputProps={{
						'aria-label': 'checkbox with default color',
					}}
				/>
				<MyNightsStayIcon />
			</ToggleWrapper>
		</Container>
	)
}
const Container = styled.div`
	min-width: 300px;
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
`
const LogoWrapper = styled.div`
	width: 240px;
	margin: 0 auto;
	padding: 0.9375em 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`

const ToggleWrapper = styled.div`
	display: flex;
	align-items: center;
`
const MyWbSunnyIcon = styled(WbSunnyIcon)`
	color: rgba(0, 0, 0, 0.54);
`
const MyNightsStayIcon = styled(NightsStayIcon)`
	color: rgba(0, 0, 0, 0.54);
`
const mapStateToProps = ({ darkMode }: InitialStoreState) => ({
	darkMode,
})

export default connect(mapStateToProps, { changeViewMode })(SideBar)
