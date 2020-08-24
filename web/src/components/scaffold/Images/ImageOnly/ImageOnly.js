import thumbnail from 'src/common/function'

const ImageOnly = ({images, set_images}) => {

  const delete_img = (img, index) => { 
    img.splice(index, 1) //delete last element of array
    console.log(img, index)
    //return img
    set_images(img)
  } 

  return (
    <div>
      {images && images.map((image, ind) => (
          <img key={ind} src={thumbnail(image.url)} onClick={() => delete_img(images, ind)} alt={image.url} />
      ))}
    </div>
  )
}

export default ImageOnly
