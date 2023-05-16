import React, { useContext } from 'react'
import Link from 'next/link'
import { styled } from 'styled-components'
import Center from './Center'
import { CartContext } from './CartContext'



const StyledHeader = styled.header`
  background-color: #4a148c;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #808080;
`

const Logo = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`
const NavLink = styled(Link)`
  color: #DCDCDC;
  text-decoration: none;
`
const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>Ecommerce</Logo>
          <StyledNav>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
        </Wrapper>    
      </Center>  
    </StyledHeader>
  )
}
