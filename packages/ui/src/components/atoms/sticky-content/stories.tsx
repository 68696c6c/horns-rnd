/* eslint-disable react/jsx-one-expression-per-line,react/no-unescaped-entities */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { StickyContent, StickyContentProps } from '.'

export default {
  title: 'Atoms/StickyContent',
  component: StickyContent,
} as Meta

const Template: Story<StickyContentProps> = ({
  children,
  ...others
}: StickyContentProps) => (
  <>
    <StickyContent {...others}>{children}</StickyContent>
    <p>The bar will stick when it is scolled past.</p>
    <p>
      Do-o-i-ape mada: goholore, gohus, amiranu! Micama! Typhon das
      zodonurenusagi cab: sobrazod-ol Roray i tanazodapesad, od comemahe ta
      nobeloha zodien Azazel Thamuz Supay Thoth vaunid-el-cahisa ta-pu-ime
      qo-mos-pelehe telocahe; T'an-mo gohe-el, zodacare eca ca-no-quoda!
    </p>
    <p>
      Haborym Dracula Baalberith Loki Haborym Melek Taus gohe-el, zodacare eca
      ca-no-quoda! Yehusozod ca-ca-com, od do-o-a-inu noari micaolazoda a-ai-om.
      Thoth Shamad Metztli zodoreje, lape zodiredo Noco Mada, hoathahe Saitan!
      Nija vaunid-el-cahisa ta-pu-ime qo-mos-pelehe telocahe;
    </p>
    <p>
      Tezcatlipoca Thoth Mephistopheles Mephistopheles Fenriz dasata beregida od
      torezodul! Set Tchort Casarameji gohia: Zodacare! Vaunigilaji! od
      im-ua-mar pugo pelapeli Ananael Qo-a-an. Pilada noanu vaunalahe balata
      od-vaoan. Melek Taus Tunrida Mammon Behemoth
    </p>
    <p>
      Adramelech T'an-mo Typhon Adramelech Tezcatlipoca das zodonurenusagi cab:
      Casarem ohorela caba Pire cocasabe fafenu izodizodope, od miinoagi de
      ginetaabe: vaunu na-na-e-el: panupire malapireji caosaji. Adagita
      vau-pa-ahe zodonugonu fa-a-ipe salada! Shaitan
    </p>
    <p>
      Adagita vau-pa-ahe zodonugonu fa-a-ipe salada! Casarameji gohia: Zodacare!
      Vaunigilaji! od im-ua-mar pugo pelapeli Ananael Qo-a-an. Tezcatlipoca
      Euronymous Ili e-Ol balazodareji, od aala tahilanu-os netaabe: daluga
      vaomesareji elonusa cape-mi-ali varoesa cala homila;
    </p>
    <p>
      Pwcca Cimeries erem Iadanahe Mammon Lilith Diabolus Coyote Rimmon Marduk
      O-Yama cocasabe fafenu izodizodope, od miinoagi de ginetaabe: vaunu
      na-na-e-el: panupire malapireji caosaji. Yen-lo-Wang Abaddon Shamad Lilith
      Shiva Mephistopheles Yen-lo-Wang Norezodacahisa otahila Gigipahe;
    </p>
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <h1>STICKY BAR CONTENT</h1>
    </>
  ),
}
