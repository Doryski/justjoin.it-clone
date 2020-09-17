import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Share, ArrowBack } from '@material-ui/icons'
import InfoLabel from '../shared/InfoLabel'
import Typography from '../shared/Typography'
import formatThous from '../../helpers/formatThous'
import { INFO_LABELS } from '../../helpers/utils'
import theme, { textColors } from '../../theme'
import OfferType from '../../types/OfferType'
import stringFormat from '../../helpers/stringFormat'

const OfferHeader = ({ offer }: { offer: OfferType }) => {
    const {
        tech,
        image,
        salaryFrom,
        salaryTo,
        offerTitle,
        street,
        city,
    } = offer

    return (
        <HeaderContainer>
            <HeaderInner tech={stringFormat(tech)}>
                <Link to='/'>
                    <HeaderActionIcon arrow>
                        <ArrowBack />
                    </HeaderActionIcon>
                </Link>
                <HeaderActionIcon>
                    <Share />
                </HeaderActionIcon>

                <HeaderWrapper>
                    <ImgBackground>
                        <Img src={image} />
                    </ImgBackground>
                    <MainInfoContainer>
                        <Typography
                            color={textColors.white}
                            align='flex-start'
                            margin='0.25em 0'
                            fWeight={theme.fontWeight[400]}
                        >
                            {formatThous(salaryFrom)} -{' '}
                            {formatThous(salaryTo)} PLN
                        </Typography>
                        <Typography
                            color={textColors.white}
                            align='flex-start'
                            fontSize={theme.fontSize.xl}
                            margin='0.25em 0'
                        >
                            {offerTitle}
                        </Typography>
                        <Typography
                            color={textColors.white}
                            align='flex-start'
                            margin='0.25em 0'
                            fWeight={theme.fontWeight[400]}
                        >
                            {street}, {city}
                        </Typography>
                    </MainInfoContainer>
                </HeaderWrapper>
            </HeaderInner>
            <InfoLabelsContainer>
                {INFO_LABELS.map(
                    ({
                        id,
                        title,
                    }: {
                        id: number
                        title: string
                    }) => (
                        <InfoLabel
                            key={id}
                            id={id}
                            // @ts-ignore
                            title={offer[title]}
                        />
                    )
                )}
            </InfoLabelsContainer>
        </HeaderContainer>
    )
}

export const HeaderActionIcon = styled.button<{ arrow?: boolean }>`
    position: absolute;
    color: ${({ theme }) => theme.colors.white};
    background: rgba(0, 0, 0, 0.2);
    width: 28px;
    height: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    left: ${({ arrow }) => (arrow ? '10px' : '')};
    right: ${({ arrow }) => (arrow ? '' : '10px')};
    padding: 2px;
    border: none;
    border-radius: 4px;
    transition: all 300ms ease-out 0s;
    &:hover {
        background: rgba(0, 0, 0, 0.35);
    }
`

export const HeaderContainer = styled.div`
    height: 235px;
    position: relative;
    margin: 0 0 3.125em 0;
`
export const HeaderInner = styled.div<{ tech: string }>`
    background: url(https://justjoin.it/static/media/header_background.0ef18c97.png)
            center center / cover no-repeat,
        ${({ theme, tech }) => theme.techColors[tech]};
    height: 100%;
    border-radius: 0px 0px 4px 4px;
    padding: 2.5em 2.5em 2.5em;
    position: relative;
`
export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: flex-start;
    justify-content: center;
`
export const ImgBackground = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 107px;
    height: 107px;
    display: flex;
    position: relative;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    &:after,
    &:before {
        content: '';
        position: absolute;
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    &:before {
        background: rgba(255, 255, 255, 0.5);
        transform: scale(1.2);
    }
    &:after {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.4);
    }
`
export const Img = styled.img`
    max-width: 70px;
    max-height: 45px;
    z-index: 1;
`
export const MainInfoContainer = styled.div`
    flex: 1;
    margin: 0 0 0 2.5em;
`
export const InfoLabelsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transform: translateY(-50%);
    width: 100%;
    padding: 0 0.9375em;
    @media only screen and (max-width: ${({ theme }) =>
            theme.breakpoints.md}) {
        transform: translateY(-25%);
    }
`
export default OfferHeader
