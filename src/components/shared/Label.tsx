import React from 'react'
import styled from 'styled-components'
import Typography from '../../helpers/Typography'
import BusinessIcon from '@material-ui/icons/Business'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { ICON_SIZE } from './InfoLabel'

export const BusinessLabel = ({ label }: { label: string }) => {
	return (
		<Wrapper>
			<MyBusinessIcon fontSize={ICON_SIZE} />
			<Typography
				as='span'
				color='text'
				fontSize='12px'
				fWeight='300'
			>
				{label}
			</Typography>
		</Wrapper>
	)
}

export const LocationLabel = ({ label }: { label: string }) => {
	return (
		<Wrapper>
			<MyLocationOnIcon fontSize={ICON_SIZE} />
			<Typography
				as='span'
				color='text'
				fontSize='12px'
				fWeight='300'
			>
				{label}
			</Typography>
		</Wrapper>
	)
}

const Label = ({
	children,
	active,
}: {
	children: any
	active: boolean
}) => {
	return (
		// @ts-ignore
		<Container active={active}>
			<Typography color='text' as='span'>
				{children}
			</Typography>
		</Container>
	)
}
const Container = styled.div`
	padding: 10px 35px;
	background: ${({
		theme,
		active,
	}: {
		theme: any
		active: boolean
	}) => (active ? theme.colors.secondary : theme.colors.primary)};
	position: relative;
	border-radius: 20px 20px 0 0;
`
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 5px;
`
const MyBusinessIcon = styled(BusinessIcon)`
	color: ${({ theme }) => theme.colors.span};
	margin-right: 4px;
	height: 1px;
`
const MyLocationOnIcon = styled(LocationOnIcon)`
	color: ${({ theme }) => theme.colors.span};
	margin-right: 4px;
	height: 1px;
`
export default Label
