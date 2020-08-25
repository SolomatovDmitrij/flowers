import thumbnail from 'src/common/function'
import EmptyItemImagesCell from 'src/components/cells/EmptyItemImagesCell'
import { useState } from 'react'

const ImageSelect = ({images}) => {

  const [images_state, set_images] = useState(images.slice())
  return (
    <div>
      {JSON.stringify(images_state)}
      <h2>Выбранные картинки</h2>
      <ImageOnly images={images_state} set_images={set_images} />
    </div>
  )
}

export default ImageSelect
