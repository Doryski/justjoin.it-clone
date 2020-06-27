import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '../../helpers/Typography'

interface CustomButtonProps {
	children: any
	active?: any
	fontSize?: any
	icon?: any
	onclick?: any
	padding?: any
}

const CustomButton = ({
	children,
	active,
	fontSize,
	icon,
	onclick,
	padding,
}: CustomButtonProps) => {
	return (
		<Button active={active} onClick={onclick} padding={padding}>
			<Typography
				color={active ? 'pink' : 'textButton'}
				fontSize={fontSize}
			>
				{children}
			</Typography>
			{icon && (
				<IconWrapper>
					<MyExpandMoreIcon active={active} />
				</IconWrapper>
			)}
		</Button>
	)
}
const Button = styled.button`
	border: 1px solid
		${({ theme, active }: { theme: any; active: any }) =>
			active ? theme.colors.pink : theme.colors.buttonBorder};
	border-radius: 18px;
	padding: ${(props: any) => props.padding || '2px 15px'};
	background: ${({ theme, active }: { theme: any; active: any }) =>
		active
			? theme.colors.buttonBackground
			: theme.colors.buttonBackground};
	display: flex;
	align-items: center;
	transition: all 0.3s;
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
`
const IconWrapper = styled.div`
	margin: 5px 0 0 15px;
	transition: all 0.4s;
`
const MyExpandMoreIcon = styled(ExpandMoreIcon)`
	color: ${({ theme, active }: { theme: any; active: any }) =>
		active ? theme.colors.pink : theme.colors.buttonText};
`
export default CustomButton
