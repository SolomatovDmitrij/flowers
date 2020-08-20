import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query  {
    categories {
        id
        name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ categories }) => {
  return (
    <ul className="menu">
      {categories.map((category) => <li key={category.id}><Link to={routes.catalog({categoryId: category.id})}>{category.name}</Link></li>)}
    </ul>
  )
}
