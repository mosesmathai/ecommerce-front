import React from 'react'
import { css, styled} from 'styled-components'
import { primary } from '@/lib/colors'

export const ButtonStyle = css`
  background-color: #5542F6;
  border: 0;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  svg{
    height: 16px;
    margin-right: 5px;
  }
  ${props => props.white && !props.outline && css`
    color: #000;
    background-color: #fff;
  `}
  ${props => props.white && props.outline && css`
    color: #fff;
    background-color: transparent;
    border: 2px solid #fff;
  `}
  ${props => props.primary && !props.outline && css`
    color: #fff;
    background-color: ${primary};
    border: 2px solid ${primary};
  `}
  ${props => props.primary && props.outline && css`
    color: ${primary};
    background-color: transparent;
    border: 2px solid ${primary};
  `}
  ${props => props.size === 'l' && css`
    font-size: 1.2rem;
    padding: 10px 20px;
    svg{
      height: 20px;
    }
  `}
`

const StyledButton = styled.button`
  ${ButtonStyle}
`

export default function Button({children,...rest}) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}
