import React, { useContext } from 'react'
import { styled } from 'styled-components'
import Button from './Button'
import CartIcon from './icons/CartIcon'
import Link from 'next/link'
import { CartContext } from './CartContext'

const ProductWrapper = styled.div`

`

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 80px;
  }
`
const Title = styled(Link)`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`
const ProductInfoBox = styled.div`
  margin-top: 5px;
`
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`

export default function ProductBox({_id,title,description,price,images}) {
  const url = '/product/'+_id;
  const {addProduct} = useContext(CartContext);
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images[0]} alt='image' />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <div>${price}</div>
          <Button primary outline onClick={() => addProduct(_id)}>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper> 
  )
}
