/* global window */
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface MenuProps {
  onOpen?(): void
  onClose?(): void
  initialOpen?: boolean
  forceWidth?: boolean
}

export const useMenu = <C extends HTMLElement, M extends HTMLElement>({
  initialOpen,
  onOpen,
  onClose,
  forceWidth,
}: MenuProps): [
  boolean,
  number,
  () => void,
  MutableRefObject<C | null>,
  MutableRefObject<M | null>,
] => {
  const controlRef = useRef<C>(null)
  const menuRef = useRef<M>(null)

  const [minWidth, setMinWidth] = useState(0)

  const [open, setOpen] = useState(initialOpen || forceWidth || false)

  const handleClick = useCallback((event) => {
    if (event.target !== controlRef.current) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  })

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
  }, [open, onClose, onOpen])

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
  }, [forceWidth])

  return [open, minWidth, toggleOpen, controlRef, menuRef]
}
