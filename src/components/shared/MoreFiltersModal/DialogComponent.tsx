import React, { useState } from 'react'
import styled from 'styled-components'
import { Dialog } from '@material-ui/core'
import DialogHeader from '../DialogHeader'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SliderArea from './SliderArea'
import DialogFooter from '../DialogFooter'
import { connect } from 'react-redux'
import ParamsType from '../../../types/ParamsType'
import InitialStoreState from '../../../types/InitialStoreState'
import HandleDialogType from '../../../types/HandleDialogType'

export type Value = number | number[]

const DialogComponent = ({
	params,
	handleDialog,
	isDialogOpen,
}: {
	params: ParamsType
	handleDialog: HandleDialogType
	isDialogOpen: boolean
}) => {
	const [value, setValue] = useState<Value>([
		params.from || 0,
		params.to || 50000,
	])
	const fullScreen = useMediaQuery('(max-width:800px)')

	const handleChange = (
		event: React.ChangeEvent<{}>,
		newValue: Value
	) => {
		setValue(newValue as number[])
	}

	const [expLvl, setExpLvl] = useState(params.expLvl)

	return (
		<Dialog
			maxWidth='sm'
			open={isDialogOpen}
			onClose={handleDialog.close}
			fullWidth={true}
			fullScreen={fullScreen}
		>
			<Container>
				<DialogHeader close={handleDialog.close}>
					More filters
				</DialogHeader>

				<SliderArea
					handleChange={handleChange}
					value={value}
					expLvl={expLvl}
					setExpLvl={setExpLvl}
				/>

				<DialogFooter
					onClose={handleDialog.close}
					value={value}
					expLvl={expLvl}
					filterType={'expLvl'}
				/>
			</Container>
		</Dialog>
	)
}
export const Container = styled.div`
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
