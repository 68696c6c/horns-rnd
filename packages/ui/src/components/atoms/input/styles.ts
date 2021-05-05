import styled from '@emotion/styled'
import MaskedInput from 'react-text-mask'

import { ControlProps, controlStyles } from '../../quarks'

export const Input = styled.input(controlStyles)

export const InputHidden = styled.input()

export interface InputMaskedProps extends ControlProps {
  currency?: string
}

export const InputMasked = styled(MaskedInput)<InputMaskedProps>(controlStyles)
