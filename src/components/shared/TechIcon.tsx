import React from 'react'
import styled, { css } from 'styled-components'
import TechSvg from './TechSvg'
import { connect } from 'react-redux'
import { InitialStoreState, ParamsType } from '../../store/reducer'

const TechIcon = ({
	tech,
	params,
	onclick,
}: {
	tech: string | null
	params: ParamsType
	onclick: VoidFunction
}) => {
	return (
		<Container
			// @ts-ignore
			tech={tech}
			focus={params.tech === tech || !params.tech}
			onClick={onclick}
		>
			<TechSvg tech={tech} />
		</Container>
	)
}
const Container = styled.div`
	position: relative;
	margin: 0 0.1875em;
	border-radius: 50px;
	${({
		theme,
		tech,
		focus,
	}: {
		theme: any
		tech: string
		focus: boolean
	}) => css`
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
