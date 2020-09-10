import React, { useState, useRef } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setParams } from '../../store/actions'
import Typography from './Typography'
import { SORT_OPTIONS } from '../../helpers/utils'
import createUrl from '../../helpers/createUrl'
import { StyledExpandMoreIcon } from './CustomButton'
import { DropdownList, DropdownListItem } from './DropdownList'
import ParamsType from '../../types/ParamsType'
import InitialStoreState from '../../types/InitialStoreState'
import { textColors } from '../../theme'
import useDialogHandler from '../../helpers/useDialogHandler'
import useDetectOutsideClick from '../../helpers/useDetectOutsideClick'

const SortDropdown = ({
    params,
    setParams,
}: {
    params: ParamsType
    setParams(params: ParamsType): void
}) => {
    const listRef = useRef<HTMLUListElement>(null)
    const { close, toggle, isDialogOpen: isListOpen } = useDialogHandler(false)
    useDetectOutsideClick(listRef, close)

    const getCurrentSortOption =
        params.sort === SORT_OPTIONS.salaryUp.id
            ? SORT_OPTIONS.salaryUp
            : params.sort === SORT_OPTIONS.salaryDown.id
            ? SORT_OPTIONS.salaryDown
            : SORT_OPTIONS.dateLatest

    const newParams = {
        salaryDown: {
            ...params,
            sort: SORT_OPTIONS.salaryDown.id,
        },
        salaryUp: {
            ...params,
            sort: SORT_OPTIONS.salaryUp.id,
        },
        dateLatest: {
            ...params,
            sort: SORT_OPTIONS.dateLatest.id,
        },
    }

    return (
        <ButtonWrapper onClick={toggle}>
            <Typography color={textColors.span}>Sort by:</Typography>
            <Typography color={textColors.span} margin="0 .25em 0 .5em">
                {getCurrentSortOption.name}
            </Typography>
            <StyledExpandMoreIcon isOpen={isListOpen} />

            <DropdownList ref={listRef} width="126px" isOpen={isListOpen}>
                <RouteLink
                    to={createUrl(newParams.dateLatest)}
                    onClick={() => {
                        close()
                        setParams(newParams.dateLatest)
                    }}
                >
                    <DropdownListItem>
                        <Typography
                            color={textColors.text}
                            align="left"
                            padding="0.5em 0.7em"
                        >
                            {SORT_OPTIONS.dateLatest.name}
                        </Typography>
                    </DropdownListItem>
                </RouteLink>
                <RouteLink
                    to={createUrl(newParams.salaryDown)}
                    onClick={() => {
                        close()
                        setParams(newParams.salaryDown)
                    }}
                >
                    <DropdownListItem>
                        <Typography
                            color={textColors.text}
                            align="left"
                            padding="0.5em 0.7em"
                        >
                            {SORT_OPTIONS.salaryDown.name}
                        </Typography>
                    </DropdownListItem>
                </RouteLink>
                <RouteLink
                    to={createUrl(newParams.salaryUp)}
                    onClick={() => {
                        close()
                        setParams(newParams.salaryUp)
                    }}
                >
                    <DropdownListItem>
                        <Typography
                            color={textColors.text}
                            align="left"
                            padding="0.5em 0.7em"
                        >
                            {SORT_OPTIONS.salaryUp.name}
                        </Typography>
                    </DropdownListItem>
                </RouteLink>
            </DropdownList>
        </ButtonWrapper>
    )
}
export const ButtonWrapper = styled.div`
    margin: 0 0.3125em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
    params,
})

export default connect(mapStateToProps, { setParams })(SortDropdown)
