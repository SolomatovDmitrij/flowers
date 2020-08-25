import ImageAdd from 'src/components/My/ImageAdd'
import ImageDelete from 'src/components/My/ImageDelete'
import { TextField } from '@redwoodjs/forms'
import { useState } from 'react'

const ItemDash = ({images, itemId}) => {

  const [images_change, set_images_change] = useState({
    connect_img: [], disconnect_img: []
  })

  const connect_img_func = (img_id) => {
    images_change.connect_img.push(img_id)
    images_change.disconnect_img = images_change.disconnect_img.filter((elem) => elem !== img_id)
    set_images_change({...images_change})
  }

  const disconnect_img_func = (img_id) => {
    images_change.disconnect_img.push(img_id)
    //delete img_id from connect_img
    images_change.connect_img = images_change.connect_img.filter((elem) => elem !== img_id)
    set_images_change({...images_change })
  }
  return (
    <div>
      <TextField id="images_change" name="images_change" dataType="Json" 
        className="rw-input" value={JSON.stringify(images_change)} readOnly />
      <ImageDelete exclude_img={images_change.disconnect_img} connect_img={images_change.connect_img} disconnect_img_func={disconnect_img_func}
        itemId={itemId} />
      <ImageAdd exclude_img={images_change.connect_img} connect_img={images_change.disconnect_img} connect_img_func={connect_img_func} />
    </div>
  )
}

export default ItemDash
