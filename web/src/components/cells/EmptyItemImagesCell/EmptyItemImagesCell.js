import ImageOnly from 'src/components/scaffold/Images/ImageOnly'

export const QUERY = gql`
  query EmptyItemImagesQuery {
    imageEmptyItems {
      title
      id
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ imageEmptyItems, delete_img }) => {
  return (
    <ImageOnly images={imageEmptyItems} delete_img={delete_img}/>
  )
}
