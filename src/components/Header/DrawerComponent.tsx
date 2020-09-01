import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import SideBar from '../SideBar'

type HandleCloseFunction = (
	event: {},
	reason: 'backdropClick' | 'escapeKeyDown'
) => void

const DrawerComponent = ({
	handleClose,
	isOpen,
}: {
	handleClose?: HandleCloseFunction
	isOpen: boolean
}) => (
	<Drawer anchor='right' open={isOpen} onClose={handleClose}>
		<SideBar />
	</Drawer>
)
export default DrawerComponent
