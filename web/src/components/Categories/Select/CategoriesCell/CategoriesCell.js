import { Link, routes } from '@redwoodjs/router'
import {SelectField} from '@redwoodjs/forms'

export const QUERY = gql`
  query CATEGORIES {
    categories {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No categories yet. '}
      <Link to={routes.newCategory()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ categories }) => {
  return (
    <SelectField id="categoryId" name="categoryId">
      {categories.map((category) => (
            <option value={category.id}>{category.name}</option>
        ) )}
    </SelectField>
  )
}
