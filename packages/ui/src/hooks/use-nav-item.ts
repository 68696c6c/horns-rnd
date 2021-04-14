import { useEffect, useState } from 'react'
import { StyledComponent } from '@emotion/styled'

import { NavItemProps, NavItemVariant } from '../components/quarks'
import {
  NavItemBackground,
  NavItemBorder,
  NavItemUnderline,
} from '../components/atoms'

export type StyledNavItem = StyledComponent<NavItemProps>

export const useNavItem = (variant?: NavItemVariant): StyledNavItem => {
  const [Tag, setTag] = useState<StyledNavItem>(NavItemBorder)
  useEffect(() => {
    switch (variant) {
      case NavItemVariant.Background:
        setTag(NavItemBackground)
        break
      case NavItemVariant.Underline:
        setTag(NavItemUnderline)
        break
      default:
        setTag(NavItemBorder)
    }
  }, [variant])
  return Tag
}
