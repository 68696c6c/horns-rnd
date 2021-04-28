import React, { FC, createContext, useContext, ElementType } from 'react'

import { Parent } from '../traits'

export interface LinkResult {}

export interface DefaultLinkProps {
  href: string
  children: string
}

export const DefaultLink: FC<DefaultLinkProps> = ({
  href,
  children,
  ...others
}: DefaultLinkProps) => (
  <a href={href} {...others}>
    {children}
  </a>
)

export const LinkContext = createContext<ElementType>(DefaultLink)
export const useLink = () => useContext(LinkContext)

export interface LinkProviderProps extends Parent {
  Component: ElementType
}

export const LinkProvider = ({ Component, children }: LinkProviderProps) => (
  <LinkContext.Provider value={Component}>{children}</LinkContext.Provider>
)
