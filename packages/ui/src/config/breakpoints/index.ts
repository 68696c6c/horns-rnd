import _merge from 'lodash.merge'

export enum Breakpoint {
  Mobile = 'mobile',
  Min = 'min',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Max = 'max',
}

export type BreakpointsConfig = {
  [key in Breakpoint]: string
}

export const defaultConfig: BreakpointsConfig = {
  mobile: 'small',
  min: '320px',
  small: '480px',
  medium: '768px',
  large: '992px',
  max: '1200px',
}

export class Breakpoints {
  mobile: string

  min: string

  small: string

  medium: string

  large: string

  max: string

  constructor(config?: Partial<BreakpointsConfig>) {
    const mergedConfig = _merge(defaultConfig, config)

    this.mobile = mergedConfig[mergedConfig.mobile as Breakpoint]
    this.min = mergedConfig.min
    this.small = mergedConfig.small
    this.medium = mergedConfig.medium
    this.large = mergedConfig.large
    this.max = mergedConfig.max
  }
}
