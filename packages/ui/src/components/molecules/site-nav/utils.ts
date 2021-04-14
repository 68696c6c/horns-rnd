import { ReactNode } from 'react'
import _cloneDeep from 'lodash.clonedeep'

import { Colorway } from '../../../config'
import { NavItemLayout } from '../../quarks'

export interface NavLink {
  href: string
  text: string
  links?: NavLink[]
}

export interface NavLinkWithID extends NavLink {
  id: string
  links?: NavLinkWithID[]
}

export type ItemCallback = (
  link: NavLinkWithID,
  index: number,
  itemColor: Colorway | undefined,
  itemLayout: NavItemLayout,
) => ReactNode

export type MenuCallback = (
  link: NavLinkWithID,
  index: number,
  itemColor: Colorway | undefined,
  itemLayout: NavItemLayout,
  itemCallback: ItemCallback,
  menuCallback: MenuCallback,
) => void

export const renderLinks = (
  links: NavLinkWithID[] | undefined,
  color: Colorway | undefined,
  layout: NavItemLayout,
  itemCallback: ItemCallback,
  menuCallback: MenuCallback,
): ReactNode => {
  if (typeof links === 'undefined') {
    return null
  }
  return links.map((link, index) => {
    if (link.links && link.links.length) {
      return menuCallback(
        link,
        index,
        color,
        layout,
        itemCallback,
        menuCallback,
      )
    }
    return itemCallback(link, index, color, layout)
  })
}

export const cloneWithIDs = (
  inputLinks: NavLink[] | undefined,
  currentHref: string | undefined,
  makeID: () => string,
): [NavLinkWithID[], string] => {
  if (typeof inputLinks === 'undefined') {
    return [[] as NavLinkWithID[], '']
  }
  let currentID = ''
  const addIDRecursively = (obj: NavLinkWithID | NavLinkWithID[]) => {
    if (Array.isArray(obj)) {
      obj.forEach(addIDRecursively)
    } else if (obj && typeof obj === 'object') {
      // The whole point of this function is to add keys to the input object which is already a
      // clone of the object the caller provided so we aren't concerned about this side-affect.
      // eslint-disable-next-line no-param-reassign
      obj.id = makeID()
      if (obj.href === currentHref) {
        currentID = obj.id
      }
      if (typeof obj.links !== 'undefined' && obj.links.length > 0) {
        addIDRecursively(obj.links as NavLinkWithID[])
      }
    }
  }
  const clonedLinks = _cloneDeep(inputLinks) as NavLinkWithID[]
  addIDRecursively(clonedLinks)
  return [clonedLinks, currentID]
}

type LinkCallback = (link: NavLinkWithID, index: number) => void
type LinkCountCallback = (link: NavLinkWithID) => void
export type LinkMap = Record<string, string[]>

export const makeLinkMap = (inputLinks: NavLinkWithID[]): LinkMap => {
  const iterateLinks = (
    links: NavLinkWithID[],
    callback: LinkCallback,
    incrementLevel: LinkCountCallback,
    decrementLevel: LinkCountCallback,
  ) => {
    links.forEach((link, index) => {
      callback(link, index)
      if (link.links && link.links.length) {
        incrementLevel(link)
        iterateLinks(link.links, callback, incrementLevel, decrementLevel)
        decrementLevel(link)
      }
    })
  }

  const linkIDs = [] as string[]
  const linkMap = {} as LinkMap
  iterateLinks(
    inputLinks,
    (link) => {
      linkMap[link.id] = [...linkIDs, link.id]
    },
    (link) => {
      linkIDs.push(link.id)
    },
    (link) => {
      const index = linkIDs.indexOf(link.id)
      linkIDs.splice(index, 1)
    },
  )
  return linkMap
}
