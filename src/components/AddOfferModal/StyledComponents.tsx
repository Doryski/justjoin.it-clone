import styled from 'styled-components'

export const InputsContainer = styled.div`
    padding: 1.25em;
    @media only screen and (max-width: ${({ theme }) =>
            theme.breakpoints.sm}) {
        padding: 0.3125em;
    }
`

export const ErrorMessage = styled.span<{ isSpan?: boolean }>`
    color: ${({ isSpan, theme }) =>
        isSpan ? theme.colors.span : theme.colors.pink};
    font-size: ${({ theme }) => theme.fontSize.small};
    margin-left: 0.625em;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledInput = styled.input<{ padding?: string }>`
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    border-radius: 18px;

    padding: ${({ padding }) => padding || '0.125em 0.9375em'};
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
    height: 40px;
    transition: all 0.3s;
    &:hover {
        background: ${({ theme }) =>
            theme.colors.buttonBackgroundHover};
    }
    &:focus {
        background: ${({ theme }) =>
            theme.colors.buttonBackgroundHover};
        border: 1px solid ${({ theme }) => theme.colors.text};
    }
    @media only screen and (max-width: ${({ theme }) =>
            theme.breakpoints.sm}) {
        height: 25px;
    }
`
export const StyledSelect = styled.select<{ padding?: string }>`
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    border-radius: 18px;

    padding: ${({ padding }) => padding || '0.125em 0.9375em'};
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
    height: 40px;
    transition: all 0.3s;
    &:hover {
        background: ${({ theme }) =>
            theme.colors.buttonBackgroundHover};
    }
    &:focus {
        background: ${({ theme }) =>
            theme.colors.buttonBackgroundHover};
        border: 1px solid ${({ theme }) => theme.colors.text};
    }
    @media only screen and (max-width: ${({ theme }) =>
            theme.breakpoints.sm}) {
        height: 25px;
    }
`
export const InputWrapper = styled.div`
    margin: 0 0.1875em 0.625em 0.1875em;
`
export const Label = styled.label`
    margin-left: 0.625em;
    color: ${({ theme }) => theme.colors.text};
`
