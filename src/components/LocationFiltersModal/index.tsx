import React, { useState, lazy } from 'react'
import CustomButton from '../shared/CustomButton'
import styled from 'styled-components'
import DialogHeader from '../shared/DialogHeader'
import stringFormat from '../../helpers/stringFormat'
import { connect } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import locations from '../../helpers/locations'
import DialogFooter from '../shared/DialogFooter'
import Typography from '../shared/Typography'
import { setParams } from '../../store/actions'
import ParamsType from '../../types/ParamsType'
import InitialStoreState from '../../types/InitialStoreState'
import theme, { textColors } from '../../theme'
import LocationButton from './LocationButton'
import useDialogHandler from '../../helpers/useDialogHandler'
import Dialog from '@material-ui/core/Dialog'

const LocationFilters = ({ params }: { params: ParamsType }) => {
	const [location, setLocation] = useState<ParamsType['location']>(
		null
	)
	const fullScreen = useMediaQuery('(max-width:800px)')
	const { isDialogOpen, open, close } = useDialogHandler(false)

	const TOP_LOCATIONS_NUM = 6

	return (
		<>
			<CustomButton
				handleClick={open}
				margin='0.375em 1.25em 0 0.3125em'
				active={!!params.location}
				icon
				minWidth='148px'
				isOpen={isDialogOpen}
				padding='0.425em 0.75em 0.425em 1em'
			>
				{params.location === null
					? 'Location'
					: locations.filter(
							loc =>
								stringFormat(loc) === params.location
					  )}
			</CustomButton>
			{isDialogOpen && (
				<Dialog
					maxWidth='sm'
					open={isDialogOpen}
					onClose={close}
					fullWidth={true}
					fullScreen={fullScreen}
				>
					<Container>
						<DialogHeader close={close}>
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
									<LocationButton
										key={loc}
										loc={loc}
										setLocation={setLocation}
										location={location}
									/>
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
									<LocationButton
										key={loc}
										loc={loc}
										setLocation={setLocation}
										location={location}
									/>
								))}
						</Wrapper>

						<DialogFooter
							onClose={close}
							location={location}
							setLocation={setLocation}
							filterType={'location'}
						/>
					</Container>
				</Dialog>
			)}
		</>
	)
}

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
