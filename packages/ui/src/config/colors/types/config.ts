import Color from 'color'

import { Colorway } from './types'

export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

export type PalletConfig = {
  [key in Colorway]: string
}

// These template literal types exist to allow users to provide config values as strings instead of
// enums since they won't have access to our enums.
type ModeOption = `${Mode}`
type ProminentOption = `${Colorway}`

export interface Config {
  mode: ModeOption
  prominent: ProminentOption
  pallet: Omit<PalletConfig, 'prominent'>
  shaders: Shaders
}

export interface Shaders {
  alpha: number
  darkest: number
  lightest: number
  darker: MinMax
  dark: MinMax
  light: MinMax
  lighter: MinMax
}

export interface MinMax {
  min: number
  max: number
}

export const hexPallet = {
  violet: '#7f00ff',
  indigo: '#3f00ff',
  blue: '#1a99ff',
  cyan: '#17a2b8',
  teal: '#009999',
  green: '#28a745',
  yellow: '#ffc107',
  tangerine: '#ffaa00',
  mustard: '#aa7700',
  orange: '#fd7e14',
  red: '#dc3545',
  white: '#ffffff',
  gray: '#7f7f7f',
  black: '#010101',
}

export const colorPallet = {
  // violet: Color(hexPallet.violet),
  // indigo: Color(hexPallet.indigo),
  // blue: Color(hexPallet.blue),
  // cyan: Color(hexPallet.cyan),
  // teal: Color(hexPallet.teal),
  // green: Color(hexPallet.green),
  // yellow: Color(hexPallet.yellow),
  // tangerine: Color(hexPallet.tangerine),
  // mustard: Color(hexPallet.mustard),
  // orange: Color(hexPallet.orange),
  // red: Color(hexPallet.red),
  white: Color(hexPallet.white),
  gray: Color(hexPallet.gray),
  black: Color(hexPallet.black),
}

export const defaultConfig: Config = {
  mode: 'light',
  prominent: 'primary',
  pallet: {
    primary: hexPallet.tangerine,
    secondary: hexPallet.blue,
    tertiary: hexPallet.teal,
    dark: hexPallet.black,
    neutral: hexPallet.gray,
    light: hexPallet.white,
    // dark: '#070706',
    // neutral: '#887E6A',
    // light: '#F9F9F8',
    success: hexPallet.green,
    info: hexPallet.cyan,
    warning: hexPallet.yellow,
    danger: hexPallet.red,
  },
  shaders: {
    alpha: 0.3,
    darkest: 88,
    lightest: 20,
    darker: {
      min: 0.08,
      max: 0.155,
    },
    dark: {
      min: 0.2,
      max: 0.47,
    },
    light: {
      min: 0.22,
      max: 0.55,
    },
    lighter: {
      min: 25,
      max: 40,
    },
  },
}
