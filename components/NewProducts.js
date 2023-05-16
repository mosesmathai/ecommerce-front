import React from 'react'
import { styled } from 'styled-components'
import Center from './Center'
import ProductBox from './ProductBox'

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`
const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0 20px;
  color: #4a148c;
`;

export default function NewProducts({products}) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {products?.length > 0 && products.map(product => (
          <ProductBox {...product} />
        ))}
      </ProductsGrid>
    </Center> 
  )
}
