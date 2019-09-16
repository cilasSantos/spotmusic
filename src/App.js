import React from 'react'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import { Wapper, Container, Content } from './styles/components'
const App = () => (
  <Wapper>
    <Container>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Container>
    <Player />
  </Wapper>
)

export default App;
