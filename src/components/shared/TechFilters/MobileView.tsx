import React from 'react'
import { Dialog } from '@material-ui/core'
import CustomButton from '../CustomButton'
import ParamsType from '../../../types/ParamsType'
import HandleDialogType from '../../../types/HandleDialogType'
import GetParamsType from '../../../types/GetParamsType'
import DesktopView from './DesktopView'
import InitialStoreState from '../../../types/InitialStoreState'
import styled from 'styled-components'
import { connect } from 'react-redux'

interface MobileViewProps {
	isDialogOpen: boolean
	handleDialog: HandleDialogType
	params: ParamsType
	getParams: GetParamsType
	isListOpen: boolean
}

const MobileView = ({
	isDialogOpen,
	isListOpen,
	getParams,
	handleDialog,
	params,
}: MobileViewProps) => (
	<>
		<ButtonWrapper>
			<CustomButton
				onclick={handleDialog.open}
				active={!!params.tech}
				icon
				isOpen={isDialogOpen}
			>
				Tech
			</CustomButton>
		</ButtonWrapper>

		<Dialog
			maxWidth='md'
			open={isDialogOpen}
			onClose={handleDialog.close}
			fullWidth={true}
		>
			<DesktopView
				getParams={getParams}
				handleDialog={handleDialog}
				isListOpen={isListOpen}
			/>
		</Dialog>
	</>
)

export const ButtonWrapper = styled.div`
	margin: 0 0.3125em;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(MobileView)
