import React, { lazy } from 'react'
import styled from 'styled-components'
import ListHeader from './ListHeader'
import { CircularProgress } from '@material-ui/core'
import Center from '../shared/Center'
const List = lazy(() => import('./List'))

const OfferList = () => {
	return (
		<Container>
			<ListHeader />
			<ContainerScroll>
				<React.Suspense
					fallback={
						<Center>
							<CircularProgress />
						</Center>
					}
				>
					<List />
				</React.Suspense>
			</ContainerScroll>
		</Container>
	)
}
export const Container = styled.div`
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
`
export const ContainerScroll = styled.div`
	display: flex;
	position: relative;
	flex: 1 1 0%;
`

export const InfoSpan = styled.span`
	display: block;
	color: ${({ theme }) => theme.colors.title};
	font-size: 1.2rem;
`

export default OfferList
