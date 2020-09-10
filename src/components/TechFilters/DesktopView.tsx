import React, { useRef } from 'react'
import styled from 'styled-components'
import TechIcon from '../shared/TechIcon'
import createUrl from '../../helpers/createUrl'
import { TECHNOLOGIES } from '../../helpers/utils'
import { Link as RouteLink } from 'react-router-dom'
import { DropdownList, DropdownListItem } from '../shared/DropdownList'
import Typography from '../shared/Typography'
import stringFormat from '../../helpers/stringFormat'
import ParamsType from '../../types/ParamsType'
import theme from '../../theme'
import GetParamsType from '../../types/GetParamsType'
import { setParams } from '../../store/actions'
import { connect } from 'react-redux'
import { MoreHoriz } from '@material-ui/icons'
import InitialStoreState from '../../types/InitialStoreState'
import TechList, { TechName, IconWrapper } from './TechList'
import useDetectOutsideClick from '../../helpers/useDetectOutsideClick'

type DesktopViewProps = {
    getParams: GetParamsType
    params: ParamsType
    toggle: VoidFunction
    close: VoidFunction
    cutTechArray?: number
    isListOpen: boolean
    setParams(params: ParamsType): void
}

const ALL_TECH_NAME = 'All'
const DesktopView = ({
    getParams,
    params,
    toggle,
    close,
    cutTechArray,
    isListOpen,
    setParams,
}: DesktopViewProps) => {
    const listRef = useRef<HTMLUListElement>(null)
    useDetectOutsideClick(listRef, close)
    return (
        <Container>
            <Link
                to={createUrl(getParams.all)}
                onClick={() => setParams(getParams.all)}
            >
                <AllIconContainer focus={!params.tech}>
                    {ALL_TECH_NAME}
                </AllIconContainer>
                <TechName all>{ALL_TECH_NAME}</TechName>
            </Link>
            <TechList cutTechArray={14} getParams={getParams} close={close} />
            <IconWrapper>
                <StyledMoreHorizIcon onClick={toggle} />
                <DropdownList isOpen={isListOpen} ref={listRef}>
                    {TECHNOLOGIES.slice(cutTechArray).map((tech: string) => {
                        const newParams = getParams.tech(stringFormat(tech))
                        return (
                            <RouteLink
                                to={createUrl(newParams)}
                                key={tech}
                                onClick={() => {
                                    setParams(newParams)
                                    close()
                                }}
                            >
                                <DropdownListItem>
                                    <TechIcon tech={stringFormat(tech)} />
                                    <Typography
                                        fWeight={theme.fontWeight[400]}
                                        margin="1em 0 0 0.3em"
                                    >
                                        {tech}
                                    </Typography>
                                </DropdownListItem>
                            </RouteLink>
                        )
                    })}
                </DropdownList>
            </IconWrapper>
        </Container>
    )
}
export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: -0.15em 0 0 0;
    flex: 1;

    @media (max-width: 1025px) {
        padding: 1.875em;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const AllIconContainer = styled.div<{ focus?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    text-transform: none;
    width: 36px;
    min-width: 36px;
    height: 36px;
    line-height: 36px;
    margin-top: 0.45em;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    background: ${({ focus, theme }) =>
        focus ? theme.techColors.all : theme.techColors.disabled};
`

export const Link = styled(RouteLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin-right: 0.3125em;
    height: 64px;
    text-align: center;
`
export const StyledMoreHorizIcon = styled(MoreHoriz)`
    margin: -10px 0 0 0.125em;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    border-radius: 50%;
    width: 1.25em !important;
    height: 1.25em !important;
    padding: 0.125em;
    transition: background 0.3s !important;
    &:hover {
        background: ${({ theme }) => theme.colors.buttonBackgroundHover};
    }
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
    params,
})
export default connect(mapStateToProps, { setParams })(DesktopView)
