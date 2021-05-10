import React, { Dispatch, FC, MouseEvent, useEffect } from 'react'
import _union from 'lodash.union'
import _without from 'lodash.without'

import { Colorway } from '@horns/theme'

import { Responsive } from '../../../traits'
import { NavItemLayout, BaseNavItemProps, CustomLink } from '../../quarks'
import {
  NavLink,
  navLinkIDDataAttribute,
  NavMenuLinkIDMap,
  useBreakpoint,
  useNavMenu,
} from '../../../hooks'
import { NavMenu } from '../../molecules'
import { NavItem } from '../../atoms'

import * as Styled from './styles'

export interface SiteNavProps extends Responsive, BaseNavItemProps, CustomLink {
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
  LinkComponent,
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
  // const NavItemTag = useMemo(() => navItemFactory(variant), [variant])
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
    LinkComponent,
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
      <NavMenu
        top
        links={linksToRender}
        color={color}
        layout={NavItemLayout.Horizontal}
        menuColor={menuColor}
        openLinkIDs={openLinkIDs}
        renderItem={(link, itemColor, itemLayout) => (
          <NavItem
            {...navItemProps}
            {...{ [navLinkIDDataAttribute]: link.id }}
            variant={variant}
            color={itemColor}
            layout={itemLayout}
            key={link.id}
            href={link.href}
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
              if (!link.links) {
                return
              }
              handleClick(event, navLinkIDMap, openLinkIDs, setOpenLinkIDs)
            }}
            current={currentLinkIDs.includes(link.id)}
          >
            {link.text}
          </NavItem>
        )}
      />
    </Styled.SiteNav>
  )
}
