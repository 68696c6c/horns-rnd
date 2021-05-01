import React from 'react'

import { render, screen, assertStateStyles } from '../../test'
import { LinkVariant as Variant, LinkProps } from '../../quarks'

import { Default, LinkVariant, ButtonVariant } from './stories'

describe('Link', () => {
  let defaultArgs: LinkProps
  beforeEach(() => {
    defaultArgs = { ...(Default.args as LinkProps) }
  })

  it('should render as default', () => {
    const { container } = render(<Default {...defaultArgs}>example</Default>)
    expect(container).toMatchSnapshot()
  })

  describe('link variant', () => {
    it('should render as default', () => {
      const { container } = render(
        <Default {...defaultArgs} variant={Variant.Link}>
          example
        </Default>,
      )
      expect(container).toMatchSnapshot()
    })
    it('should support trait props', () => {
      const { container } = render(
        <LinkVariant {...(LinkVariant.args as LinkProps)}>example</LinkVariant>,
      )
      expect(container).toMatchSnapshot()
    })
    describe('ui states', () => {
      it('should render default state', () => {
        render(
          <Default {...defaultArgs} variant={Variant.Link}>
            example
          </Default>,
        )
        assertStateStyles(screen.getByRole('link'), '', {
          'text-decoration-line': 'underline',
          'text-decoration-style': 'solid',
        })
      })
      it('should render hover state', () => {
        render(
          <Default {...defaultArgs} variant={Variant.Link}>
            example
          </Default>,
        )
        assertStateStyles(screen.getByRole('link'), ':hover', {
          'font-style': 'italic',
          'text-decoration-line': 'underline',
          'text-decoration-style': 'solid',
        })
      })
      it('should render active state', () => {
        render(
          <Default {...defaultArgs} variant={Variant.Link}>
            example
          </Default>,
        )
        assertStateStyles(screen.getByRole('link'), ':active', {
          'font-style': 'italic',
          'text-decoration-line': 'underline',
          'text-decoration-style': 'double',
        })
      })
    })
  })

  describe('button variant', () => {
    it('should render as default', () => {
      const { container } = render(
        <Default {...defaultArgs} variant={Variant.Button}>
          example
        </Default>,
      )
      expect(container).toMatchSnapshot()
    })
    it('should support trait props', () => {
      const { container } = render(
        <ButtonVariant {...(ButtonVariant.args as LinkProps)}>
          example
        </ButtonVariant>,
      )
      expect(container).toMatchSnapshot()
    })
    describe('ui states', () => {
      it('should render default state', () => {
        render(
          <Default {...defaultArgs} variant={Variant.Button}>
            example
          </Default>,
        )
        assertStateStyles(screen.getByRole('link'), '', {
          'background-color': 'rgb(255, 255, 255)',
        })
      })
      it('should render hover state', () => {
        render(
          <Default {...defaultArgs} variant={Variant.Button}>
            example
          </Default>,
        )
        assertStateStyles(screen.getByRole('link'), ':hover', {
          'background-color': 'rgb(247, 247, 247)',
        })
      })
      it('should render active state', () => {
        render(
          <Default {...defaultArgs} variant={Variant.Button}>
            example
          </Default>,
        )
        assertStateStyles(screen.getByRole('link'), ':active', {
          'background-color': 'rgb(240, 240, 240)',
        })
      })
    })
  })
})
