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
			<MyIcon type={type} />
			<Typography
				color='text'
				// @ts-ignore
				fontSize='.75rem'
				fWeight='300'
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
const MyIcon = styled(({ type }: { type: 'business' | 'location' }) =>
	type === 'business' ? (
		<BusinessIcon fontSize={ICON_SIZE} />
	) : type === 'location' ? (
		<LocationOnIcon fontSize={ICON_SIZE} />
	) : (
		<People fontSize={ICON_SIZE} />
	)
)`
	color: ${({ theme }) => theme.colors.span};
	margin-right: 0.25em;
	height: 1px;
`
export default CustomLabel
