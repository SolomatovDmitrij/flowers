import EmptyItemImagesCell from 'src/components/cells/EmptyItemImagesCell'
import { TextField } from '@redwoodjs/forms'

const ImageAdd = ({exclude_img, connect_img, connect_img_func}) => {
  return (
    <div>
      <EmptyItemImagesCell exclude={exclude_img} connect={connect_img} img_func={connect_img_func}/>
    </div>
  )
}

export default ImageAdd
