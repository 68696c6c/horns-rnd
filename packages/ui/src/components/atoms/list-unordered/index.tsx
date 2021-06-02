import React, { ElementType, FC } from 'react'

import { ULType } from '@horns/theme'

import { useRowIDs } from '../../../hooks'

import * as Styled from './styles'

export interface LIProps extends Styled.LIProps {
  Icon?: ElementType
  listType?: ULType
}

export const LI: FC<LIProps> = ({
  Icon,
  font,
  children,
  ...others
}: LIProps) => {
  if (typeof Icon !== 'undefined') {
    return (
      <Styled.LI {...others} font={font} hasIcon>
        <Styled.Marker className="marker" font={font}>
          <Icon />
        </Styled.Marker>
        {children}
      </Styled.LI>
    )
  }
  return (
    <Styled.LI {...others} font={font}>
      {children}
    </Styled.LI>
  )
}

export interface ULProps extends Styled.ULProps {
  itemData?: LIProps[]
  Icon?: ElementType
}

export const UL: FC<ULProps> = ({
  children,
  color,
  markerColor,
  font,
  itemData,
  listType: listTypeProp,
  Icon,
  ...others
}: ULProps) => {
  const [itemIDs] = useRowIDs(itemData)
  const listType = listTypeProp || ULType.Disc
  if (itemData && itemData.length > 0) {
    return (
      <Styled.UL
        color={color}
        markerColor={markerColor}
        font={font}
        listType={listType}
        {...others}
      >
        {itemData.map(
          (
            {
              Icon: ItemIcon,
              children: itemChildren,
              color: itemColor,
              markerColor: itemMarkerColor,
              font: itemFont,
              listType: itemType,
            }: LIProps,
            index,
          ) => (
            <LI
              key={itemIDs[index]}
              Icon={ItemIcon || Icon}
              color={itemColor || color}
              markerColor={itemMarkerColor || markerColor}
              font={itemFont || font}
              listType={itemType || listType}
            >
              {itemChildren}
            </LI>
          ),
        )}
      </Styled.UL>
    )
  }
  return (
    <Styled.UL
      color={color}
      markerColor={markerColor}
      font={font}
      listType={listType}
      {...others}
    >
      {children}
    </Styled.UL>
  )
}
