import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Filters from './Filters'
import OfferList from './OfferList'
import Map from './Map'
import SingleOffer from './SingleOffer'
import axios from '../../axios'
// import createHTMLMapMarker from '../../GoogleMapMarker'
import _ from 'lodash'
import { Switch, Route, useParams } from 'react-router-dom'
import { setMarkers, setAllOffers } from '../../store/actions'
import { connect } from 'react-redux'
import { InitialStoreState } from '../../store/reducer'

const MainPage = ({ setAllOffers }: { setAllOffers: any }) => {
	const loadScriptPromise = () => {
		return new Promise((resolve, reject) => {
			const googleMapScript = document.createElement('script')
			googleMapScript.src =
				'https://maps.googleapis.com/maps/api/js?key=AIzaSyCzuSdRVtpNzkDqnPd2NuF7x_4ZLR_92pc'
			window.document.body.appendChild(googleMapScript)
			googleMapScript.addEventListener('load', () => resolve())
		})
	}

	useEffect(() => {
		Promise.all([axios.get('/posts/'), loadScriptPromise()]).then(
			([{ data }]) => {
				setAllOffers(data)
			}
		)
	}, [])

	return (
		<MainContainer>
			<Header />
			<Filters />
			<SubContainer>
				<OfferContainer>
					<OfferContainerScroll>
						<Switch>
							<Route
								path='/offer/:slug?'
								component={SingleOffer}
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
}
const MainContainer = styled.main`
	height: 100vh;
	display: flex;
	flex-direction: column;
`
const SubContainer = styled.div`
	display: flex;
	flex: 1;
`
const OfferContainer = styled.div`
	width: 60%;
	height: 100%;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	@media (max-width: 1025px) {
		width: 100%;
	}
`
const OfferContainerScroll = styled.div`
	display: flex;
	position: relative;
	flex: 1 1 0%;
`

const mapStateToProps = (state: InitialStoreState) => ({ state })

export default connect(mapStateToProps, { setAllOffers, setMarkers })(
	MainPage
)