import React, { useState } from 'react'
import styled from 'styled-components'
import { Dialog } from '@material-ui/core'
import DialogHeader from '../DialogHeader'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SliderArea from './SliderArea'
import DialogFooter from '../DialogFooter'
import { ParamsType, InitialStoreState } from '../../../store/reducer'
import { connect } from 'react-redux'

const DialogComponent = ({
	params,
	setDialogOpen,
	dialogOpen,
}: {
	params: ParamsType
	setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
	dialogOpen: boolean
}) => {
	const [value, setValue] = useState<number | number[]>([
		params.from || 0,
		params.to || 50000,
	])
	const fullScreen = useMediaQuery('(max-width:800px)')

	const handleChange = (
		event: React.ChangeEvent<{}>,
		newValue: number | number[]
	) => {
		setValue(newValue as number[])
	}

	const [expLvl, setExpLvl] = useState(params.expLvl)

	const onClose = () => {
		setDialogOpen(false)
	}

	return (
		<Dialog
			maxWidth='sm'
			open={dialogOpen}
			onClose={onClose}
			fullWidth={true}
			fullScreen={fullScreen}
		>
			<Container>
				<DialogHeader close={onClose}>
					More filters
				</DialogHeader>

				<SliderArea
					handleChange={handleChange}
					value={value}
					expLvl={expLvl}
					setExpLvl={setExpLvl}
				/>

				<DialogFooter
					onClose={onClose}
					value={value}
					expLvl={expLvl}
					filterType={'expLvl'}
				/>
			</Container>
		</Dialog>
	)
}
const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.3125em;
	}
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(DialogComponent)
