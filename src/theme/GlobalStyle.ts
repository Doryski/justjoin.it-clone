import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '.'
// @ts-ignore
import OpenSans from '../fonts/Open_Sans/OpenSans-Regular.ttf'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
 @font-face {
        font-family: 'Open Sans';
        font-display: swap;
        src: url(${OpenSans});
    }
  *,
  &:before,
  &:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    outline: none;
  }
 
  html {
    height: 100%;
    max-height: 100%;
  }
  
  body {
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box;
    max-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.title}
  }

  ::-webkit-scrollbar {
      width: 10px;
      margin: 0.625em 0;
      &-track {
            border-radius: 10px;
        }
      &-thumb {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        &:hover {
              background: rgba(0, 0, 0, 0.1);
          }
        }
    }
 
`
export default GlobalStyle
