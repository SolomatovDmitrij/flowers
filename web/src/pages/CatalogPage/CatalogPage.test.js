import { render } from '@redwoodjs/testing'

import CatalogPage from './CatalogPage'

describe('CatalogPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CatalogPage />)
    }).not.toThrow()
  })
})
