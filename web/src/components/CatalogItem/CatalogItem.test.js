import { render } from '@redwoodjs/testing'

import CatalogItem from './CatalogItem'

describe('CatalogItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CatalogItem />)
    }).not.toThrow()
  })
})
