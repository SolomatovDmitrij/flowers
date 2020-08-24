import { render } from '@redwoodjs/testing'

import ImageSelect from './ImageSelect'

describe('ImageSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageSelect />)
    }).not.toThrow()
  })
})
