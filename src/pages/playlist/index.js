import React from 'react'

import { Container, Header, SongList } from './styles'
import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://img.discogs.com/m_3UIYXqI6T0QrkwZKvwt-YpAbo=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11816131-1522869242-1481.jpeg.jpg" alt="Playlist" />
      <div>
        <span>Playlist</span>
        <h1>Melhores do RAP</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th></th>
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th><img src={ClockIcon} alt="Duracão" /> </th>
      </thead>

      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Amor</td>
          <td>Rael</td>
          <td>Sei lá</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Amor</td>
          <td>Rael</td>
          <td>Sei lá</td>
          <td>3:26</td>
        </tr> <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Amor</td>
          <td>Rael</td>
          <td>Sei lá</td>
          <td>3:26</td>
        </tr> <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Amor</td>
          <td>Rael</td>
          <td>Sei lá</td>
          <td>3:26</td>
        </tr> <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Amor</td>
          <td>Rael</td>
          <td>Sei lá</td>
          <td>3:26</td>
        </tr> <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Amor</td>
          <td>Rael</td>
          <td>Sei lá</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
)

export default Playlist