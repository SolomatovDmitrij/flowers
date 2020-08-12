import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ItemForm from 'src/components/Items/ItemForm'

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
const UPDATE_ITEM_MUTATION = gql`
  mutation UpdateItemMutation($id: Int!, $input: UpdateItemInput!) {
    updateItem(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ item }) => {
  const { addMessage } = useFlash()
  const [updateItem, { loading, error }] = useMutation(UPDATE_ITEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.items())
      addMessage('Item updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      categoryId: parseInt(input.categoryId),
    })
    updateItem({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Item {item.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ItemForm item={item} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
