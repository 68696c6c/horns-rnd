/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import {
  render,
  screen,
  assertLinkStateStyles,
  assertButtonStateStyles,
} from '../../test'
import {
  BorderStyle,
  Colorway,
  Font,
  HeadingLevel,
  Size,
} from '../../../config'
import { LinkVariant } from '../../quarks'

import { Link } from '.'

describe('Link', () => {
  it('should render as default', () => {
    const { container } = render(<Link href="#">example</Link>)
    expect(container).toMatchSnapshot()
  })

  describe('link variant', () => {
    it('should render as default', () => {
      const { container } = render(
        <Link href="#" variant={LinkVariant.Link}>
          example
        </Link>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each(Object.values(Colorway))('should render colorway %s', (color) => {
      const { container } = render(
        <Link href="#" variant={LinkVariant.Link} color={color}>
          {color}
        </Link>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each([...Object.values(Font), ...Object.values(HeadingLevel)])(
      'should render font %s',
      (font) => {
        const { container } = render(
          <Link href="#" variant={LinkVariant.Link} font={font}>
            {font}
          </Link>,
        )
        expect(container).toMatchSnapshot()
      },
    )
    describe('ui states', () => {
      it('should render default state', () => {
        const text = 'link-default'
        render(
          <Link href="#" variant={LinkVariant.Link}>
            {text}
          </Link>,
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
          <Link href="#" variant={LinkVariant.Link}>
            {text}
          </Link>,
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
          <Link href="#" variant={LinkVariant.Link}>
            {text}
          </Link>,
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
          <Link href="#" variant={LinkVariant.Link}>
            {text}
          </Link>,
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
        <Link href="#" variant={LinkVariant.Button}>
          example
        </Link>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each(Object.values(Colorway))('should render colorway %s', (color) => {
      const { container } = render(
        <Link href="#" variant={LinkVariant.Button} color={color}>
          {color}
        </Link>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each(Object.values(BorderStyle))(
      'should render border style %s',
      (style) => {
        const { container } = render(
          <Link
            href="#"
            variant={LinkVariant.Button}
            border={{ all: { style, width: Size.Small } }}
          >
            {style}
          </Link>,
        )
        expect(container).toMatchSnapshot()
      },
    )
    it.each(Object.values(Size))('should render border width %s', (size) => {
      const { container } = render(
        <Link
          href="#"
          variant={LinkVariant.Button}
          border={{ all: { style: BorderStyle.Solid, width: size } }}
        >
          {size}
        </Link>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each(Object.values(Size))('should render padding %s', (size) => {
      const { container } = render(
        <Link href="#" variant={LinkVariant.Button} padding={size}>
          {size}
        </Link>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each(Object.values(Size))('should render radius %s', (size) => {
      const { container } = render(
        <Link href="#" variant={LinkVariant.Button} radius={size}>
          {size}
        </Link>,
      )
      expect(container).toMatchSnapshot()
    })
    it.each([...Object.values(Font), ...Object.values(HeadingLevel)])(
      'should render font %s',
      (font) => {
        const { container } = render(
          <Link href="#" variant={LinkVariant.Button} font={font}>
            {font}
          </Link>,
        )
        expect(container).toMatchSnapshot()
      },
    )
    describe('ui states', () => {
      it('should render default state', () => {
        const text = 'link-button-default'
        render(
          <Link href="#" variant={LinkVariant.Button}>
            {text}
          </Link>,
        )
        assertButtonStateStyles(screen.getByText(text), '', {
          'background-color': 'rgb(255, 255, 255)',
        })
      })
      it('should render hover state', () => {
        const text = 'link-button-hover'
        render(
          <Link href="#" variant={LinkVariant.Button}>
            {text}
          </Link>,
        )
        assertButtonStateStyles(screen.getByText(text), ':hover', {
          'background-color': 'rgb(247, 247, 247)',
        })
      })
      it('should render active state', () => {
        const text = 'link-button-active'
        render(
          <Link href="#" variant={LinkVariant.Button}>
            {text}
          </Link>,
        )
        assertButtonStateStyles(screen.getByText(text), ':active', {
          'background-color': 'rgb(240, 240, 240)',
        })
      })
    })
  })
})
