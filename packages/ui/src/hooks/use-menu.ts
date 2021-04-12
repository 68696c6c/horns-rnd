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

type MenuRef = MutableRefObject<HTMLElement | undefined>

export const useMenu = ({
  initialOpen,
  onOpen,
  onClose,
  forceWidth,
}: MenuProps): [boolean, number, () => void, MenuRef, MenuRef] => {
  const controlRef = useRef<HTMLElement>()
  const menuRef = useRef<HTMLElement>()

  const [minWidth, setMinWidth] = useState(0)

  const [open, setOpen] = useState(initialOpen || forceWidth || false)

  const handleClick = useCallback((event) => {
    if (event.target !== controlRef.current) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.addEventListener('click', handleClick)
    return () => {
      // eslint-disable-next-line no-undef
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

  return [open, minWidth, toggleOpen, controlRef, menuRef]
}
