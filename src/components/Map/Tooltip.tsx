import React from 'react'
import { OfferType } from '../../store/reducer'
import styled from 'styled-components'
import formatThous from '../../helpers/formatThous'

const Tooltip = ({ offer }: { offer: OfferType }) => {
	return (
		<Container>
			<Wrapper>
				<ImageWrapper>
					<CompanyImage
						src={offer.image}
						alt={offer.companyName}
					/>
				</ImageWrapper>
				<InfoWrapper>
					<Description>{offer.offerTitle}</Description>
					<Salary>
						{formatThous(offer.salaryFrom)} -{' '}
						{formatThous(offer.salaryTo)} PLN
					</Salary>
					<Description>{offer.companyName}</Description>
				</InfoWrapper>
			</Wrapper>
			<TipWrapper>
				<Tip />
			</TipWrapper>
		</Container>
	)
}

export const Container = styled.div`
	width: 225px;
	height: 86px;
	position: relative;
`

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 12px;
	position: absolute;
	margin-left: -90px;
	margin-top: -9px;
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.colors.primary};
	position: relative
	box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
`
export const ImageWrapper = styled.div`
	margin-top: 10px;
	width: 30%;
`
export const CompanyImage = styled.img`
	max-height: 70px;
	max-width: 100%;
	position: relative;
	padding: 5px;
`
export const InfoWrapper = styled.section`
	display: flex;
	flex-direction: column;
	margin-left: 5px;
	text-align: left;
	max-width: 50%;
	width: 70%;
	min-width: 140px;
	padding: 6px;
`
export const Description = styled.span`
	color: ${({ theme }) => theme.colors.title};
	display: block;
	font-size: 0.875em;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 125px;
`
export const Salary = styled.span`
	color: ${({ theme }) => theme.colors.salary};
	display: flex;
	font-size: 0.75rem;
`
export const TipWrapper = styled.div`
	width: 40px;
	height: 20px;
	position: absolute;
	bottom: -11px;
	margin-left: 3px;
	overflow: hidden;
	pointer-events: none;
`
export const Tip = styled.div`
	background: ${({ theme }) => theme.colors.primary};
	box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
	width: 17px;
	height: 17px;
	padding: 1px;
	margin: -10px auto 0;
	transform: rotate(45deg);
`

export default Tooltip
