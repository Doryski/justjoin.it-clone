import React from 'react'
import styled from 'styled-components'
import Typography from './Typography'
import { TECH_LVL_OPTIONS } from '../../helpers/utils'
import theme, { textColors } from '../../theme'

const TechRange = ({
    range,
    tech,
}: {
    range: number
    tech: string
}) => {
    return (
        <Container>
            <RangeContainer>
                {[...Array(range)].map((v, index) => (
                    <RangePoint key={index} />
                ))}
                {[...Array(5 - range)].map((v, index) => (
                    <RangePoint key={index} disabled />
                ))}
            </RangeContainer>
            <Typography
                color={textColors.title}
                fWeight={theme.fontWeight[600]}
                fontSize='1.1rem'
                align='flex-start'
                margin='0.3125em 0 0'
                hide
            >
                {tech}
            </Typography>
            <Typography
                color={textColors.span}
                fWeight={theme.fontWeight[400]}
                align='flex-start'
                margin='0'
            >
                {TECH_LVL_OPTIONS[range - 1].title.toLowerCase()}
            </Typography>
        </Container>
    )
}
export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 20%;
    flex: 0 0 20%;
    margin: 0 0 2em;
    @media only screen and (max-width: ${({ theme }) =>
            theme.breakpoints.md}) {
        max-width: 50%;
        flex: 1 0 50%;
    }
`
export const RangeContainer = styled.div`
    display: flex;
`
export const RangePoint = styled.span<{
    disabled?: boolean
}>`
    background-color: ${({ disabled, theme }) =>
        disabled ? 'rgb(191, 197, 210)' : theme.colors.pink};
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 0.625em 0 0;
`

export default TechRange
