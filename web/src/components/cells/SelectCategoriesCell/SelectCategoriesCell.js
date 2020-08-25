import { Link, routes } from '@redwoodjs/router'
import {SelectField} from '@redwoodjs/forms'
/*
export const QUERY = gql`
  query CATEGORIES($selected_id: Int!) {
    categories_plus_selected(selected_id: $selected_id) {
      categories {
        id name
      } 
      selected_id
    }
  }
`
*/
export const QUERY = gql`
  query CATEGORIES {
    categories {
      id name
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

export const Success = ({ categories, selected_id }) => {
  return (
    <SelectField id="categoryId" name="categoryId" defaultValue={selected_id}>
      {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
        ) )}
    </SelectField>
  )
}
