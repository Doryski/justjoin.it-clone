import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '../../helpers/Typography'

type CustomButtonProps = {
	children: any
	active?: boolean
	fontSize?: number
	icon?: boolean
	onclick?: VoidFunction
	padding?: string
	margin?: string
	pink?: boolean
	fWeight?: string
	minWidth?: string
}

type StyledButtonProps = {
	theme?: any
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
}: CustomButtonProps) => {
	return (
		<Button
			//@ts-ignore
			active={active}
			onClick={onclick}
			padding={padding}
			margin={margin}
			pink={pink}
			icon={icon}
			minWidth={minWidth}
		>
			<Typography
				color={active ? 'pink' : pink ? 'white' : 'text'}
				//@ts-ignore
				fontSize={fontSize}
				fWeight={fWeight}
			>
				{children}
			</Typography>
			{icon && (
				<IconWrapper>
					<MyExpandMoreIcon
						// @ts-ignore
						pink={pink}
						active={active}
					/>
				</IconWrapper>
			)}
		</Button>
	)
}
const Button = styled.button`
	border: 1px solid
		${({ theme, active, pink }: StyledButtonProps) =>
			active || pink
				? theme.colors.pink
				: theme.colors.buttonBorder};
	border-radius: 18px;
	padding: ${({ padding, icon }: StyledButtonProps) =>
		icon ? padding || '2px 8px 2px 12px' : padding || '2px 12px'};
	margin: ${({ margin }: StyledButtonProps) => margin || '0px'};
	background: ${({ theme, active, pink }: StyledButtonProps) =>
		active
			? theme.colors.buttonBackgroundActive
			: pink
			? theme.colors.pink
			: theme.colors.buttonBackground};
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: ${({ minWidth }: StyledButtonProps) => minWidth || 'auto'};
	min-width: ${({ minWidth }: StyledButtonProps) =>
		minWidth || 'none'};
	transition: all 0.4s;
	&:hover {
		background: ${({ theme, pink }: StyledButtonProps) =>
			pink
				? theme.colors.opacityPink
				: theme.colors.buttonBackgroundHover};
		border-color: ${({ theme, pink }: StyledButtonProps) =>
			pink
				? theme.colors.opacityPink
				: theme.colors.buttonBorder};
	}
`
const IconWrapper = styled.div`
	margin-top: 3px;
	transition: all 0.4s;
`
const MyExpandMoreIcon = styled(({ active, pink, ...props }) => (
	<ExpandMoreIcon {...props} />
))`
	color: ${({ theme, active, pink }: StyledButtonProps) =>
		active
			? theme.colors.pink
			: pink
			? theme.colors.white
			: theme.colors.text};
`
export default CustomButton
