import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkMode, lightMode } from './theme'
import MainPage from './components/MainPage'
import GlobalStyle from './theme/GlobalStyle'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import InitialStoreState from './types/InitialStoreState'
import { setOffers } from './store/actions'
import OfferType from './types/OfferType'
import database from './firebase'

type AppProps = {
    state: InitialStoreState
    setOffers: (offers: OfferType[]) => void
}

const App = ({ state, setOffers }: AppProps) => {
    useEffect(() => {
        const fetchData = async () => {
            database.ref('offers').on('value', (snapshot: any) => {
                const offers: OfferType[] = []
                snapshot.forEach((childSnapshot: any) => {
                    const technology: OfferType['technology'] = []
                    childSnapshot
                        .val()
                        .technology.forEach(
                            (techChild: {
                                tech: string
                                techLvl: number
                            }) => {
                                technology.push(techChild)
                            }
                        )
                    offers.push({
                        ...childSnapshot.val(),
                        id: childSnapshot.key,
                        technology,
                    })
                })
                setOffers(offers)
            })
        }
        fetchData()
    }, [])

    return (
        <ThemeProvider theme={state.darkMode ? darkMode : lightMode}>
            <BrowserRouter>
                <MainPage />
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    )
}

const mapStateToProps = (state: InitialStoreState) => ({ state })
export default connect(mapStateToProps, { setOffers })(App)
