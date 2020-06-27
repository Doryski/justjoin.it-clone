import React from 'react'
import styled from 'styled-components'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import Switch from '@material-ui/core/Switch'
import { changeViewMode } from '../../store/actions'
import { connect } from 'react-redux'
import Logo from '../shared/Logo'
import { InitialStoreState } from '../../store/reducer'

const SideBar = ({
	darkMode,
	changeViewMode,
}: {
	darkMode: any
	changeViewMode: any
}) => {
	return (
		<Container>
			<LogoWrapper>
				<Logo center />
			</LogoWrapper>

			<ToggleWrapper>
				<MyWbSunnyIcon color='error' />
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
	padding: 15px 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`

const ToggleWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 15px 0;
`
const MyWbSunnyIcon = styled(WbSunnyIcon)({
	color: 'rgb(158, 158, 158)',
})
const MyNightsStayIcon = styled(NightsStayIcon)`
	color: rgb(158, 158, 158);
`
const mapStateToProps = ({ darkMode }: InitialStoreState) => ({
	darkMode,
})

export default connect(mapStateToProps, { changeViewMode })(SideBar)
