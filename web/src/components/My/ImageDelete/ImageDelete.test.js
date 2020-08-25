import { render } from '@redwoodjs/testing'

import ImageDelete from './ImageDelete'

describe('ImageDelete', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageDelete />)
    }).not.toThrow()
  })
})
