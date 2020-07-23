import React from 'react'
import styled from 'styled-components'
import Typography from '../../helpers/Typography'
import BusinessIcon from '@material-ui/icons/Business'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { ICON_SIZE } from './InfoLabel'
import { People } from '@material-ui/icons'

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
				color='span'
				// @ts-ignore
				fontSize='.7rem'
				fWeight='400'
			>
				{label}
			</Typography>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 0.3125em;
`

const IconWrapper = styled.div`
	color: ${({ theme }) => theme.colors.span};
	margin-right: 0.25em;
	svg {
		font-size: 0.9rem;
	}
`
export default CustomLabel
