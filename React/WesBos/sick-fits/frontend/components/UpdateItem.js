import gql from 'graphql-tag'
import { Mutation, Query } from 'react-apollo'
// import { useMutation } from 'react-apollo-hooks'
import { Formik } from 'formik'

import ErrorMessage from '../components/ErrorMessage'

import Form from './styles/Form'

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`

export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION($id: ID!, $title: String, $description: String, $price: Int) {
    updateItem(id: $id, title: $title, description: $description, price: $price) {
      id
      title
      description
      price
    }
  }
`

const UpdateItem = ({ id }) => {
  return (
    <Query query={SINGLE_ITEM_QUERY} variables={{ id }}>
      {({ data, loading }) => {
        if (loading) return <p>Loading...</p>
        if (!data.item) return <p>No Item Found for ID {id}</p>

        return (
          <Mutation mutation={UPDATE_ITEM_MUTATION}>
            {(updateItem, { loading, error }) => (
              <Formik
                initialValues={{
                  title: data.item.title,
                  description: data.item.description,
                  price: data.item.price,
                }}
                onSubmit={async values => {
                  await updateItem({
                    variables: {
                      id,
                      ...values,
                    },
                  })
                }}
              >
                {({ values, handleChange, handleBlur, handleSubmit }) => {
                  return (
                    <Form onSubmit={handleSubmit}>
                      <ErrorMessage error={error} />
                      <fieldset disabled={loading} aria-busy={loading}>
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
                        <button type="submit">Save Changes</button>
                      </fieldset>
                    </Form>
                  )
                }}
              </Formik>
            )}
          </Mutation>
        )
      }}
    </Query>
  )
}

export default UpdateItem
