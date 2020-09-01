import React from 'react'
import technologies from '../../helpers/technologies'
import { Link as RouteLink } from 'react-router-dom'
import createUrl from '../../helpers/createUrl'
import stringFormat from '../../helpers/stringFormat'
import { setParams } from '../../store/actions'
import { connect } from 'react-redux'
import InitialStoreState from '../../types/InitialStoreState'
import styled from 'styled-components'
import TechIcon from '../shared/TechIcon'
import GetParamsType from '../../types/GetParamsType'
import ParamsType from '../../types/ParamsType'

interface TechListProps {
	cutTechArray?: number
	getParams: GetParamsType
	setParams: (params: ParamsType) => void
	close: VoidFunction
}

const TechList = ({
	cutTechArray,
	getParams,
	setParams,
	close,
}: TechListProps) => (
	<>
		{technologies.slice(0, cutTechArray).map(tech => {
			const newParams = getParams.tech(stringFormat(tech))
			return (
				<RouteLink
					to={createUrl(newParams)}
					onClick={() => {
						setParams(newParams)
						close()
					}}
					key={tech}
				>
					<IconWrapper>
						<TechIcon tech={stringFormat(tech)} />
						<TechName>{tech}</TechName>
					</IconWrapper>
				</RouteLink>
			)
		})}
	</>
)

export const TechName = styled.span<{ all?: boolean }>`
	font-size: 0.6875rem;
	color: ${({ theme }) => theme.colors.text};
	line-height: 15px;
	text-align: center;
	margin-top: ${({ all }) => (all ? '.1em' : '-5px')};
`

export const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})
export default connect(mapStateToProps, { setParams })(TechList)
