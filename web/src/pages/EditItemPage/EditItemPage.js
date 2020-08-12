import ItemsLayout from 'src/layouts/ItemsLayout'
import EditItemCell from 'src/components/Items/EditItemCell'

const EditItemPage = ({ id }) => {
  return (
    <ItemsLayout>
      <EditItemCell id={id} />
    </ItemsLayout>
  )
}

export default EditItemPage
