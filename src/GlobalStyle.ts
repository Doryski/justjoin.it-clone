import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  &:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    outline: none;
  }
 
  html {
   
    height: 100%;
    @media only screen and (max-width: ${({ theme }) =>
		theme.breakpoints.md}) {
      font-size: 80.5%;
    }
    @media only screen and (max-width: ${({ theme }) =>
		theme.breakpoints.s}) {
      font-size: 66.5%;
    }
    @media only screen and (max-width: ${({ theme }) =>
		theme.breakpoints.xs}) {
      font-size: 60.5%;
    }

  }
  
  body {
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box;
    line-height: 1.25;
  }
  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`
export default GlobalStyle
