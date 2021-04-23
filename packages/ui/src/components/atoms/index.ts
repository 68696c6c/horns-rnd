import { NavItemVariant } from '../quarks'
import { NavItemBackground } from './nav-item-background'
import { NavItemUnderline } from './nav-item-underline'
import { NavItemBorder } from './nav-item-border'

export { AutoGrid } from './auto-grid'
export { Button } from './button'
export { Columns, ColumnsProps } from './columns'
export { Footer } from './footer'
export { Header } from './header'
export { Input, InputProps } from './input'
export { Label } from './label'
export { Link } from './link'
export { LinkEmail } from './link-email'
export { Main } from './main'
export { Nav } from './nav'
export { NavItemBackground } from './nav-item-background'
export { NavItemBorder } from './nav-item-border'
export { NavItemUnderline } from './nav-item-underline'
export { Section } from './section'
export { Select, SelectProps } from './select'
export { SelectNative } from './select-native'
export { Stack } from './stack'
export { Table } from './table'
export { Textarea } from './textarea'
export { Toggle, Checkbox, Radio } from './toggle'
export { T, Heading, SubHeading } from './typography'

export const navItemFactory = (variant?: NavItemVariant) => {
  switch (variant) {
    case NavItemVariant.Background:
      return NavItemBackground
    case NavItemVariant.Underline:
      return NavItemUnderline
    default:
      return NavItemBorder
  }
}
