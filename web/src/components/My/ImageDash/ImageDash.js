import ImageAdd from 'src/components/My/ImageAdd'
import ImageDelete from 'src/components/My/ImageDelete'
import { TextField } from '@redwoodjs/forms'
import { useState } from 'react'
import AddImages from 'src/components/My/AddImages'

const ItemDash = ({images, itemId}) => {

  const [images_change, set_images_change] = useState({
    connect_img: [], disconnect_img: []
  })

  const [update, set_update] = useState({})

  const connect_img_func = (img_id) => {
    const disconnect_ind = images_change.disconnect_img.findIndex((elem)=> elem===img_id)
    if(disconnect_ind===-1) 
      images_change.connect_img.push(img_id) 
    else 
      images_change.disconnect_img.splice(disconnect_ind, 1)
    set_images_change({...images_change})
  }

  const disconnect_img_func = (img_id) => {
    const connect_ind = images_change.connect_img.findIndex((elem)=> elem===img_id)
    if(connect_ind===-1) 
      images_change.disconnect_img.push(img_id) 
    else 
      images_change.connect_img.splice(connect_ind, 1)
    set_images_change({...images_change})
  }

  return (
    <div>
      <AddImages itemId={itemId} update_func={set_update} />
      <TextField id="images_change" name="images_change" dataType="Json" 
        className="rw-input" value={JSON.stringify(images_change)} readOnly />
      <ImageDelete exclude_img={images_change.disconnect_img} connect_img={images_change.connect_img} disconnect_img_func={disconnect_img_func}
        itemId={itemId} />
      <ImageAdd exclude_img={images_change.connect_img} connect_img={images_change.disconnect_img} connect_img_func={connect_img_func} />
    </div>
  )
}

export default ItemDash
