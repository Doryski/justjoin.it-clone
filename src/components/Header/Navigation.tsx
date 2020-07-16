import React from 'react'
import styled from 'styled-components'
import Typography from '../../helpers/Typography'

const navLinks = [
	{ title: 'Offers', active: true },
	{ title: 'Brands', active: false },
	{ title: 'News', active: false },
	{ title: 'Matchmaking', active: false },
	{ title: 'Select', active: false },
]

const Navigation = () => {
	return (
		<NavList>
			{navLinks.map(item => (
				<NavItem key={item.title}>
					<Typography
						//@ts-ignore
						fWeight='600'
						color={item.active ? 'pink' : 'span'}
						margin='0 0.375em'
						minWidth='64px'
						hoverColor='rgb(244, 143, 177)'
					>
						{item.title}
					</Typography>
				</NavItem>
			))}
		</NavList>
	)
}

const NavList = styled.ul`
	display: flex;
	justify-content: flex-end;
	flex: 1 1 0%;
`
const NavItem = styled.li`
	display: block;
	cursor: pointer;
`

export default Navigation
