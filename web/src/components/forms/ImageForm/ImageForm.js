import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { useState } from 'react'
import ItemSelect from 'src/components/scaffold/Items/ItemSelect'
import ReactFilestack from 'filestack-react'

const ImageForm = (props) => {
    const [url, setUrl] = useState(props?.image?.url)

  const onSubmit = (data) => {
      const dataWithUrl = Object.assign(data, { url })
      //dataWithUrl.itemId = parseInt(dataWithUrl.itemId)
      //console.log(JSON.stringify(dataWithUrl))
      props.onSave(dataWithUrl, props?.image?.id)
  }
    const onFileUpload = (response) => {
       setUrl(response.filesUploaded[0].url) 
    }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <ItemSelect current_item={props?.image?.itemId}/>

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.image?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        

        <ReactFilestack apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY} 
            onSuccess={onFileUpload}
            componentDisplayMode={{ type: 'immediate' }}
            actionOptions={{ displayMode: 'inline', container: 'picker' }}
        />  
        <div id="picker" style={{ marginTop:'2rem', height:'20rem',
            display: url ? 'none' : 'block'}}></div>
        { url && <div><img src={url} style={{ margin: '2rem 0', display: 'inline' }} />
                <a href="#" onClick={ () => setUrl(null) } style={{ display: 'inline' }} 
                    className ="rw-button rw-button-blue"
                >Поменять картинку</a></div>
             }
        
        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ImageForm
