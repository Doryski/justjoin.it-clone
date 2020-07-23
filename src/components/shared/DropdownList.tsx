import styled from 'styled-components'

// TODO: onClick elsewhere than Dropdown setListOpen(false)
export const DropdownList = styled.ul`
	display: ${({ isOpen }: { isOpen: boolean }) =>
		isOpen ? 'block' : 'none'};
	position: absolute;
	top: 35px;
	cursor: pointer;
	list-style-type: none;
	background: ${({ theme }) => theme.colors.buttonBackground};
	z-index: 20;
	width: 150px;
	padding: 0.5em 0;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
		rgba(0, 0, 0, 0.12) 0px 2px 1px -1px,
		rgba(0, 0, 0, 0.2) 0px 1px 3px 0px;
`
export const DropdownListItem = styled.li`
	display: flex;
	justify-content: flex-start;
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
`
