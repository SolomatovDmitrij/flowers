import thumbnail from 'src/common/function'

const ImageSelectList = ({images, img_func, label}) => {

  const delete_img = (img, index) => { 
    const res = img.splice(0)
    res.splice(index, 1) //delete last element of array
    console.log(res, index)
    //return img
    //set_images(img)
    return res
  } 

  return (
    <div>
      <h2>{label}</h2>
      {images && images.map((image, ind) => (
          <img key={ind} src={thumbnail(image.url)} onClick={() => img_func(image.id)} alt={image.url} />
      ))}
    </div>
  )
}

export default ImageSelectList
