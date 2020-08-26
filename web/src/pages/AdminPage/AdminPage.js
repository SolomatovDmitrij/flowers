import { Link, routes } from '@redwoodjs/router'
import { FileField, Form, TextField, ImageField, Submit } from '@redwoodjs/forms'
import ReactFilestack from 'filestack-react'
import { useMutation } from '@redwoodjs/web'

const ADD_IMAGES_MAUTATION = gql`
  mutation AddImagesMutation($urls: [String]) {
    add_images(urls: $urls) {
      url
    }
  }
`

const AdminPage = () => {

  const PickerOptions = {
    accept: ["image/*"],
    maxFiles: 100,
  }
  const onSuccess = (result) => {
    console.log(JSON.stringify(result))
//    save_images_to_db(result.filesUploaded)
  }

  return (
    <div>
        <ReactFilestack apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY} actionOptions={PickerOptions} 
          onSuccess={onSuccess}/>
    </div>
  )
}

export default AdminPage
