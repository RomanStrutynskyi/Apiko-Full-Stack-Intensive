import React from 'react'
import { storiesOf } from '@storybook/react'
import { QuastionItem } from 'components'

storiesOf('QuastionItem', module)
  .add('default', () => (
    <QuastionItem title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </QuastionItem>
  ))
  .add('with link', () => (
    <QuastionItem title="ARc" link="https://github.com/diegohaz/arc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </QuastionItem>
  ))
  .add('with icon', () => (
    <QuastionItem icon="close" title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </QuastionItem>
  ))
  .add('with code', () => (
    <QuastionItem code="npm run build" title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </QuastionItem>
  ))
  .add('with soon', () => (
    <QuastionItem soon title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </QuastionItem>
  ))
