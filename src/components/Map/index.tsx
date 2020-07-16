import React from 'react'
import styled from 'styled-components'

const Map = () => (
	<Container>
		<div id='map' data-tap-disabled='true' />
	</Container>
)

const Container = styled.div`
	flex: 1;
	height: 100%;
	@media (max-width: 1025px) {
		display: none;
	}
`

export default Map
