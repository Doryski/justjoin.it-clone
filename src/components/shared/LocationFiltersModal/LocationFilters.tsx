import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import styled from 'styled-components'
import { Dialog } from '@material-ui/core'
import DialogHeader from '../DialogHeader'
import stringFormat from '../../../helpers/stringFormat'
import { connect } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import locations from '../../../helpers/locations'
import DialogFooter from '../DialogFooter'
import Typography from '../Typography'
import { setParams } from '../../../store/actions'
import ParamsType from '../../../types/ParamsType'
import InitialStoreState from '../../../types/InitialStoreState'
import theme, { textColors } from '../../../theme'

const LocationFilters = ({ params }: any) => {
	const [dialogOpen, setDialogOpen] = useState<boolean>(false)
	const [location, setLocation] = useState<ParamsType['location']>(
		null
	)
	const fullScreen = useMediaQuery('(max-width:800px)')

	const onClose = () => {
		setDialogOpen(false)
	}
	const TOP_LOCATIONS_NUM = 6

	return (
		<>
			<CustomButton
				onclick={() => {
					setDialogOpen(true)
				}}
				margin='0.375em 1.25em 0 0.3125em'
				active={!!params.location}
				icon
				minWidth='148px'
				isOpen={dialogOpen}
				padding='0.425em 0.75em 0.425em 1em'
			>
				{params.location === null
					? 'Location'
					: locations.filter(
							loc =>
								stringFormat(loc) === params.location
					  )}
			</CustomButton>

			<Dialog
				maxWidth='sm'
				open={dialogOpen}
				onClose={onClose}
				fullWidth={true}
				fullScreen={fullScreen}
			>
				<Container>
					<DialogHeader close={onClose}>
						Location
					</DialogHeader>

					<Typography
						display='flex'
						color={textColors.text}
						fWeight={theme.fontWeight[700]}
						fontSize={theme.fontSize.large}
						padding='1.25em 1.25em 0 1.25em'
					>
						Top locations
					</Typography>
					<Wrapper>
						{locations
							.slice(0, TOP_LOCATIONS_NUM)
							.map(loc => (
								<ItemWrapper key={loc}>
									<CustomButton
										onclick={() => {
											setLocation(loc)
										}}
										active={
											location
												? loc === location
												: stringFormat(
														loc
												  ) ===
												  params.location
										}
										padding='0.5em 1.875em'
									>
										{loc}
									</CustomButton>
								</ItemWrapper>
							))}
					</Wrapper>
					<Typography
						display='flex'
						color={textColors.text}
						fWeight={theme.fontWeight[700]}
						fontSize={theme.fontSize.large}
						padding='0 1.25em'
					>
						Other locations
					</Typography>
					<Wrapper>
						{locations
							.slice(TOP_LOCATIONS_NUM)
							.map(loc => (
								<ItemWrapper key={loc}>
									<CustomButton
										onclick={() => {
											setLocation(loc)
										}}
										active={
											location
												? loc === location
												: stringFormat(
														loc
												  ) ===
												  params.location
										}
										padding='0.5em 1.875em'
									>
										{loc}
									</CustomButton>
								</ItemWrapper>
							))}
					</Wrapper>

					<DialogFooter
						onClose={onClose}
						location={location}
						setLocation={setLocation}
						filterType={'location'}
					/>
				</Container>
			</Dialog>
		</>
	)
}
export const ItemWrapper = styled.div`
	margin: 0.3125em;
`
export const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
`
export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0.9375em;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps, { setParams })(
	LocationFilters
)
