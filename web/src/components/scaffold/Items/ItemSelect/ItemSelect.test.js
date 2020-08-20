import { render } from '@redwoodjs/testing'

import ItemSelect from './ItemSelect'

describe('ItemSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemSelect />)
    }).not.toThrow()
  })
})
