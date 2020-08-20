    const thumbnail = (url) => {
        const parts = url.split('/')
        parts.splice(3, 0, "resize=width:100")
        return parts.join('/')
    }

const ImageOnly = ({images}) => {
  return (
    <div>
      {images && images.map((image) => (
          <img key={image.id} src={thumbnail(image.url)} alt={image.title} />
      ))}
    </div>
  )
}

export default ImageOnly
