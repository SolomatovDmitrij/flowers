import ImageSelectList from 'src/components/My/ImageSelectList'

export const QUERY = gql`
  query EmptyItemImagesQuery($exclude: [Int]!, $connect: [Int]!) {
    imageEmptyItems(exclude: $exclude, connect: $connect) {
      id
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ imageEmptyItems, img_func }) => {
  return (
    <ImageSelectList images={imageEmptyItems} img_func={img_func} label="Не привязанные картинки"/>
  )
}
