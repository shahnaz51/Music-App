import useMusicStore from '../store/musicStore'
import { Box } from '../utils/Box'
import { Grid } from '../utils/Grid'
import { Text } from '../utils/Text'
import { Button } from '../utils/Button'

const Listen = () => {
    const { songs, setCurrentTrack } = useMusicStore()

    return (
        <Box p={8}>
            <Text size="2rem" as="h2" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>
                All AI Tracks
            </Text>
            <Grid cols={1} sm={2} md={3} gap={6}>
                {songs.map((song) => (
                    <Box
                        key={song.id}
                        bg="surface"
                        p={4}
                        rounded="md"
                        style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
                    >
                        {/* Cover Image */}
                        <img
                            src={song.cover}
                            alt={song.title}
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '0.5rem',
                                objectFit: 'cover',
                                flexShrink: 0,
                            }}
                        />

                        {/* Text Info & Button */}
                        <Box style={{ flex: 1 }}>
                            <Text size="1.125rem" style={{ fontWeight: 'bold' }}>
                                {song.title}
                            </Text>
                            <Text size="0.875rem" color="textLow" mb={2}>
                                {song.artist}
                            </Text>
                            <Button
                                p={2}
                                px={4}
                                rounded="md"
                                style={{ backgroundColor: '#00FFD1', color: '#000' }}
                                onClick={() => setCurrentTrack(song)}
                            >
                                ▶ Play
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Box>
    )
}

export default Listen
