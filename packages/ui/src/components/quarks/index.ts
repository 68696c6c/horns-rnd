// Quarks are styled components like atoms, but are for internal use only and are not exported
// outside of the components module.  They are used as a way for otherwise unrelated atoms, like
// Button and Link, to share certain styles with each other.  Like atoms, they are composed of
// traits and export styled components, making them distinctly different than traits, which are
// neither composed nor components and exist only to apply theming to specific css properties.
export {
  LinkVariant,
  ButtonProps,
  BaseLinkProps,
  LinkButton,
  Link,
} from './clickable'
