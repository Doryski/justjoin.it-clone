import React from 'react'
import styled from 'styled-components'
import { SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>>

const StyledIcon = ({ Icon }: { Icon: IconType }) => <I Icon={Icon} />

export const I = styled(({ Icon }) => <Icon />)`
	color: ${({ theme }) => theme.colors.span};
`
export default StyledIcon
