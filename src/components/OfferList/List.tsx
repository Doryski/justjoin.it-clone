import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import filterOffers from '../../helpers/filterOffers'
import sortOffers from '../../helpers/sortOffers'
import InitialStoreState from '../../types/InitialStoreState'
import OfferCard from '../OfferCard'

const List = ({
    params,
    offers,
}: {
    params: InitialStoreState['params']
    offers: InitialStoreState['offers']
}) => {
    const filteredOffers = filterOffers(offers, params)
    const sortedOffers = sortOffers(filteredOffers, params)

    return (
        <ListContainer>
            {sortedOffers.map(offer => (
                <OfferCard key={offer.id} offer={offer} />
            ))}
        </ListContainer>
    )
}
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
const mapStateToProps = ({ params, offers }: InitialStoreState) => ({
    params,
    offers,
})

export default connect(mapStateToProps)(List)
