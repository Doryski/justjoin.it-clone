import React from 'react'
import CustomButton from '../shared/CustomButton'
import ParamsType from '../../types/ParamsType'
import GetParamsType from '../../types/GetParamsType'
import InitialStoreState from '../../types/InitialStoreState'
import styled from 'styled-components'
import { connect } from 'react-redux'
import TechList from './TechList'
import Dialog from '@material-ui/core/Dialog'
import useDeviceDetect from '../../helpers/useDeviceDetect'

type MobileViewProps = {
    isDialogOpen: boolean
    open: VoidFunction
    close: VoidFunction
    params: ParamsType
    getParams: GetParamsType
}

const MobileView = ({
    isDialogOpen,
    open,
    close,
    params,
    getParams,
}: MobileViewProps) => {
    const isMobile = useDeviceDetect(1025)
    return (
        <>
            <ButtonWrapper>
                <CustomButton
                    padding={
                        isMobile ? '.35em .5em .35em .8em' : undefined
                    }
                    handleClick={open}
                    active={!!params.tech}
                    icon
                    isOpen={isDialogOpen}
                >
                    Tech
                </CustomButton>
            </ButtonWrapper>
            {isDialogOpen && (
                <Dialog
                    maxWidth='md'
                    open={isDialogOpen}
                    onClose={close}
                    fullWidth={true}
                >
                    <Container>
                        <TechList
                            getParams={getParams}
                            close={close}
                        />
                    </Container>
                </Dialog>
            )}
        </>
    )
}
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    padding: 1em 0;
`
export const ButtonWrapper = styled.div`
    margin: 0 0.3125em;

    @media (max-width: 1025px) {
        margin: -0.6em 0.3125em 0 0.3125em;
    }
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
    params,
})

export default connect(mapStateToProps)(MobileView)
