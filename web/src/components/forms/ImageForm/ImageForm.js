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
    {/*
        <ItemSelect current_item={props?.image?.itemId}/>
    */}
    <ReactFilestack
      apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
      onSuccess={onFileUpload}
      componentDisplayMode={{ type: 'immediate' }}
      actionOptions={{ displayMode: 'inline', container: 'picker' }}
    />
    <div
      id="picker"
      style={{
        marginTop: '2rem',
        height: '20rem',
        display: url ? 'none' : 'block',
      }}
    ></div>

    {url && (
      <div>
      <img src={url} style={{ display: 'block', margin: '2rem 0' }} />
      <a
      href="#"
      onClick={() =>
        setUrl(null)}
      className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
      >
      Replace Image
      </a>
      </div>
    )}
          
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
