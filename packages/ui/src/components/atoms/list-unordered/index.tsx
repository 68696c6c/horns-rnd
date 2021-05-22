import React, { ElementType, FC } from 'react'

import { ULType } from '@horns/theme'

import * as Styled from './styles'

export interface LIProps extends Styled.LIProps {
  Icon?: ElementType
  type?: ULType
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
  type: typeProp,
  Icon,
  ...others
}: ULProps) => {
  const type = typeProp || ULType.Disc
  if (itemData && itemData.length > 0) {
    return (
      <Styled.UL
        color={color}
        markerColor={markerColor}
        font={font}
        type={type}
        {...others}
      >
        {itemData.map(
          ({
            Icon: ItemIcon,
            children: itemChildren,
            color: itemColor,
            markerColor: itemMarkerColor,
            font: itemFont,
            type: itemType,
          }: LIProps) => (
            <LI
              Icon={ItemIcon || Icon}
              color={itemColor || color}
              markerColor={itemMarkerColor || markerColor}
              font={itemFont || font}
              type={itemType || type}
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
      type={type}
      {...others}
    >
      {children}
    </Styled.UL>
  )
}
