import React, { Dispatch, FC, MouseEvent, useEffect, useMemo } from 'react'
import _union from 'lodash.union'
import _without from 'lodash.without'

import { Colorway } from '../../../config'
import { Responsive } from '../../../traits'
import { NavItemLayout, NavItemProps } from '../../quarks'
import {
  NavLink,
  navLinkIDDataAttribute,
  NavMenuLinkIDMap,
  useBreakpoint,
  useNavMenu,
} from '../../../hooks'
import { SiteNavMenu } from '../../molecules'

import * as Styled from './styles'
import { navItemFactory } from '../../atoms'

export interface SiteNavProps extends Responsive, NavItemProps {
  currentPath?: string
  links?: NavLink[]
  menuColor?: Colorway
}

const handleClick = (
  event: MouseEvent<HTMLAnchorElement>,
  linkMap: NavMenuLinkIDMap,
  openItems: string[],
  setOpenItems: Dispatch<string[]>,
) => {
  event.preventDefault()
  const t = event.target as HTMLAnchorElement
  const id = t?.getAttribute(navLinkIDDataAttribute) as string
  const linkPath = linkMap[id]
  if (!linkPath) {
    setOpenItems([])
  }
  if (openItems.includes(id)) {
    const merged = _without(openItems, id)
    setOpenItems(merged)
  } else {
    const merged = _union(openItems, linkPath)
    setOpenItems(merged)
  }
}

export const SiteNav: FC<SiteNavProps> = ({
  links,
  currentPath,
  variant,
  layout,
  color,
  currentColor,
  currentBorderWidth,
  currentBorderStyle,
  menuColor,
  breakpoint,
  ...others
}: SiteNavProps) => {
  const NavItemTag = useMemo(() => navItemFactory(variant), [variant])
  const isMobile = useBreakpoint(breakpoint)

  const {
    openLinkIDs,
    currentLinkIDs,
    navLinks,
    navLinkIDMap,
    setOpenLinkIDs,
  } = useNavMenu(links || [], currentPath || '')

  useEffect(() => {
    // Close the menu when we cross the responsive breakpoint.
    setOpenLinkIDs([])
  }, [isMobile, setOpenLinkIDs])

  const navItemProps = {
    currentColor,
    currentBorderWidth,
    currentBorderStyle,
    menuColor,
  }
  let linksToRender = navLinks
  if (!isMobile) {
    linksToRender = navLinks[0] && navLinks[0].links ? navLinks[0].links : []
  }

  return (
    <Styled.SiteNav {...others} color={color}>
      <SiteNavMenu
        top
        links={linksToRender}
        color={color}
        layout={NavItemLayout.Horizontal}
        menuColor={menuColor}
        openLinkIDs={openLinkIDs}
        renderItem={(link, itemColor, itemLayout) => (
          <NavItemTag
            {...navItemProps}
            {...{ [navLinkIDDataAttribute]: link.id }}
            color={itemColor}
            layout={itemLayout}
            key={link.id}
            href={link.href}
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
              return handleClick(
                event,
                navLinkIDMap,
                openLinkIDs,
                setOpenLinkIDs,
              )
            }}
            current={currentLinkIDs.includes(link.id)}
          >
            {link.text}
          </NavItemTag>
        )}
      />
    </Styled.SiteNav>
  )
}
