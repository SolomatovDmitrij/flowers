import { render } from '@redwoodjs/testing'

import ImageOnly2 from './ImageOnly2'

describe('ImageOnly2', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageOnly2 />)
    }).not.toThrow()
  })
})
