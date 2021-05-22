import React, { ElementType, FC } from 'react'

import { OLType } from '@horns/theme'

import * as Styled from './styles'

export interface OLProps extends Styled.OLProps {
  itemData?: Styled.LIProps[]
  Icon?: ElementType
}

export const OL: FC<OLProps> = ({
  children,
  color,
  markerColor,
  font,
  itemData,
  Icon,
  type: typeProp,
  ...others
}: OLProps) => {
  const type = typeProp || OLType.l
  if (itemData && itemData.length > 0) {
    return (
      <Styled.OL
        color={color}
        markerColor={markerColor}
        font={font}
        type={type}
        {...others}
      >
        {itemData.map(
          ({
            children: itemChildren,
            color: itemColor,
            markerColor: itemMarkerColor,
            font: itemFont,
            type: itemType,
          }: Styled.LIProps) => (
            <Styled.LI
              color={itemColor || color}
              markerColor={itemMarkerColor || markerColor}
              font={itemFont || font}
              type={itemType || type}
            >
              {itemChildren}
            </Styled.LI>
          ),
        )}
      </Styled.OL>
    )
  }
  return (
    <Styled.OL
      color={color}
      markerColor={markerColor}
      font={font}
      type={type}
      {...others}
    >
      {children}
    </Styled.OL>
  )
}
