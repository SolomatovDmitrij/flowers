import { render } from '@redwoodjs/testing'

import AddImages from './AddImages'

describe('AddImages', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddImages />)
    }).not.toThrow()
  })
})
