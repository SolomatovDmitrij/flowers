import CategoriesLayout from 'src/layouts/CategoriesLayout'
import EditCategoryCell from 'src/components/Categories/EditCategoryCell'

const EditCategoryPage = ({ id }) => {
  return (
    <CategoriesLayout>
      <EditCategoryCell id={id} />
    </CategoriesLayout>
  )
}

export default EditCategoryPage
