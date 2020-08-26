import { useMutation } from '@redwoodjs/web'
import ReactFilestack from 'filestack-react'

const ADD_IMAGES = gql`
 mutation InsertImageMutation($itemId: Int!, $urls: [Urls]) {
   insertImages(id: $itemId, urls: $urls) {
     images {
       id url
     }
   }
 }
`

const AddImages = ({itemId, update_func}) => {
  const [insert_images] = useMutation(ADD_IMAGES, {
    onCompleted: (data) => {
      //console.log(JSON.stringify(data))
      update_func(data)
    }
  })
  const onSuccess = (result) => {
//    console.log(JSON.stringify(result))
    const res = result.filesUploaded.map((elem) => ({url: elem.url}))
    //console.log(JSON.stringify(res))
    insert_images({ variables: { itemId: itemId, urls: res } })
//    save_images_to_db(result.filesUploaded)
  }
  return (
    <div>
      <ReactFilestack apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY} 
        actionOptions={{ accept: ["image/*"], maxFiles: 100, displayMode: 'inline', container: 'picker' }}
        onSuccess={onSuccess} 
        componentDisplayMode={{ type: 'immediate' }}
      />
      <div id="picker" style={{ marginTop: '2rem', height: '20rem' }}></div>
    </div>
  )
}

export default AddImages
