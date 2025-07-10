import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useMusicStore from '../store/musicStore';
import { Box } from '../utils/Box';
import { Text } from '../utils/Text';
import { Button } from '../utils/Button';
import { Flex } from '../utils/Flex';
import heroVideo from '../assets/video/hero_background_video.mp4';
import aiArtistImage from '../assets/ai_artist_image.jpg';

const VideoHero = styled(Box)`
  position: relative;
  height: 100vh;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  > div {
    position: relative;
    z-index: 2;
    padding-left: 4rem;
    max-width: 700px;
    color: white;
    top: 30%;
  }
`;

const Section = styled(Box)`
  padding: 4rem 2rem;
`;

const SongCard = styled(Box)`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Footer = styled(Box)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLow};
  font-size: 0.9rem;
`;

export const ResponsiveFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;  // matches row-reverse
  flex-wrap: wrap;
  margin: auto;
  font-size: 1.125rem;
  min-height: 375px;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ModBox = styled.div`
  flex: 1;

  &.text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &.image-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageMidWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`;

const Home = () => {
    const { songs } = useMusicStore();
    const topTracks = songs.slice(0, 7);

    return (
        <Box>
            {/* Hero Section */}
            <VideoHero>
                <video autoPlay muted loop>
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <Box>
                    <h1>Where AI Meets Emotion in Music</h1>
                    <p>Discover the future of sound — crafted by intelligent artists.</p>
                    <Link to="/listen">
                        <Button p={3} px={6} rounded="xl">🎧 Listen Now</Button>
                    </Link>
                </Box>
            </VideoHero>

            {/* Discover Section */}
            <Section>
                <ResponsiveFlex>

                    <ModBox className="image-box">
                        <ImageMidWrapper>
                            <img src={aiArtistImage} alt="AI Artist" />
                        </ImageMidWrapper>
                    </ModBox>

                    <ModBox className="text-box">
                        <Text size="1.5rem" color="accent">Discover AI Music</Text>
                        <Text size="2.5rem" style={{ marginTop: '0.5rem' }}>
                            Experience the future of sound
                        </Text>
                        <Text size="1rem" color="textLow" style={{ marginTop: '1rem' }}>
                            Musegen revolutionizes your music experience with high-quality AI-generated songs.
                            Stream unique tracks crafted by virtual artists, each with their own distinctive persona.
                            No login required — just explore the sounds that resonate with you.
                        </Text>
                    </ModBox>
                </ResponsiveFlex>
            </Section>


            {/* Featured Songs Section */}
            <Section>
                <Text size="1.75rem">🎧 Top AI Tracks</Text>

                <Box
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '1rem',
                        padding: '1rem 0',
                        scrollSnapType: 'x mandatory',
                    }}
                >
                    {topTracks.map((song) => (
                        <SongCard
                            key={song.id}
                            style={{
                                minWidth: '180px',
                                flex: '0 0 auto',
                                scrollSnapAlign: 'start',
                            }}
                        >
                            <img
                                src={song.cover}
                                alt={song.title}
                                style={{
                                    width: '100%',
                                    height: '180px',
                                    objectFit: 'cover',
                                    borderRadius: '0.5rem',
                                    marginBottom: '0.5rem',
                                }}
                            />
                            <Text size="0.95rem" weight="500" style={{ lineHeight: '1.2' }}>
                                {song.title}
                            </Text>
                            <Text size="0.8rem" color="textLow">
                                {song.artist}
                            </Text>
                        </SongCard>
                    ))}
                </Box>
            </Section>



            {/* Newsletter Section */}
            <Section>
                <Flex direction="column" align="center" gap={4}>
                    <Text size="1.5rem">📬 Subscribe to Our Newsletter</Text>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        style={{
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            border: 'none',
                            width: '100%',
                            maxWidth: '400px',
                            fontSize: '1rem',
                        }}
                    />
                    <Button p={3} px={6} rounded="xl">Subscribe</Button>
                </Flex>
            </Section>

            {/* Footer */}
            <Footer>
                &copy; {new Date().getFullYear()} Musegen. All rights reserved.
            </Footer>
        </Box>
    );
};

export default Home;
