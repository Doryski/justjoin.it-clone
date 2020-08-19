import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkMode, lightMode } from './theme'
import MainPage from './components/MainPage'
import GlobalStyle from './theme/GlobalStyle'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import InitialStoreState from './types/InitialStoreState'

const App = ({ state }: { state: InitialStoreState }) => {
	useEffect(() => {
		function fetchStorage() {
			const response = localStorage.getItem('offers')
			if (!response) {
				localStorage.setItem(
					'offers',
					JSON.stringify(state.offers)
				)
				return localStorage.offers
			}
			return response
		}
		fetchStorage()
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
export default connect(mapStateToProps)(App)
