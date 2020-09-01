import React, { lazy } from 'react'
import CustomButton from '../shared/CustomButton'
import ParamsType from '../../types/ParamsType'
import GetParamsType from '../../types/GetParamsType'
import InitialStoreState from '../../types/InitialStoreState'
import styled from 'styled-components'
import { connect } from 'react-redux'
import TechList from './TechList'
import Center from '../shared/Center'
import { CircularProgress } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'

interface MobileViewProps {
	isDialogOpen: boolean
	open: VoidFunction
	close: VoidFunction
	params: ParamsType
	getParams: GetParamsType
}

const MobileView = ({
	isDialogOpen,
	open,
	close,
	params,
	getParams,
}: MobileViewProps) => (
	<>
		<ButtonWrapper>
			<CustomButton
				handleClick={open}
				active={!!params.tech}
				icon
				isOpen={isDialogOpen}
			>
				Tech
			</CustomButton>
		</ButtonWrapper>
		{isDialogOpen && (
			<Dialog
				maxWidth='md'
				open={isDialogOpen}
				onClose={close}
				fullWidth={true}
			>
				<Container>
					<TechList getParams={getParams} close={close} />
				</Container>
			</Dialog>
		)}
	</>
)

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, auto);
	padding: 1em 0;
`
export const ButtonWrapper = styled.div`
	margin: 0 0.3125em;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(MobileView)
