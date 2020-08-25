import ImageSelectList from 'src/components/My/ImageSelectList'

export const QUERY = gql`
  query ImageItemsCellQuery($itemId: Int!, $exclude: [Int]!, $connect:[Int]!) {
    imageItems(itemId: $itemId, exclude: $exclude, connect: $connect) {
      id
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ imageItems, img_func }) => {
  return (
    <ImageSelectList images={imageItems} img_func={img_func} label="Выбранные картинки"/>
  )
}
