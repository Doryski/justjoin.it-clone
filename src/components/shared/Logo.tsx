import React from 'react'
import StyledLink from '../../helpers/StyledLink'
import styled from 'styled-components'

const Logo = ({ center }: { center?: any }) => {
	return (
		<Typography align={center}>
			<StyledLink to='/'>justjoin.it</StyledLink>
		</Typography>
	)
}

const Typography = styled.h2`
	font-family: 'Roboto', sans-serif;
	font-size: 30px;
	color: ${({ theme }) => theme.colors.logo};
	text-align: ${({ align }: { align: any }) => align && 'center'};
`

export default Logo
