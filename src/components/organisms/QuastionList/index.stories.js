import React from 'react'
import { storiesOf } from '@storybook/react'
import { QuastionList } from 'components'

storiesOf('QuastionList', module)
  .add('default', () => (
    <QuastionList />
  ))
