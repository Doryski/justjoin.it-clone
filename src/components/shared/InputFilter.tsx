import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import { setParams } from '../../store/actions'
import createUrl from '../../helpers/createUrl'
import resetParams from '../../helpers/resetParams'
import InitialStoreState from '../../types/InitialStoreState'
import ParamsType from '../../types/ParamsType'

const InputFilter = ({
	params,
	setParams,
}: {
	params: ParamsType
	setParams(params: ParamsType): void
}) => {
	const history = useHistory()
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const reset = resetParams(params)
		setParams(reset)
		history.push(createUrl(reset))
		const par = {
			...params,
			location: null,
			tech: null,
			expLvl: null,
			from: null,
			to: null,
			search: e.target.value,
		}
		setParams(par)
		history.push(createUrl(par))
	}

	return (
		<InputWrapper>
			<Button>
				<Search />
			</Button>
			<Input
				type='text'
				placeholder='Search'
				value={!!params.search ? String(params.search) : ''}
				onChange={handleChange}
			/>
		</InputWrapper>
	)
}
export const Button = styled.button`
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
export const InputWrapper = styled.div`
	background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	padding: 0.2em 0.625em;
	margin: -0.75em 0.625em 0 0;
	border-radius: 20px;
	min-width: 150px;
	cursor: text;
	display: inline-flex;
	align-items: center;
	position: relative;
	border: 1px solid ${({ theme }) => theme.colors.buttonBackground};
`
export const Input = styled.input`
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

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps, { setParams })(InputFilter)
