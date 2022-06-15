import React from 'react'
import styled from 'styled-components'

export const Footer: React.FC = () => {
  return (
    <_Footer>
      <p style={{ marginRight: 10 }}>created by Yuisei Maruyama</p>
    </_Footer>
  )
}

const _Footer = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  border-top: solid 1px #188FB9;
`
