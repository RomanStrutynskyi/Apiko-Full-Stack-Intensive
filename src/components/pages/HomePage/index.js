// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Hero, Footer, QuastionList } from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      // header={<Header />}
      // hero={<Hero />}
      // footer={<Footer />}
    >
      <QuastionList />
    </PageTemplate>
  )
}

export default HomePage
