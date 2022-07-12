import React from 'react'
import { Container } from '../components/Styles/Container/Container.styled'
import { Header, MainHeader } from '../components/Styles/Header/Header.styled'

const Main = () => {
  return (
        <Container>
      <Header>
        <MainHeader>
          <h1>Main Page</h1>
        </MainHeader>
      </Header>
    </Container>
  )
}

export default Main