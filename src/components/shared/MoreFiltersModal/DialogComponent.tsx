import React, { useState } from 'react'
import styled from 'styled-components'
import { Dialog } from '@material-ui/core'
import DialogHeader from '../DialogHeader'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SliderArea from './SliderArea'
import DialogFooter from '../DialogFooter'
import { ParamsType } from '../../../store/reducer'

const DialogComponent = ({
	params,
	setDialogOpen,
	dialogOpen,
}: {
	params: ParamsType
	setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
	dialogOpen: boolean
}) => {
	const [value, setValue] = useState([
		params.from || 0,
		params.to || 50000,
	])
	const fullScreen = useMediaQuery('(max-width:800px)')

	const handleChange = (event: any, newValue: number[]) => {
		setValue(newValue)
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
					params={params}
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
		padding: 5px;
	}
`

export default DialogComponent
