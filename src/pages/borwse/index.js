import React from 'react'

import { Container, Title, List, Playlist } from './styles'

const Browse = () => (
  <Container>
    <Title> Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img src="https://img.discogs.com/m_3UIYXqI6T0QrkwZKvwt-YpAbo=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11816131-1522869242-1481.jpeg.jpg" alt="Playlist" />
        <strong>Melhores do RAP</strong>
        <p>Melhores músicas do RAP na sua playlist</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src="https://img.discogs.com/m_3UIYXqI6T0QrkwZKvwt-YpAbo=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11816131-1522869242-1481.jpeg.jpg" alt="Playlist" />
        <strong>Melhores do RAP</strong>
        <p>Melhores músicas do RAP na sua playlist</p>
      </Playlist><Playlist to="/playlists/1">
        <img src="https://img.discogs.com/m_3UIYXqI6T0QrkwZKvwt-YpAbo=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11816131-1522869242-1481.jpeg.jpg" alt="Playlist" />
        <strong>Melhores do RAP</strong>
        <p>Melhores músicas do RAP na sua playlist</p>
      </Playlist><Playlist to="/playlists/1">
        <img src="https://img.discogs.com/m_3UIYXqI6T0QrkwZKvwt-YpAbo=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11816131-1522869242-1481.jpeg.jpg" alt="Playlist" />
        <strong>Melhores do RAP</strong>
        <p>Melhores músicas do RAP na sua playlist</p>
      </Playlist>
    </List>
  </Container>
)

export default Browse