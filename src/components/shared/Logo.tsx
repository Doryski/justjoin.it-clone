import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = ({ center }: { center?: boolean }) => {
	return (
		// @ts-ignore
		<Typography center={center}>
			<Link to='/'>justjoin.it</Link>
		</Typography>
	)
}

const Typography = styled.h2`
	font-family: 'Roboto', sans-serif;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.colors.title};
	text-align: ${({ center }: { center: boolean }) =>
		center && 'center'};
	display: inline-block;
	width: 120px;
	float: left;
	margin: auto 0.9375em auto 1.5625em;
`

export default Logo
