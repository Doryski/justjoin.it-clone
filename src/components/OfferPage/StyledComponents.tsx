import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 1.5em;
	border-top: 2px solid ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-wrap: wrap;
`
