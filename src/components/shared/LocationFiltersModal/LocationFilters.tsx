import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import styled from 'styled-components'
import { Dialog } from '@material-ui/core'
import DialogHeader from '../DialogHeader'
import stringFormat from '../../../helpers/stringFormat'
import { connect } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { InitialStoreState, ParamsType } from '../../../store/reducer'
import { locationArray } from '../../../helpers/options'
import DialogFooter from '../DialogFooter'
import Typography from '../../../helpers/Typography'
import { setParams } from '../../../store/actions'

const LocationFilters = ({ params }: any) => {
	const [dialogOpen, setDialogOpen] = useState(false)
	const [location, setLocation] = useState<string | null>(null)
	const fullScreen = useMediaQuery('(max-width:800px)')

	const onClose = () => {
		setDialogOpen(false)
	}

	return (
		<>
			<CustomButton
				onclick={() => {
					setDialogOpen(true)
				}}
				margin='0.375em 1.25em 0 0.3125em'
				active={Boolean(params.location)}
				icon
				minWidth='148px'
				isOpen={dialogOpen}
				padding='0.425em 0.75em 0.425em 1em'
			>
				{location || 'Location'}
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
						style={{ display: 'flex' }}
						color='text'
						// @ts-ignore
						fWeight='700'
						fontSize='1rem'
						padding='1.25em 1.25em 0 1.25em'
					>
						Top locations
					</Typography>
					<Wrapper>
						{locationArray.slice(0, 6).map(loc => (
							<ItemWrapper key={loc}>
								<CustomButton
									onclick={() => {
										setLocation(loc)
									}}
									active={
										location
											? loc === location
											: stringFormat(loc) ===
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
						style={{ display: 'flex' }}
						color='text'
						// @ts-ignore
						fWeight='700'
						fontSize='1rem'
						padding='0 1.25em'
					>
						Other locations
					</Typography>
					<Wrapper>
						{locationArray.slice(6).map(loc => (
							<ItemWrapper key={loc}>
								<CustomButton
									onclick={() => {
										setLocation(loc)
									}}
									active={
										location
											? loc === location
											: stringFormat(loc) ===
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
						filterType={'location'}
					/>
				</Container>
			</Dialog>
		</>
	)
}
const ItemWrapper = styled.div`
	margin: 0.3125em;
`
const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
`
const Wrapper = styled.div`
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
