import React from 'react'
import styled from 'styled-components'
import Typography from '../../helpers/Typography'
import BusinessIcon from '@material-ui/icons/Business'
import PeopleIcon from '@material-ui/icons/People'
import NoteIcon from '@material-ui/icons/Note'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import TimelapseIcon from '@material-ui/icons/Timelapse'

const MyBusinessIcon = styled(BusinessIcon)`
	color: rgb(255, 82, 82);
`
const MyShowChartIcon = styled(ShowChartIcon)`
	color: rgb(102, 187, 106);
`
const MyPeopleIcon = styled(PeopleIcon)`
	color: rgb(251, 140, 0);
`
const MyNoteIcon = styled(NoteIcon)`
	color: rgb(171, 71, 188);
	transform: rotate(-90deg);
`
const MyTimelapseIcon = styled(TimelapseIcon)`
	color: rgb(68, 138, 255);
`

const InfoLabel = ({ icon, title }: { icon: any; title: any }) => {
	const iconSwitch = () => {
		switch (icon) {
			case 1:
				return <MyBusinessIcon fontSize='small' />
			case 2:
				return <MyPeopleIcon fontSize='small' />
			case 3:
				return <MyNoteIcon fontSize='small' />
			case 4:
				return <MyShowChartIcon fontSize='small' />
			case 5:
				return <MyTimelapseIcon fontSize='small' />
		}
	}
	const descrSwitch = () => {
		switch (icon) {
			case 1:
				return 'Company name'
			case 2:
				return 'Company size'
			case 3:
				return 'EMP. type'
			case 4:
				return 'EXP. lvl'
			case 5:
				return 'Added'
		}
	}
	return (
		<Container>
			<IconWrapper>{iconSwitch()}</IconWrapper>
			<Typography color='logo' fontSize='0.8rem' fWeight='400'>
				{title}
			</Typography>
			<Typography
				color='logo'
				fontSize='0.7rem'
				fWeight='400'
				margin='3px 0'
			>
				{descrSwitch()}
			</Typography>
		</Container>
	)
}
const Container = styled.div`
	align-items: center;
	background: ${({ theme }) => theme.colors.primary};
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 2px 0px,
		rgba(0, 0, 0, 0.06) 0px 1px 5px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	border-radius: 4px;
	flex: 1 1 0%;
	margin: 0px 5px;
	padding: 20px 5px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		box-shadow: none;
		flex: 1 0 calc(50% - 2px);
		margin: 1px;
	}
`
const IconWrapper = styled.div`
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 2px 0px,
		rgba(0, 0, 0, 0.06) 0px 1px 5px 0px;
	display: flex;
	justify-content: center;
	position: absolute;
	left: 50%;
	top: 0px;
	transform: translate(-50%, -50%);
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 50%;
	padding: 8px;
`
export default InfoLabel
