import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Filters from './Filters'
import OfferList from './OfferList'
import Map from './Map'
import OfferPage from './OfferPage'
import { Switch, Route } from 'react-router-dom'

const MainPage = () => (
	<MainContainer>
		<Header />
		<Filters />
		<SubContainer>
			<OfferContainer>
				<OfferContainerScroll>
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
