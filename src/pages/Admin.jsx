import { useState } from 'react'
import useMusicStore from '../store/musicStore'
import styled from 'styled-components'
import { Box } from '../utils/Box'
import { Text } from '../utils/Text'
import { Button } from '../utils/Button'

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}33;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 400px;
`

const Admin = () => {
  const { songs } = useMusicStore()
  const setCurrentTrack = useMusicStore((state) => state.setCurrentTrack)
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [audio, setAudio] = useState('')
  const [cover, setCover] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSong = {
      id: Date.now().toString(),
      title,
      artist,
      genre,
      audio,
      cover,
    }
    useMusicStore.setState({ songs: [...songs, newSong] })
    alert('Mock upload complete!')
    // Clear form
    setTitle('')
    setArtist('')
    setGenre('')
    setAudio('')
    setCover('')
  }

  return (
    <Box p={8}>
      <Text size="2rem" as="h2" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Upload a New AI Song
      </Text>

      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <Input
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <Input
          placeholder="Audio URL"
          value={audio}
          onChange={(e) => setAudio(e.target.value)}
          required
        />
        <Input
          placeholder="Cover Image URL"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          required
        />
        <Button type="submit" p={3} px={6} rounded="md" style={{ marginTop: '1rem' }}>
          Upload
        </Button>
      </Form>
    </Box>
  )
}

export default Admin
