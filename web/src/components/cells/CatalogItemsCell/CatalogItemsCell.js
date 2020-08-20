import CatalogItem from 'src/components/CatalogItem'
import 'src/components/CatalogItem/Items.css'

export const QUERY = gql`
  query CATALOG_ITEMS_QUERY($categoryId: Int!) {
      items_by_category(categoryId: $categoryId) {
          id
          name
          description
          size_h
          size_w
          price
          images {
              url
          }      
      }
  } 
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ items_by_category }) => {
//    return JSON.stringify(items_by_category)
    
  return (
      <div className="catalog-items">
        {items_by_category.map( ( item ) => ( 
            <CatalogItem item={item} />
        ) )}
      </div>
  )
    
}
