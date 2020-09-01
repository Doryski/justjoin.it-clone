import React from 'react'
import styled, { css } from 'styled-components'
import TechSvg from './TechSvg'
import { connect } from 'react-redux'
import InitialStoreState from '../../types/InitialStoreState'
import ParamsType from '../../types/ParamsType'

interface TechIconProps {
	tech: string
	params: ParamsType
	handleClick?: VoidFunction
}

const TechIcon = ({ tech, params, handleClick }: TechIconProps) => (
	<Container
		tech={tech}
		focus={params.tech === tech || !params.tech}
		onClick={handleClick}
	>
		<TechSvg tech={tech} />
	</Container>
)

export const Container = styled.div<{
	tech: string
	focus: boolean
}>`
	position: relative;
	margin: 0 0.1875em;
	border-radius: 50px;
	${({ theme, tech, focus }) => css`
		svg circle {
			fill: ${focus
				? theme.techColors[tech]
				: theme.techColors.disabled};
		}
	`}
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: -45px;
		width: 45px;
		height: 45px;
		background: rgb(255, 255, 255, 0.2);
		transition: all 0.4s;
	}
	&:hover {
		&:before {
			transform: translateX(100%);
		}
	}
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(TechIcon)
