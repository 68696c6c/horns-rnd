import React from 'react'

import {
  assertButtonStateStyles,
  assertLinkStateStyles,
  render,
  screen,
} from '../../test'
import {
  BorderStyle,
  Colorway,
  Font,
  HeadingLevel,
  Size,
} from '../../../config'
import { LinkVariant } from '../../quarks'

import { LinkEmail } from '.'

const props = {
  email: 'example@example.com',
  subject: 'example subject',
  body: 'example body',
}

describe('LinkEmail', () => {
  it('should render as default', () => {
    const { container } = render(<LinkEmail {...props}>example</LinkEmail>)
    expect(container).toMatchSnapshot()
  })

  it('should render as a button', () => {
    const { container } = render(
      <LinkEmail {...props} variant={LinkVariant.Button}>
        example
      </LinkEmail>,
    )
    expect(container).toMatchSnapshot()
  })

  describe('link variant', () => {
    it('should render as default', () => {
      const { container } = render(
        <LinkEmail {...props} variant={LinkVariant.Link}>
          example
        </LinkEmail>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each(Object.values(Colorway))('should render colorway %s', (color) => {
      const { container } = render(
        <LinkEmail {...props} variant={LinkVariant.Link} color={color}>
          {color}
        </LinkEmail>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each([...Object.values(Font), ...Object.values(HeadingLevel)])(
      'should render font %s',
      (font) => {
        const { container } = render(
          <LinkEmail {...props} variant={LinkVariant.Link} font={font}>
            {font}
          </LinkEmail>,
        )
        expect(container).toMatchSnapshot()
      },
    )
    describe('ui states', () => {
      it('should render default state', () => {
        const text = 'link-default'
        render(
          <LinkEmail {...props} variant={LinkVariant.Link}>
            {text}
          </LinkEmail>,
        )
        assertLinkStateStyles(screen.getByText(text), '', {
          color: 'rgb(1, 1, 1)',
          'text-decoration-color': 'rgb(1, 1, 1)',
          'text-decoration-line': 'underline',
          'text-decoration-style': 'solid',
          'font-style': 'normal',
        })
      })
      it('should render hover state', () => {
        const text = 'link-hover'
        render(
          <LinkEmail {...props} variant={LinkVariant.Link}>
            {text}
          </LinkEmail>,
        )
        assertLinkStateStyles(screen.getByText(text), ':hover', {
          color: 'rgb(1, 1, 1)',
          'text-decoration-color': 'rgb(1, 1, 1)',
          'text-decoration-line': 'underline',
          'text-decoration-style': 'solid',
          'font-style': 'italic',
        })
      })
      it('should render active state', () => {
        const text = 'link-active'
        render(
          <LinkEmail {...props} variant={LinkVariant.Link}>
            {text}
          </LinkEmail>,
        )
        assertLinkStateStyles(screen.getByText(text), ':active', {
          color: 'rgb(1, 1, 1)',
          'text-decoration-color': 'rgb(1, 1, 1)',
          'text-decoration-line': 'underline',
          'text-decoration-style': 'double',
          'font-style': 'italic',
        })
      })
      it('should render visited state', () => {
        const text = 'link-visited'
        render(
          <LinkEmail {...props} variant={LinkVariant.Link}>
            {text}
          </LinkEmail>,
        )
        assertLinkStateStyles(screen.getByText(text), ':visited', {
          color: 'rgb(1, 1, 1)',
          'text-decoration-color': 'rgb(1, 1, 1)',
          'text-decoration-line': 'underline',
          'text-decoration-style': 'solid',
          'font-style': 'italic',
        })
      })
    })
  })

  describe('button variant', () => {
    it('should render as default', () => {
      const { container } = render(
        <LinkEmail {...props} variant={LinkVariant.Button}>
          example
        </LinkEmail>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each(Object.values(Colorway))('should render colorway %s', (color) => {
      const { container } = render(
        <LinkEmail {...props} variant={LinkVariant.Button} color={color}>
          {color}
        </LinkEmail>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each(Object.values(BorderStyle))(
      'should render border style %s',
      (style) => {
        const { container } = render(
          <LinkEmail
            {...props}
            variant={LinkVariant.Button}
            border={{ all: { style, width: Size.Small } }}
          >
            {style}
          </LinkEmail>,
        )
        expect(container).toMatchSnapshot()
      },
    )
    it.each(Object.values(Size))('should render border width %s', (size) => {
      const { container } = render(
        <LinkEmail
          {...props}
          variant={LinkVariant.Button}
          border={{ all: { style: BorderStyle.Solid, width: size } }}
        >
          {size}
        </LinkEmail>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each(Object.values(Size))('should render padding %s', (size) => {
      const { container } = render(
        <LinkEmail {...props} variant={LinkVariant.Button} padding={size}>
          {size}
        </LinkEmail>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each(Object.values(Size))('should render radius %s', (size) => {
      const { container } = render(
        <LinkEmail {...props} variant={LinkVariant.Button} radius={size}>
          {size}
        </LinkEmail>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each([...Object.values(Font), ...Object.values(HeadingLevel)])(
      'should render font %s',
      (font) => {
        const { container } = render(
          <LinkEmail {...props} variant={LinkVariant.Button} font={font}>
            {font}
          </LinkEmail>,
        )
        expect(container).toMatchSnapshot()
      },
    )
    describe('ui states', () => {
      it('should render default state', () => {
        const text = 'link-button-default'
        render(
          <LinkEmail {...props} variant={LinkVariant.Button}>
            {text}
          </LinkEmail>,
        )
        assertButtonStateStyles(screen.getByText(text), '', {
          'background-color': 'rgb(255, 255, 255)',
        })
      })
      it('should render hover state', () => {
        const text = 'link-button-hover'
        render(
          <LinkEmail {...props} variant={LinkVariant.Button}>
            {text}
          </LinkEmail>,
        )
        assertButtonStateStyles(screen.getByText(text), ':hover', {
          'background-color': 'rgb(247, 247, 247)',
        })
      })
      it('should render active state', () => {
        const text = 'link-button-active'
        render(
          <LinkEmail {...props} variant={LinkVariant.Button}>
            {text}
          </LinkEmail>,
        )
        assertButtonStateStyles(screen.getByText(text), ':active', {
          'background-color': 'rgb(240, 240, 240)',
        })
      })
    })
  })
})
