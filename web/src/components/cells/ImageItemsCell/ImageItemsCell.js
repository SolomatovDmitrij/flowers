export const QUERY = gql`
  query ImageItemsQuery {
    imageItems {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ imageItems }) => {
  return JSON.stringify(imageItems)
}
