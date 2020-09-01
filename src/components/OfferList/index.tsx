import React from 'react'
import styled from 'styled-components'
import OfferCard from '../OfferCard'
import { connect } from 'react-redux'
import ListHeader from './ListHeader'
import filterOffers from '../../helpers/filterOffers'
import sortOffers from '../../helpers/sortOffers'
import InitialStoreState from '../../types/InitialStoreState'

const OfferList = ({
	params,
	offers,
}: {
	params: InitialStoreState['params']
	offers: InitialStoreState['offers']
}) => {
	const filteredOffers = filterOffers(offers, params)
	const sortedOffers = sortOffers(filteredOffers, params)

	return (
		<Container>
			<ListHeader />
			<ContainerScroll>
				<ListContainer>
					{
						// loading ? (
						// 	<ProgressWrapper>
						// 		<CircularProgress size='30px' />
						// 	</ProgressWrapper>
						// ) : (
						sortedOffers.map(offer => (
							<OfferCard
								key={offer.slug}
								offer={offer}
							/>
						))
						// )
					}
				</ListContainer>
			</ContainerScroll>
		</Container>
	)
}
export const Container = styled.div`
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
`
export const ContainerScroll = styled.div`
	display: flex;
	position: relative;
	flex: 1 1 0%;
`

export const ListContainer = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	overflow: auto;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		padding: 0;
	}
`
export const InfoSpan = styled.span`
	display: block;
	color: ${({ theme }) => theme.colors.title};
	font-size: 1.2rem;
`
export const ProgressWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 2.5em;
`

const mapStateToProps = ({ params, offers }: InitialStoreState) => ({
	params,
	offers,
})

export default connect(mapStateToProps)(OfferList)
