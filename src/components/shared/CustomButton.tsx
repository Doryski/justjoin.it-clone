import React from 'react'
import styled from 'styled-components'
import Typography from './Typography'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { ICON_SIZE } from './InfoLabel'
import { textColors } from '../../theme'

type CustomButtonProps = {
	children: any
	active?: boolean
	fontSize?: string
	icon?: boolean
	onclick?: VoidFunction
	padding?: string
	margin?: string
	pink?: boolean
	fWeight?: string
	minWidth?: string
	isOpen?: boolean
	display?: string
	type?: 'button' | 'submit' | 'reset'
}

type StyledButtonProps = {
	pink?: boolean
	active?: boolean
	icon?: boolean
	padding?: string
	margin?: string
	minWidth?: string
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
	minWidth,
	isOpen,
	display,
	type,
}: CustomButtonProps) => {
	return (
		<Button
			active={active}
			onClick={onclick}
			padding={padding}
			margin={margin}
			pink={pink}
			icon={icon}
			minWidth={minWidth}
			type={type}
		>
			<Typography
				color={
					active
						? textColors.pink
						: pink
						? textColors.white
						: textColors.text
				}
				fontSize={fontSize}
				fWeight={fWeight}
				display={display}
			>
				{children}
			</Typography>
			{icon && (
				<IconWrapper>
					<StyledExpandMoreIcon
						pink={pink}
						active={active}
						isOpen={isOpen}
					/>
				</IconWrapper>
			)}
		</Button>
	)
}
export const Button = styled.button<StyledButtonProps>`
	border: 1px solid
		${({ theme, active, pink }) =>
			active || pink
				? theme.colors.pink
				: theme.colors.buttonBorder};
	border-radius: 20px;
	padding: ${({ padding, icon }) =>
		icon
			? padding || '0.125em 0.5em 0.125em 0.75em'
			: padding || '0.125em 0.75em'};
	margin: ${({ margin }) => margin || '0'};
	background: ${({ theme, active, pink }) =>
		active
			? theme.colors.buttonBackgroundActive
			: pink
			? theme.colors.pink
			: theme.colors.buttonBackground};
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: ${({ minWidth }) => minWidth || 'auto'};
	min-width: ${({ minWidth }) => minWidth || 'none'};
	transition: all 0.4s;
	&:hover {
		background: ${({ theme, pink }) =>
			pink
				? theme.colors.opacityPink
				: theme.colors.buttonBackgroundHover};
		border-color: ${({ theme, pink }) =>
			pink
				? theme.colors.opacityPink
				: theme.colors.buttonBorder};
	}
`
export const IconWrapper = styled.div`
	margin-top: 0.1875em;
	transition: all 0.4s;
`
export const StyledExpandMoreIcon = styled(
	({
		active,
		pink,
		isOpen,
		...props
	}: {
		active?: boolean
		pink?: boolean
		isOpen?: boolean
	}) =>
		isOpen ? (
			<ExpandLess {...props} fontSize={ICON_SIZE} />
		) : (
			<ExpandMore {...props} fontSize={ICON_SIZE} />
		)
)`
	color: ${({ theme, active, pink }) =>
		active
			? theme.colors.pink
			: pink
			? theme.colors.white
			: theme.colors.text};
`
export default CustomButton
