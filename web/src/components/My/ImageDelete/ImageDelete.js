import ImageItemsCell from 'src/components/cells/ImageItemsCell'
import { TextField } from '@redwoodjs/forms'

const ImageDelete = ({exclude_img, connect_img, disconnect_img_func, itemId}) => {
  return (
    <div>
      <ImageItemsCell itemId={itemId} exclude={exclude_img} connect={connect_img} img_func={disconnect_img_func}/>
    </div>
  )
}

export default ImageDelete
