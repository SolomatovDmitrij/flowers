import { render } from '@redwoodjs/testing'

import ImageAdd from './ImageAdd'

describe('ImageAdd', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageAdd />)
    }).not.toThrow()
  })
})
