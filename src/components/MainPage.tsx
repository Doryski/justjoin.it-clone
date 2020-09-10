import React, { lazy } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Filters from './Filters'
import Map from './Map'
import { Switch, Route } from 'react-router-dom'
import Center from './shared/Center'
import { CircularProgress } from '@material-ui/core'
import OfferList from './OfferList'
import OfferPage from './OfferPage'
// const OfferPage = lazy(
//     () => import(/* webpackChunkName: "offer-page" */ './OfferPage')
// )

const MainPage = () => (
    <MainContainer>
        <Header />
        <Filters />
        <SubContainer>
            <OfferContainer>
                <OfferContainerScroll>
                    {/* <React.Suspense
                        fallback={
                            <Center>
                                <CircularProgress />
                            </Center>
                        }> */}
                    <Switch>
                        <Route
                            path='/offers/:slug?'
                            component={OfferPage}
                        />
                        <Route
                            path='/:location?/:tech?/:expLvl?/:from?/:to?'
                            component={OfferList}
                        />
                    </Switch>
                    {/* </React.Suspense> */}
                </OfferContainerScroll>
            </OfferContainer>
            <Map />
        </SubContainer>
    </MainContainer>
)

export const MainContainer = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
export const SubContainer = styled.div`
    display: flex;
    flex: 1;
`
export const OfferContainer = styled.div`
    width: 60%;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    display: flex;
    flex-direction: column;
    @media (max-width: 1025px) {
        width: 100%;
    }
`
export const OfferContainerScroll = styled.div`
    display: flex;
    position: relative;
    flex: 1 1 0%;
`

export default MainPage
