import React from 'react'
import styled from 'styled-components'
import Typography from '../../helpers/Typography'
import {
	Business,
	People,
	Note,
	ShowChart,
	Timelapse,
} from '@material-ui/icons'

const MyBusinessIcon = styled(Business)`
	color: rgb(255, 82, 82);
`
const MyShowChartIcon = styled(ShowChart)`
	color: rgb(102, 187, 106);
`
const MyPeopleIcon = styled(People)`
	color: rgb(251, 140, 0);
`
const MyNoteIcon = styled(Note)`
	color: rgb(171, 71, 188);
	transform: rotate(-90deg);
`
const MyTimelapseIcon = styled(Timelapse)`
	color: rgb(68, 138, 255);
`

export const ICON_SIZE = 'small'
const InfoLabel = ({
	icon,
	title,
}: {
	icon: number
	title: string | number
}) => {
	function switchIcons() {
		switch (icon) {
			case 1:
				return {
					icon: <MyBusinessIcon fontSize={ICON_SIZE} />,
					title: 'Company name',
				}
			case 2:
				return {
					icon: <MyPeopleIcon fontSize={ICON_SIZE} />,
					title: 'Company size',
				}
			case 3:
				return {
					icon: <MyNoteIcon fontSize={ICON_SIZE} />,
					title: 'EMP. type',
				}
			case 4:
				return {
					icon: <MyShowChartIcon fontSize={ICON_SIZE} />,
					title: 'EXP. lvl',
				}
			case 5:
				return {
					icon: <MyTimelapseIcon fontSize={ICON_SIZE} />,
					title: 'Added',
				}
		}
	}

	return (
		<Container>
			<IconWrapper>{switchIcons()?.icon}</IconWrapper>
			{/* @ts-ignore */}
			<Typography color='title' fWeight='400'>
				{title}
			</Typography>
			<Typography
				color='span'
				// @ts-ignore
				fontSize='0.7rem'
				fWeight='400'
				margin='0.1875em 0'
			>
				{switchIcons()?.title}
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
	margin: 0 0.3125em;
	padding: 1.25em 0.3125em;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		box-shadow: none;
		flex: 1 0 calc(50% - 2px);
		margin: 0.0625em;
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
	padding: 0.5em;
`
export default InfoLabel
