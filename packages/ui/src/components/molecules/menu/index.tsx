import React, { ReactNode, RefObject, useEffect, useRef, useState } from 'react'

import { useOpen } from '../../../hooks'

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

export const Menu = ({
  renderControl,
  renderMenu,
  initialOpen,
  onOpen,
  onClose,
  forceWidth,
}: MenuProps) => {
  const controlRef = useRef<any>(null)
  const menuRef = useRef<any>(null)

  const [minWidth, setMinWidth] = useState<number>(0)
  const [open, setOpen] = useOpen(
    initialOpen || forceWidth || false,
    (target) => target !== controlRef.current,
  )

  const toggleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (open) {
      if (typeof onOpen !== 'undefined') {
        onOpen()
      }
    } else if (typeof onClose !== 'undefined') {
      onClose()
    }
  }, [open])

  useEffect(() => {
    if (forceWidth) {
      const controlWidth = controlRef?.current?.offsetWidth || 0
      const menuWidth = menuRef?.current?.offsetWidth || 0
      if (controlWidth < menuWidth) {
        setMinWidth(menuWidth)
      } else if (controlWidth > menuWidth) {
        setMinWidth(controlWidth)
      }
      setOpen(false)
    }
  }, [])

  return (
    <Styled.Container open={open} minWidth={minWidth}>
      {renderControl(open, controlRef, toggleOpen)}
      <Styled.MenuContainer open={open}>
        {renderMenu(open, menuRef)}
      </Styled.MenuContainer>
    </Styled.Container>
  )
}
