import thumbnail from 'src/common/function'
import EmptyItemImagesCell from 'src/components/cells/EmptyItemImagesCell'
import ImageOnly from 'src/components/scaffold/Images/ImageOnly'
import { useState } from 'react'

const ImageSelect = ({images, set_images}) => {

//  const [images_state, set_images] = useState()
  return (
    <div>
      <h2>Выбранные картинки</h2>
      <ImageOnly images={images} set_images={set_images} />
    </div>
  )
}

export default ImageSelect
