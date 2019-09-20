import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import { Wapper, Container, Content } from './styles/components'

import Routes from './routes'

const App = () => (
  <BrowserRouter>
    <Wapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wapper>
  </BrowserRouter>
)

export default App;
