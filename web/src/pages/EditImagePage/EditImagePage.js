import ImagesLayout from 'src/layouts/ImagesLayout'
import EditImageCell from 'src/components/Images/EditImageCell'

const EditImagePage = ({ id }) => {
  return (
    <ImagesLayout>
      <EditImageCell id={id} />
    </ImagesLayout>
  )
}

export default EditImagePage
