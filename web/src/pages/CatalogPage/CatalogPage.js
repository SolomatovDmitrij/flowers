import { Link } from '@redwoodjs/router'
import CatalogItemsCell from 'src/components/cells/CatalogItemsCell'
import MainLayout from 'src/layouts/MainLayout'

const CatalogPage = ({categoryId}) => {
  return (
      <MainLayout>
          <CatalogItemsCell categoryId={categoryId} />
      </MainLayout>
  )
}

export default CatalogPage
