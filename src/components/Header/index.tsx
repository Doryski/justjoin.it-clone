import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'
import AddOffer from '../AddOfferModal/AddOffer'
import Typography from '../shared/Typography'
import CustomButton from '../shared/CustomButton'
import JustjoinLogo from '../shared/JustjoinLogo'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import theme, { textColors } from '../../theme'
import useDialogHandler from '../../helpers/useDialogHandler'
import DrawerComponent from './DrawerComponent'
import useDeviceDetect from '../../helpers/useDeviceDetect'

const Header = () => {
    const {
        isDialogOpen: isSideBarOpen,
        close: closeSideBar,
        toggle: toggleSideBar,
    } = useDialogHandler(false)
    const isMobile = useDeviceDetect(1105)

    return (
        <Container>
            <Link to='/'>
                <LogoWrapper>
                    <JustjoinLogo />
                </LogoWrapper>
            </Link>
            {!isMobile && (
                <>
                    <Typography
                        color={textColors.span}
                        fWeight={theme.fontWeight[400]}
                    >
                        #1 Job Board for IT industry in Poland
                    </Typography>
                    <Navigation />
                </>
            )}
            <Wrapper>
                <AddOffer />
                <CustomButton
                    fWeight={theme.fontWeight[400]}
                    icon
                    pink
                    padding='0.375em 0.625em 0.375em 1.125em'
                    margin='0 0.9375em 0 0'
                >
                    Sign in
                </CustomButton>

                <Wrapper>
                    <IconButton onClick={toggleSideBar}>
                        <StyledMenuIcon />
                    </IconButton>
                </Wrapper>
            </Wrapper>

            {isSideBarOpen && (
                <DrawerComponent
                    handleClose={closeSideBar}
                    isOpen={isSideBarOpen}
                />
            )}
        </Container>
    )
}
export const Container = styled.header`
    min-height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    width: 100%;
`

export const LogoWrapper = styled.div`
    width: 120px;
    float: left;
    margin: 7px 15px 0px 25px;
`
export const Wrapper = styled.div`
    display: flex;
    height: 38px;
    margin-right: 0.75em;
    align-items: center;
`
const StyledMenuIcon = styled(MenuIcon)`
    color: ${({ theme }) => theme.colors.span};
    @media (max-width: 850px) {
        width: 1.5em !important;
        height: 1.5em !important;
    }
    @media (max-width: 600px) {
        width: 1.75em !important;
        height: 1.75em !important;
    }
`

export default Header
