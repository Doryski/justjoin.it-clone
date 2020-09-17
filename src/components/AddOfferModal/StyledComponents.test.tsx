import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import {
    StyledInput,
    StyledSelect,
    InputWrapper,
    Label,
    ErrorMessage,
} from './StyledComponents'

describe('StyledInput component', () => {
    it('renders without error', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <StyledInput />
                </ThemeProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe('StyledSelect component', () => {
    it('renders without error', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <StyledSelect />
                </ThemeProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe('InputWrapper component', () => {
    it('renders without error', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <InputWrapper />
                </ThemeProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe('Label component', () => {
    it('renders without error', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <Label />
                </ThemeProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe('ErrorMessage component', () => {
    it('renders without error', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <ErrorMessage />
                </ThemeProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
