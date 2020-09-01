import React from 'react'
import { connect } from 'react-redux'
import { setParams } from '../../store/actions'
import ParamsType from '../../types/ParamsType'
import InitialStoreState from '../../types/InitialStoreState'
import MobileView from './MobileView'
import DesktopView from './DesktopView'
import useDialogHandler from '../../helpers/useDialogHandler'
import useDeviceDetect from '../../helpers/useDetectMobile'

const TechFilters = ({ params }: { params: ParamsType }) => {
	const { close, toggle, open, isDialogOpen } = useDialogHandler(
		false
	)
	const isMobile = useDeviceDetect(1025)

	const getParams = {
		all: { ...params, tech: null, search: null },
		tech: (tech: string | null | undefined) => ({
			...params,
			tech: params.tech === tech! ? null : tech!,
			search: null,
		}),
	}

	return isMobile ? (
		<MobileView
			isDialogOpen={isDialogOpen}
			getParams={getParams}
			close={close}
			open={open}
		/>
	) : (
		<DesktopView
			getParams={getParams}
			close={close}
			toggle={toggle}
			isListOpen={isDialogOpen}
			cutTechArray={14}
		/>
	)
}

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps, { setParams })(TechFilters)
