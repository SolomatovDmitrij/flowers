import { SelectField, Form, FormError, FieldError, Label, TextField, NumberField, Submit, } from '@redwoodjs/forms'
import SelectCategoriesCell from 'src/components/cells/SelectCategoriesCell'
import { useState } from 'react'
import ImageDash from 'src/components/My/ImageDash'
import ReactFilestack from 'filestack-react'
import { useMutation } from '@redwoodjs/web'

const ItemForm = (props) => {
  const onSubmit = (data) => {
    data.connect_img = data.images_change.connect_img.map((elem) => ({id: elem}))
    if(data.images_change.disconnect_img.length > 0) 
      data.disconnect_img = data.images_change.disconnect_img.map((elem) => ({id: elem}))
    delete data.images_change
    props.onSave(data, props?.item?.id)
  }

  const onSuccess = (result) => {
    console.log(JSON.stringify(result))
//    save_images_to_db(result.filesUploaded)
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

{/* Category */}
        <Label
          name="categoryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category 
        </Label>

        <SelectCategoriesCell selected_id={props.item?.categoryId}/>

        <FieldError name="categoryId" className="rw-field-error" />

{/* Name */}
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.item?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

{/* description*/}
        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Описание: 
        </Label>
        <TextField 
            name="description"
            defaultValue={props.item?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
        />
        <FieldError name="description" className="rw-field-error" />


{/* Size height*/}
        <Label
          name="size_h"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Высота: 
        </Label>
        <TextField 
            name="size_h"
            type="number"
            defaultValue={props.item?.size_h}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
        />
        <FieldError name="size_h" className="rw-field-error" />

{/* Size width*/}
        <Label
          name="size_w"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ширина: 
        </Label>
        <TextField 
            name="size_w"
            type="number"
            defaultValue={props.item?.size_w}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
        />
        <FieldError name="size_w" className="rw-field-error" />

{/* price */}
        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Цена: 
        </Label>
        <TextField 
            name="price"
            dataType="Int"
            defaultValue={props.item?.price}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
        />
        <FieldError name="price" className="rw-field-error" />

{/* Images */}
      <Label name="images_change"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
      >Картинки</Label>
      <ImageDash itemId={props.item?.id} images={props.item?.images}/>
      
  {/*
      
 Submit button */}
        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ItemForm
