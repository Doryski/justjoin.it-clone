import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'

const InputFilter = () => {
	return (
		<InputWrapper>
			<Button>
				<Search />
			</Button>
			<Input type='text' placeholder='Search' />
		</InputWrapper>
	)
}
const Button = styled.button`
	display: flex;
	align-items: center;
	background: transparent;
	padding: 0.1875em;
	font-size: 1.125rem;
	text-align: center;
	border-radius: 50%;
	border: none;
	display: inline-flex;
	margin: 0;
	position: relative;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.text};
`
const InputWrapper = styled.div`
	background: rgb(243, 246, 248);
	padding: 0.1875em 0.625em;
	border-radius: 20px;
	flex-wrap: wrap;
	min-width: 150px;
	// width: 100%;
	// max-width: 150px;
	cursor: text;
	display: inline-flex;
	align-items: center;
	margin: -0.75em 0.625em 0 0;
	position: relative;
`
const Input = styled.input`
	display: block;
	color: ${({ theme }) => theme.colors.text};
	font-size: 0.875rem;
	min-width: 30px;
	width: 100%;
	max-width: 100px;
	font-weight: 400;
	font-family: 'Open Sans', 'sans serif';
	flex-grow: 1;
	padding-left: 0.3125em;
	background: none;
	border: none;
	&::placeholder {
		color: ${({ theme }) => theme.colors.span};
	}
`
export default InputFilter
