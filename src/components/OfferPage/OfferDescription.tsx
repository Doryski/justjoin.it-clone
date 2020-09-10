import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Typography from '../shared/Typography'
import theme, { textColors } from '../../theme'
import { Wrapper } from './StyledComponents'
import useSetInnerHTML from '../../helpers/useDescription'

const OfferDescription = ({
	description,
}: {
	description: string
}) => {
	const descriptionRef = useRef<HTMLDivElement>(null!)

	useSetInnerHTML(descriptionRef, description)

	return (
		<DescriptionContainer>
			<Typography
				color={textColors.title}
				fWeight={theme.fontWeight[500]}
				fontSize={theme.fontSize.xl}
				align='flex-start'
				margin='0.625em 1.25em'
			>
				Description
			</Typography>

			<Wrapper>
				<DescriptionContent ref={descriptionRef} />
			</Wrapper>
		</DescriptionContainer>
	)
}
export const DescriptionContainer = styled.div`
	margin: 1.875em 0;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		margin: 0.9375em 0;
	}
`
export const DescriptionContent = styled.div`
	padding: 0 0.9375em;
	color: ${({ theme }) => theme.colors.title};
`
export default OfferDescription
