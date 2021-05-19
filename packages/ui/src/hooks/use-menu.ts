import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface MenuArgs {
  onOpen?(): void
  onClose?(): void
  isMenuElement(target: EventTarget): boolean
}

export interface MenuResult<M extends HTMLElement> {
  open: boolean
  minWidth: number
  toggleOpen: () => void
  menuRef: MutableRefObject<M | null>
}

export const useMenu = <M extends HTMLElement>({
  onOpen,
  onClose,
  isMenuElement,
}: MenuArgs): MenuResult<M> => {
  const menuRef = useRef<M>(null)
  const [open, setOpen] = useState(false)
  const [minWidth, setMinWidth] = useState(0)
  const toggleOpen = () => {
    setOpen(!open)
  }
  useEffect(() => {
    const menuWidth = menuRef?.current?.offsetWidth || 0
    setMinWidth(menuWidth)
  }, [])

  const handleClick = useCallback(
    (event) => {
      if (!isMenuElement(event.target)) {
        setOpen(false)
      }
    },
    [isMenuElement],
  )

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  useEffect(() => {
    if (open) {
      if (typeof onOpen !== 'undefined') {
        onOpen()
      }
    } else if (typeof onClose !== 'undefined') {
      onClose()
    }
  }, [open, onOpen, onClose])

  return {
    open,
    minWidth,
    toggleOpen,
    menuRef,
  }
}
