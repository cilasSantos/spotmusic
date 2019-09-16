import React from 'react'

import Sidebar from './components/Sidebar'
import Player from './components/Player'

import { Wapper, Container } from './styles/components'
const App = () => (
  <Wapper>
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wapper>
)

export default App;
