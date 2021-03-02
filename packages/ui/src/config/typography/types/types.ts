export enum Direction {
  RTL = 'rtl',
  LTR = 'ltr',
}

export type DirectionOption = `${Direction}`

export enum FontKerning {
  Auto = 'auto',
  Normal = 'normal',
  None = 'none',
}

export enum FontStyle {
  Normal = 'normal',
  Italic = 'italic',
  Oblique = 'oblique',
  Initial = 'initial',
  Inherit = 'inherit',
}

export enum TextAlign {
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify',
  Initial = 'initial',
  Inherit = 'inherit',
}

export enum TextAlignLast {
  Auto = 'auto',
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify',
  Start = 'start',
  End = 'end',
  Initial = 'initial',
  Inherit = 'inherit',
}

export enum TextJustify {
  None = 'none',
  Auto = 'auto', // default
  InterWord = 'inter-word',
  InterCharacter = 'inter-character',
  Initial = 'initial',
  Inherit = 'inherit',
}

export enum TextTransform {
  None = 'none',
  Capitalize = 'capitalize',
  Uppercase = 'uppercase',
  Lowercase = 'lowercase',
  Initial = 'initial',
  Inherit = 'inherit',
}

// export enum BaseLetterSpacing {
//   Normal = 'normal',
//   Initial = 'initial',
//   Inherit = 'inherit',
// }
//
// export type LetterSpacing = BaseLetterSpacing | string

// export enum BaseWordSpacing {
//   Normal = 'normal',
//   Initial = 'initial',
//   Inherit = 'inherit',
// }
//
// export type WordSpacing = BaseWordSpacing | string
