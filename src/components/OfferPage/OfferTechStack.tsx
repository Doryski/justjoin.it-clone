import React from 'react'
import styled from 'styled-components'
import TechRange from '../shared/TechRange'
import Typography from '../shared/Typography'
import theme, { textColors } from '../../theme'
import { Wrapper } from './StyledComponents'
import OfferType from '../../types/OfferType'

const OfferTechStack = ({
	technology,
}: {
	technology: OfferType['technology']
}) => {
	return (
		<TechStackContainer>
			<Typography
				color={textColors.title}
				fWeight={theme.fontWeight[500]}
				fontSize={theme.fontSize.xl}
				align='flex-start'
				margin='0.625em 1.25em'
			>
				Tech stack
			</Typography>
			<Wrapper>
				{technology?.map(({ tech, techLvl }) => (
					<TechRange
						key={tech}
						range={techLvl}
						tech={tech}
					/>
				))}
			</Wrapper>
		</TechStackContainer>
	)
}
export const TechStackContainer = styled.div`
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	margin-top: 2.5em;
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		margin-top: 10.625em;
	}
`
export default OfferTechStack
