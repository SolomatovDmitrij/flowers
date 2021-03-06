import ItemsLayout from 'src/layouts/ItemsLayout'
import ItemCell from 'src/components/cells/ItemCell'

const ItemPage = ({ id }) => {
  return (
    <ItemsLayout>
      <ItemCell id={id} />
    </ItemsLayout>
  )
}

export default ItemPage
