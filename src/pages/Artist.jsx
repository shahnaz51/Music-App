import { useParams } from 'react-router-dom'
import useMusicStore from '../store/musicStore'
import mockData from '../utils/mockData'
import styled from 'styled-components'
import { Box } from '../utils/Box'
import { Flex } from '../utils/Flex'
import { Grid } from '../utils/Grid'
import { Text } from '../utils/Text'
import { Button } from '../utils/Button'

const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
`

const Artist = () => {
  const { name } = useParams()
  const artist = mockData.artists[name]
  const { songs, setCurrentTrack } = useMusicStore()
  const artistSongs = songs.filter((s) => s.artist === name)

  return (
    <Box p={8}>
      <Flex direction="column" md="row" align="center" gap={6}>
        <Avatar src={artist.avatar} alt={name} />
        <Box>
          <Text size="2rem" as="h2" style={{ fontWeight: 'bold' }}>
            {artist.name}
          </Text>
          <Text color="textLow">{artist.genre}</Text>
          <Text size="0.875rem" mt={2}>
            {artist.bio}
          </Text>
        </Box>
      </Flex>

      <Text size="1.5rem" as="h3" style={{ fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
        🎵 Songs
      </Text>

      <Grid cols={1} md={2} gap={4}>
        {artistSongs.map((song) => (
          <Box key={song.id} bg="surface" p={4} rounded="md">
            <Text size="1.125rem" style={{ fontWeight: 'bold' }}>
              {song.title}
            </Text>
            <Button
              p={2}
              px={4}
              rounded="md"
              style={{ marginTop: '0.5rem', backgroundColor: '#00FFD1', color: '#000' }}
              onClick={() => setCurrentTrack(song)}
            >
              ▶ Play
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default Artist
