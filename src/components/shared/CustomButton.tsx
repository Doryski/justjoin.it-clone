import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '../../helpers/Typography'

interface CustomButtonProps {
	children: any
	active?: any
	fontSize?: any
	icon?: boolean
	onclick?: any
	padding?: any
	margin?: any
	pink?: boolean
	fWeight?: any
}

const CustomButton = ({
	children,
	active,
	fontSize,
	icon = false,
	onclick,
	padding,
	margin,
	pink = false,
	fWeight,
}: CustomButtonProps) => {
	return (
		<Button
			active={active}
			onClick={onclick}
			padding={padding}
			margin={margin}
			pink={pink}
			icon={icon}
		>
			<Typography
				color={
					active ? 'pink' : pink ? 'white' : 'textButton'
				}
				fontSize={fontSize}
				fWeight={fWeight}
			>
				{children}
			</Typography>
			{icon && (
				<IconWrapper>
					<MyExpandMoreIcon pink={pink} active={active} />
				</IconWrapper>
			)}
		</Button>
	)
}
const Button = styled.button`
	border: 1px solid
		${({
			theme,
			active,
			pink,
		}: {
			theme: any
			active: boolean
			pink: boolean
		}) =>
			active || pink
				? theme.colors.pink
				: theme.colors.buttonBorder};
	border-radius: 18px;
	padding: ${(props: any) =>
		props.icon
			? props.padding || '2px 8px 2px 12px'
			: props.padding || '2px 12px'};
	margin: ${(props: any) => props.margin || '0px'};
	background: ${({
		theme,
		active,
		pink,
	}: {
		theme: any
		active: boolean
		pink: boolean
	}) =>
		active
			? theme.colors.buttonBackgroundActive
			: pink
			? theme.colors.pink
			: theme.colors.buttonBackground};
	display: flex;
	align-items: center;
	transition: all 0.4s;
	&:hover {
		background: ${({
			theme,
			pink,
		}: {
			theme: any
			pink: boolean
		}) =>
			pink
				? theme.colors.opacityPink
				: theme.colors.buttonBackgroundHover};
		border-color: ${({
			theme,
			pink,
		}: {
			theme: any
			pink: boolean
		}) =>
			pink
				? theme.colors.opacityPink
				: theme.colors.buttonBorder};
	}
`
const IconWrapper = styled.div`
	margin-top: 3px;
	transition: all 0.4s;
`
const MyExpandMoreIcon = styled(ExpandMoreIcon)`
	color: ${({
		theme,
		active,
		pink,
	}: {
		theme: any
		active: boolean
		pink: boolean
	}) =>
		active
			? theme.colors.pink
			: pink
			? theme.colors.white
			: theme.colors.buttonText};
`
export default CustomButton
