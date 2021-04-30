/**
 * This file is using ComponentType instead of the recommended ElementType because ElementType
 * doesn't work with the Emotion styled function and the objective is to provide a custom component
 * that can be passed to that function.
 */
import React, { FC, createContext, useContext, ComponentType } from 'react'

import { Parent } from '../traits'
import { LinkProps } from '../components'

export const DefaultLink: FC<LinkProps> = ({
  href,
  children,
  ...others
}: LinkProps) => (
  <a href={href} {...others}>
    {children}
  </a>
)

export const LinkContext = createContext<ComponentType<any>>(DefaultLink)
export const useLink = () => useContext(LinkContext)

export interface LinkProviderProps extends Parent {
  Component: ComponentType<any>
}

export const LinkProvider = ({ Component, children }: LinkProviderProps) => (
  <LinkContext.Provider value={Component}>{children}</LinkContext.Provider>
)
