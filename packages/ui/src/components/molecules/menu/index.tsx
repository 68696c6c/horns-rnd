import React, { ReactNode, RefObject } from 'react'

import { useMenu } from '../../../hooks'

import * as Styled from './styles'

export interface MenuProps {
  renderControl(
    isOpen: boolean,
    controlRef: RefObject<any>,
    toggleOpen: () => void,
  ): ReactNode
  renderMenu(isOpen: boolean, menuRef: RefObject<any>): ReactNode
  onOpen?(): void
  onClose?(): void
  initialOpen?: boolean
  forceWidth?: boolean
}

// TODO: this is only used by the select molecule and is the only molecule imported by another molecule; combine with select.
export const Menu = ({
  renderControl,
  renderMenu,
  initialOpen,
  onOpen,
  onClose,
  forceWidth,
}: MenuProps) => {
  const [open, minWidth, toggleOpen, controlRef, menuRef] = useMenu({
    initialOpen,
    onOpen,
    onClose,
    forceWidth,
  })
  return (
    <Styled.Container open={open} minWidth={minWidth}>
      {renderControl(open, controlRef, toggleOpen)}
      <Styled.MenuContainer open={open}>
        {renderMenu(open, menuRef)}
      </Styled.MenuContainer>
    </Styled.Container>
  )
}
