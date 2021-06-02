import React, { ElementType, FC } from 'react'

import { OLType } from '@horns/theme'

import { useRowIDs } from '../../../hooks'

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
  listType: listTypeProp,
  ...others
}: OLProps) => {
  const [itemIDs] = useRowIDs(itemData)
  const listType = listTypeProp || OLType.Decimal
  if (itemData && itemData.length > 0) {
    return (
      <Styled.OL
        color={color}
        markerColor={markerColor}
        font={font}
        listType={listType}
        {...others}
      >
        {itemData.map(
          (
            {
              children: itemChildren,
              color: itemColor,
              markerColor: itemMarkerColor,
              font: itemFont,
              listType: itemType,
            }: Styled.LIProps,
            index,
          ) => (
            <Styled.LI
              key={itemIDs[index]}
              color={itemColor || color}
              markerColor={itemMarkerColor || markerColor}
              font={itemFont || font}
              listType={itemType || listType}
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
      listType={listType}
      {...others}
    >
      {children}
    </Styled.OL>
  )
}
