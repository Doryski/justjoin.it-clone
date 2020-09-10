import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Send } from '@material-ui/icons'
import InitialStoreState from '../../types/InitialStoreState'
import OfferType from '../../types/OfferType'
import { setParams } from '../../store/actions'
import Center from '../shared/Center'
import { CircularProgress } from '@material-ui/core'
import OfferHeader from './OfferHeader'
import OfferTechStack from './OfferTechStack'
import OfferDescription from './OfferDescription'
import OfferApplySection from './OfferApplySection'

const OfferPage = ({ offers }: { offers: OfferType[] }) => {
    const { slug } = useParams()
    const [offer, setOffer] = useState<OfferType>(offers[0])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getPost = () => {
            const posts = !!localStorage.offers
                ? JSON.parse(localStorage.offers)
                : offers
            const foundPost = posts.find(
                (post: OfferType) => post.slug === slug
            )
            setOffer(foundPost)
        }

        getPost()
        setLoading(false)
    }, [])

    return (
        <Container>
            <ContainerScroll>
                {loading ? (
                    <Center>
                        <CircularProgress />
                    </Center>
                ) : (
                    <>
                        <OfferHeader offer={offer} />
                        <OfferTechStack
                            technology={offer.technology}
                        />
                        <OfferDescription
                            description={offer.description}
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

const mapStateToProps = ({ params, offers }: InitialStoreState) => ({
    params,
    offers,
})

export default connect(mapStateToProps, { setParams })(OfferPage)
