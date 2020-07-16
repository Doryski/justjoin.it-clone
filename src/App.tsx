import React from 'react'
import { ThemeProvider } from 'styled-components'
import { darkMode, lightMode } from './theme'
import MainPage from './components/MainPage'
import GlobalStyle from './GlobalStyle'
import { connect } from 'react-redux'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { InitialStoreState } from './store/reducer'

const App = ({ state }: { state: InitialStoreState }) => {
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
