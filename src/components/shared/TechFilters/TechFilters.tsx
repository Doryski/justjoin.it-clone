import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link as RouteLink } from 'react-router-dom'
import { setParams } from '../../../store/actions'
import ParamsType from '../../../types/ParamsType'
import InitialStoreState from '../../../types/InitialStoreState'
import MobileView from './MobileView'
import DesktopView from './DesktopView'

const getWidth = () =>
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth

const TechFilters = ({ params }: { params: ParamsType }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [mobileView, setMobileView] = useState(getWidth() <= 1025)
	const [isListOpen, setIsListOpen] = useState(false)

	const handleDialog = {
		open: () => {
			setIsDialogOpen(true)
			setIsListOpen(true)
		},
		close: () => {
			setIsDialogOpen(false)
			setIsListOpen(false)
		},
		toggle: () => {
			setIsListOpen(!isListOpen)
			setIsDialogOpen(!isDialogOpen)
		},
	}

	useEffect(() => {
		const resizeListener = () => {
			setMobileView(getWidth() < 1025 ? true : false)
		}

		window.addEventListener('resize', resizeListener)

		return () => {
			window.removeEventListener('resize', resizeListener)
		}
	}, [])
	const getParams = {
		all: { ...params, tech: null, search: null },
		tech: (tech: string | null | undefined) => ({
			...params,
			tech: params.tech === tech ? null : tech,
			search: null,
		}),
	}

	return mobileView ? (
		<MobileView
			isDialogOpen={isDialogOpen}
			isListOpen={isListOpen}
			getParams={getParams}
			handleDialog={handleDialog}
		/>
	) : (
		<DesktopView
			getParams={getParams}
			handleDialog={handleDialog}
			isListOpen={isListOpen}
		/>
	)
}


const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps, { setParams })(TechFilters)
