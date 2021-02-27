import React, { FC } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Color from 'color'

import { defaultConfig } from './config'
import { PalletShades, makePallet } from './pallet'

interface ShadeProps {
  shade: Color
  name: string
}

const Shade: FC<ShadeProps> = ({ shade, name }: ShadeProps) => (
  <div
    style={{
      backgroundColor: shade.rgb().string(),
      color: shade.isDark() ? 'white' : 'black',
      padding: '1em',
    }}
  >
    {name}
  </div>
)

interface ColorShadesProps {
  shades: PalletShades
  name: string
}

const ColorShades: FC<ColorShadesProps> = ({
  shades,
  name,
}: ColorShadesProps) => (
  <div>
    <Shade shade={shades.darker} name={`${name}.darker`} />
    <Shade shade={shades.dark} name={`${name}.dark`} />
    <Shade shade={shades.base} name={`${name}.base`} />
    <Shade shade={shades.light} name={`${name}.light`} />
    <Shade shade={shades.lighter} name={`${name}.lighter`} />
  </div>
)

interface PalletProps {
  variant: 'brand' | 'neutral' | 'action'
}

const Pallet: FC<PalletProps> = ({ variant }: PalletProps) => {
  const pallet = makePallet(defaultConfig)
  switch (variant) {
    default:
      return (
        <div>
          <ColorShades shades={pallet.primary} name="primary" />
          <ColorShades shades={pallet.secondary} name="secondary" />
          <ColorShades shades={pallet.tertiary} name="tertiary" />
        </div>
      )
    case 'neutral':
      return (
        <div>
          <ColorShades shades={pallet.dark} name="dark" />
          <ColorShades shades={pallet.neutral} name="neutral" />
          <ColorShades shades={pallet.light} name="light" />
        </div>
      )
    case 'action':
      return (
        <div>
          <ColorShades shades={pallet.success} name="success" />
          <ColorShades shades={pallet.info} name="info" />
          <ColorShades shades={pallet.warning} name="warning" />
          <ColorShades shades={pallet.danger} name="danger" />
        </div>
      )
  }
}

export default {
  title: 'Config/Pallet',
  component: Pallet,
} as Meta

const PalletStory: Story = () => (
  <div>
    <Pallet variant="brand" />
    <Pallet variant="neutral" />
    <Pallet variant="action" />
  </div>
)

export { PalletStory as Pallet }
