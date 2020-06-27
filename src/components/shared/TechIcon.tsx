import React from 'react'
import styled from 'styled-components'
import TechSvg from '../../helpers/TechSvg'
import { connect } from 'react-redux'
import url from '../../helpers/urlFunc'
import StyledLink from '../../helpers/StyledLink'
import { InitialStoreState } from '../../store/reducer'

const TechIcon = ({
	tech,
	params,
	onclick,
}: {
	tech: any
	params: any
	onclick: any
}) => {
	return (
		<StyledLink
			to={url({
				...params,
				tech: params.tech === tech ? null : tech,
			})}
		>
			<Container
				tech={tech}
				focus={params.tech === tech || !params.tech}
				onClick={onclick}
			>
				<TechSvg tech={tech} />
			</Container>
		</StyledLink>
	)
}
const Container = styled.div`
	position: relative;
	margin: 3px 7px;
	width: 35px;
	height: 35px;
	border-radius: 50px;
	background: ${({ theme, tech, focus }) =>
		focus ? theme.techColors[tech] : theme.techColors.disabled};
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: -35px;
		width: 35px;
		height: 35px;
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
