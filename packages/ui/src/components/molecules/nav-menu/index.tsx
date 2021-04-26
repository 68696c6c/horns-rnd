import React, { FC, ReactNode } from 'react'

import { Colorway } from '../../../config'
import { NavItemLayout, NavItemProps, MenuContainer } from '../../quarks'
import { NavLinkWithID } from '../../../hooks'

import * as Styled from './styles'

export type NavItemRenderer = (
  link: NavLinkWithID,
  itemColor: Colorway | undefined,
  itemLayout: NavItemLayout,
) => ReactNode

export interface NavMenuProps extends NavItemProps {
  layout: NavItemLayout
  links?: NavLinkWithID[]
  renderItem: NavItemRenderer
  menuColor?: Colorway
  openLinkIDs: string[]
  top?: boolean
}

export const NavMenu: FC<NavMenuProps> = ({
  color,
  links,
  renderItem,
  menuColor,
  openLinkIDs,
  layout,
  top,
}: NavMenuProps) => (
  <>
    {links &&
      links.map((link) => {
        if (link.links && link.links.length) {
          return (
            <Styled.NavItemMenuContainer
              key={link.id}
              open={openLinkIDs.includes(link.id)}
            >
              {renderItem(link, top ? color : menuColor, layout)}
              <MenuContainer open={openLinkIDs.includes(link.id)}>
                <Styled.NavMenu open={openLinkIDs.includes(link.id)}>
                  <NavMenu
                    links={link.links}
                    color={menuColor}
                    menuColor={menuColor}
                    layout={NavItemLayout.Vertical}
                    renderItem={renderItem}
                    openLinkIDs={openLinkIDs}
                  />
                </Styled.NavMenu>
              </MenuContainer>
            </Styled.NavItemMenuContainer>
          )
        }
        return renderItem(link, color, layout)
      })}
  </>
)
