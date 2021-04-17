/* global window */
import {
  useCallback,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
} from 'react'
import { v4 as uuid } from 'uuid'
import _cloneDeep from 'lodash.clonedeep'

import { useID } from './use-id'

export const navLinkIDDataAttribute = 'data-nav-link-id'

export interface NavLink {
  href: string
  text: string
  links?: NavLink[]
}

export interface NavLinkWithID extends NavLink {
  id: string
  links?: NavLinkWithID[]
}

const cloneWithIDs = (
  inputLinks: NavLink[] | undefined,
  makeID: () => string,
): NavLinkWithID[] => {
  if (typeof inputLinks === 'undefined') {
    return [] as NavLinkWithID[]
  }
  const addIDRecursively = (obj: NavLinkWithID | NavLinkWithID[]) => {
    if (Array.isArray(obj)) {
      obj.forEach(addIDRecursively)
    } else if (obj && typeof obj === 'object') {
      // The whole point of this function is to add keys to the input object which is already a
      // clone of the object the caller provided so we aren't concerned about this side-affect.
      // eslint-disable-next-line no-param-reassign
      obj.id = makeID()
      if (typeof obj.links !== 'undefined' && obj.links.length > 0) {
        addIDRecursively(obj.links as NavLinkWithID[])
      }
    }
  }
  const clonedLinks = _cloneDeep(inputLinks) as NavLinkWithID[]
  addIDRecursively(clonedLinks)
  return clonedLinks
}

type ItemCallback = (link: NavLinkWithID, index: number) => void
type LevelCallback = (link: NavLinkWithID) => void
export type NavMenuLinkIDMap = Record<string, string[]>

const iterateNavLinks = (
  links: NavLinkWithID[],
  callback: ItemCallback,
  incrementLevel: LevelCallback,
  decrementLevel: LevelCallback,
) => {
  links.forEach((link, index) => {
    callback(link, index)
    if (link.links && link.links.length) {
      incrementLevel(link)
      iterateNavLinks(link.links, callback, incrementLevel, decrementLevel)
      decrementLevel(link)
    }
  })
}

const makeNavLinkIDMap = (
  inputItems: NavLinkWithID[],
): [NavMenuLinkIDMap, Record<string, string>] => {
  const linkIDs = [] as string[]
  const linkIDMap = {} as NavMenuLinkIDMap
  const linkHrefMap = {} as Record<string, string>
  iterateNavLinks(
    inputItems,
    (link) => {
      linkIDMap[link.id] = [...linkIDs, link.id]
      linkHrefMap[link.href] = link.id
    },
    (link) => {
      linkIDs.push(link.id)
    },
    (link) => {
      const linkIDIndex = linkIDs.indexOf(link.id)
      linkIDs.splice(linkIDIndex, 1)
    },
  )
  return [linkIDMap, linkHrefMap]
}

export interface NavMenuProps {
  openLinkIDs: string[]
  currentLinkIDs: string[]
  navLinks: NavLinkWithID[]
  navLinkIDMap: NavMenuLinkIDMap
  setOpenLinkIDs: Dispatch<SetStateAction<string[]>>
}

export const useNavMenu = (
  links: NavLink[],
  currentPath: string,
): NavMenuProps => {
  // Keep track of the currently open menu items.
  const [openLinkIDs, setOpenLinkIDs] = useState<string[]>([])

  // Set an id for each item when the links change.
  const [navID] = useID()
  const [navLinks, setNavLinks] = useState<NavLinkWithID[]>([])
  useEffect(() => {
    const clones = cloneWithIDs(links, uuid)
    setNavLinks([{ href: '#', text: 'H', links: clones, id: navID }])
  }, [navID, links])

  // Map each item id to all of it's parent ids.
  const [navLinkIDMap, setNavLinkIDMap] = useState<NavMenuLinkIDMap>({})
  const [navLinkHrefMap, setNavLinkHrefMap] = useState<Record<string, string>>(
    {},
  )
  useEffect(() => {
    const [idMap, hrefMap] = makeNavLinkIDMap(navLinks)
    setNavLinkIDMap(idMap)
    setNavLinkHrefMap(hrefMap)
  }, [navLinks])

  // Set the current id when the current path changes.
  const [currentID, setCurrentID] = useState('')
  useEffect(() => {
    if (typeof currentPath !== 'undefined') {
      const itemID = navLinkHrefMap[currentPath]
      if (typeof itemID !== 'undefined') {
        setCurrentID(itemID)
      }
    }
  }, [currentPath, navLinkHrefMap])

  // Set the current items when the currentID or items change.
  const [currentLinkIDs, setCurrentLinkIDs] = useState<string[]>([])
  useEffect(() => {
    if (navLinkIDMap[currentID]) {
      const ids = navLinkIDMap[currentID]
      setCurrentLinkIDs(ids)
    }
  }, [navLinkIDMap, currentID])

  // When the user clicks, close the menu if they didn't click on one of the items.
  const handleItemClick = useCallback(
    (event) => {
      const t = event.target as HTMLElement
      const id = t?.getAttribute(navLinkIDDataAttribute) as string
      const linkPath = navLinkIDMap[id]
      if (!linkPath) {
        setOpenLinkIDs([])
      }
    },
    [navLinkIDMap],
  )
  useEffect(() => {
    window.addEventListener('click', handleItemClick)
    return () => {
      window.removeEventListener('click', handleItemClick)
    }
  }, [handleItemClick])

  return {
    openLinkIDs,
    currentLinkIDs,
    navLinks,
    navLinkIDMap,
    setOpenLinkIDs,
  }
}
