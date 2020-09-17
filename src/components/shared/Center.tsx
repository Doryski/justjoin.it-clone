import styled from 'styled-components'

const Center = styled.div<{ width?: string; height?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
`
export default Center
