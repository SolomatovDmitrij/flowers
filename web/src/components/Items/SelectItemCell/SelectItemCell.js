import { Link, routes } from '@redwoodjs/router'
import {SelectField} from '@redwoodjs/forms'

export const QUERY = gql`
  query ITEMS {
    items {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No items yet. '}
      <Link to={routes.newItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ items }) => {
  return (
    <SelectField id="itemId" name="itemId">
      {items.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
        ) )}
    </SelectField>
  )
}
