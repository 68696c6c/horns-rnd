/* global window */
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
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

const setWidth = <C extends HTMLElement, M extends HTMLElement>(
  controlRef: MutableRefObject<C | null>,
  menuRef: MutableRefObject<M | null>,
  setMinWidth: Dispatch<SetStateAction<number>>,
): void => {
  const controlWidth = controlRef?.current?.offsetWidth || 0
  const menuWidth = menuRef?.current?.offsetWidth || 0
  if (controlWidth < menuWidth) {
    setMinWidth(menuWidth)
  } else if (controlWidth > menuWidth) {
    setMinWidth(controlWidth)
  }
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
    setWidth(controlRef, menuRef, setMinWidth)
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
      setWidth(controlRef, menuRef, setMinWidth)
      setOpen(false)
    }
  }, [forceWidth])

  return [open, minWidth, toggleOpen, controlRef, menuRef]
}
