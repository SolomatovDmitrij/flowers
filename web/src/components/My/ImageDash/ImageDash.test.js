import { render } from '@redwoodjs/testing'

import ItemDash from './ItemDash'

describe('ItemDash', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemDash />)
    }).not.toThrow()
  })
})
