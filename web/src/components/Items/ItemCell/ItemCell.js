import Item from 'src/components/Items/Item'

export const QUERY = gql`
  query FIND_ITEM_BY_ID($id: Int!) {
    item: item(id: $id) {
      id
      name
      categoryId
      createAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Item not found</div>

export const Success = ({ item }) => {
  return <Item item={item} />
}
