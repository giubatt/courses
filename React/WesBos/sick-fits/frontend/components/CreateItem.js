import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
// import { useMutation } from 'react-apollo-hooks'
import { Formik } from 'formik'
import Router from 'next/router'

import formatMoney from '../lib/formatMoney'
import ErrorMessage from '../components/ErrorMessage'

import Form from './styles/Form'

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $image: String
    $largeImage: String
    $price: Int!
  ) {
    createItem(title: $title, description: $description, image: $image, largeImage: $largeImage, price: $price) {
      id
    }
  }
`

const uploadFile = setFieldValue => async e => {
  const files = e.target.files
  const data = new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'sickfits')

  const res = await fetch('https://api.cloudinary.com/v1_1/barterr/image/upload', {
    method: 'POST',
    body: data,
  })

  const file = await res.json()
  setFieldValue('image', file.secure_url)
  setFieldValue('largeImage', file.eager[0].secure_url)
}

const CreateItem = () => {
  return (
    <Mutation mutation={CREATE_ITEM_MUTATION}>
      {(createItem, { loading, error }) => (
        <Formik
          initialValues={{
            title: 'Cool Shoes',
            description: 'Best shoes',
            image: '',
            largeImage: '',
            price: 1520,
          }}
          onSubmit={async values => {
            const res = await createItem({ variables: values })
            Router.push({
              pathname: '/item',
              query: { id: res.data.createItem.id },
            })
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <ErrorMessage error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                  <label htmlFor="file">
                    Image
                    <input
                      type="file"
                      name="image"
                      id="image"
                      placeholder="Upload an image"
                      required
                      onChange={uploadFile(setFieldValue)}
                      onBlur={handleBlur}
                    />
                    {values.image && <img width="200" src={values.image} alt="Upload Preview" />}
                  </label>
                  <label htmlFor="title">
                    Title
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Title"
                      required
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                  <label htmlFor="price">
                    Price
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Price"
                      required
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                  <label htmlFor="description">
                    Description
                    <input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Enter a Description"
                      required
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                  <button type="submit">Submit</button>
                </fieldset>
              </Form>
            )
          }}
        </Formik>
      )}
    </Mutation>
  )
}

export default CreateItem
