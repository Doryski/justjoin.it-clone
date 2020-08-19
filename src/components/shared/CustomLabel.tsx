import React from 'react'
import styled from 'styled-components'
import Typography from './Typography'
import BusinessIcon from '@material-ui/icons/Business'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { People } from '@material-ui/icons'
import theme, { textColors } from '../../theme'

const CustomLabel = ({
	label,
	type,
}: {
	label: string
	type: 'business' | 'location'
}) => {
	return (
		<Wrapper>
			<IconWrapper>
				{type === 'business' ? (
					<BusinessIcon />
				) : type === 'location' ? (
					<LocationOnIcon />
				) : (
					<People />
				)}
			</IconWrapper>
			<Typography
				color={textColors.span}
				fontSize={theme.fontSize.small}
				fWeight={theme.fontWeight[400]}
			>
				{label}
			</Typography>
		</Wrapper>
	)
}

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 0.3125em;
`

export const IconWrapper = styled.div`
	color: ${({ theme }) => theme.colors.span};
	margin-right: 0.25em;
	svg {
		font-size: 0.9rem;
	}
`
export default CustomLabel
