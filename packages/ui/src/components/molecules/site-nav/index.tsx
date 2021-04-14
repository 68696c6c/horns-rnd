import React, {
  MouseEvent,
  Dispatch,
  FC,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from 'react'
import { v4 as uuid } from 'uuid'
import _union from 'lodash.union'
import _without from 'lodash.without'

import { Colorway } from '../../../config'
import { Responsive } from '../../../traits'
import { NavItemLayout, NavItemProps } from '../../quarks'
import { useBreakpoint, useID, useNavItem } from '../../../hooks'
import { NavMenu } from '../../atoms'

import {
  renderLinks,
  cloneWithIDs,
  makeLinkMap,
  NavLink,
  LinkMap,
  NavLinkWithID,
} from './utils'
import * as Styled from './styles'

export interface SiteNavProps extends Responsive, NavItemProps {
  currentPath?: string
  links?: NavLink[]
  menuColor?: Colorway
}

const handleClick = (
  event: MouseEvent<HTMLLinkElement>,
  linkMap: LinkMap,
  openItems: string[],
  setOpenItems: Dispatch<string[]>,
) => {
  event.preventDefault()
  const t = event.target as HTMLLinkElement
  const id = t?.getAttribute('data-id') as string
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
  const [navID] = useID()
  const isMobile = useBreakpoint(breakpoint)
  const NavItemTag = useNavItem(variant)

  const [openItems, setOpenItems] = useState<string[]>([])
  const [currentID, setCurrentID] = useState('')
  const [mobileLinks, setMobileLinks] = useState<NavLinkWithID[]>([])

  useEffect(() => {
    const [clones, cID] = cloneWithIDs(links, currentPath, uuid)
    const topLinks = [{ href: '#', text: 'H', links: clones, id: navID }]
    setCurrentID(cID)
    setMobileLinks(topLinks)
  }, [navID, links])

  const [linkMap, setLinkMap] = useState<LinkMap>({})
  useEffect(() => {
    setLinkMap(makeLinkMap(mobileLinks))
  }, [mobileLinks])

  useEffect(() => {
    setOpenItems([])
  }, [isMobile])

  const [currentItems, setCurrentItems] = useState<string[]>([])
  useEffect(() => {
    if (linkMap[currentID]) {
      const ids = linkMap[currentID]
      setCurrentItems(ids)
    }
  }, [linkMap, currentID])

  const navItemProps = {
    currentColor,
    currentBorderWidth,
    currentBorderStyle,
  }
  const [linkItems, setLinkItems] = useState<ReactNode>([])
  useEffect(() => {
    let linksToRender = mobileLinks
    if (!isMobile) {
      linksToRender =
        mobileLinks[0] && mobileLinks[0].links ? mobileLinks[0].links : []
    }
    const items = renderLinks(
      linksToRender,
      color,
      NavItemLayout.Horizontal,
      (link, index, itemColor, itemLayout) => (
        <NavItemTag
          {...navItemProps}
          color={itemColor}
          layout={itemLayout}
          key={link.id}
          data-id={link.id}
          href={link.href}
          onClick={(event) => {
            return handleClick(event, linkMap, openItems, setOpenItems)
          }}
          current={currentItems.includes(link.id)}
        >
          {link.text}
        </NavItemTag>
      ),
      (link, index, itemColor, itemLayout, itemCallback, menuCallback) => (
        <Styled.NavItemMenuContainer
          key={link.id}
          open={openItems.includes(link.id)}
        >
          {itemCallback(link, index, itemColor, itemLayout)}
          <Styled.MenuContainer open={openItems.includes(link.id)}>
            <NavMenu open={openItems.includes(link.id)}>
              {renderLinks(
                link.links,
                menuColor,
                NavItemLayout.Vertical,
                itemCallback,
                menuCallback,
              )}
            </NavMenu>
          </Styled.MenuContainer>
        </Styled.NavItemMenuContainer>
      ),
    )
    setLinkItems(items)
  }, [isMobile, linkMap, currentItems, openItems])

  const handleItemClick = useCallback(
    (event) => {
      const t = event.target as HTMLElement
      const id = t?.getAttribute('data-id') as string
      const linkPath = linkMap[id]
      if (!linkPath) {
        setOpenItems([])
      }
    },
    [linkMap],
  )

  useEffect(() => {
    window.addEventListener('click', handleItemClick)
    return () => {
      window.removeEventListener('click', handleItemClick)
    }
  })

  return (
    <Styled.SiteNav {...others} color={color}>
      {linkItems}
    </Styled.SiteNav>
  )
}
