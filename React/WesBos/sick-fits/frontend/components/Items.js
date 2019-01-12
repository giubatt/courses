import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styled from 'styled-components'

import Item from '../components/Item'

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      description
      price
      image
      largeImage
    }
  }
`

const Center = styled.div`
  text-align: center;
`

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

const Items = () => {
  const { data, error, loading } = useQuery(ALL_ITEMS_QUERY, { suspend: false })

  return (
    <Center>
      <p>Items!</p>
      <ItemsList>
        {(() => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          return data.items.map(item => <Item key={item.id} item={item} />)
        })()}
      </ItemsList>
    </Center>
  )
}

export default Items
