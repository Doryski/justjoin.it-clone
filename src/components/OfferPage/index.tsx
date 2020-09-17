import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import InitialStoreState from '../../types/InitialStoreState'
import OfferHeader from './OfferHeader'
import OfferTechStack from './OfferTechStack'
import OfferDescription from './OfferDescription'
import OfferApplySection from './OfferApplySection'
import Center from '../shared/Center'

const OfferPage = ({
    currentOffer,
}: {
    currentOffer: InitialStoreState['currentOffer']
}) => {
    return (
        <Container>
            <ContainerScroll>
                {!currentOffer ? (
                    <Center>Error loading offer</Center>
                ) : (
                    <>
                        <OfferHeader offer={currentOffer} />
                        <OfferTechStack
                            technology={currentOffer.technology}
                        />
                        <OfferDescription
                            description={currentOffer.description}
                        />
                        <OfferApplySection />
                    </>
                )}
            </ContainerScroll>
        </Container>
    )
}
export const Container = styled.div`
    flex: 1;
    background: ${({ theme }) => theme.colors.secondary};
    display: flex;
    flex-direction: column;
    padding: 0 1.25em;
    position: relative;
    flex: 1 1 0%;
`
export const ContainerScroll = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    padding: 0 0.9375em;
    overflow: auto;
    @media only screen and (max-width: ${({ theme }) =>
            theme.breakpoints.md}) {
        padding: 0 0.1875em;
    }
`

export const ProgressWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2.5em;
`

const mapStateToProps = ({ currentOffer }: InitialStoreState) => ({
    currentOffer,
})

export default connect(mapStateToProps)(OfferPage)
