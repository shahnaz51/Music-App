// components/MusicPlayer.js
import { useEffect, useRef, useState } from 'react'
import useMusicStore from '../store/musicStore'
import { Box } from '../utils/Box'
import { Button } from '../utils/Button'
import { Text } from '../utils/Text'

const MusicPlayer = () => {
  const {
    currentTrack,
    isPlaying,
    play,
    pause,
    playNext,
    playPrevious,
  } = useMusicStore()

  const audioRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  // Auto-play on track change
  useEffect(() => {
    debugger;
    if (audioRef.current && currentTrack) {
      audioRef.current.play()
      play()
    }
  }, [currentTrack])

  // Play/Pause sync with store
  useEffect(() => {
    if (!audioRef.current) return
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  const togglePlay = () => {
    isPlaying ? pause() : play()
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const newTime = percent * duration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time) =>
    isNaN(time)
      ? '0:00'
      : `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(2, '0')}`

  const handleEnded = () => playNext()

  if (!currentTrack) return null

  return (



    <Box
      bg="surface"
      p={4}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        zIndex: 1000,
        flexWrap: 'wrap',
      }}
    >
      {isExpanded && (
        <Box
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: `url(${currentTrack.cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(30px)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            color: '#fff',
          }}
        >
          {/* Dark overlay */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              zIndex: -1,
            }}
          />

          {/* Close Button */}
          <Button
            onClick={() => setIsExpanded(false)}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              fontSize: '1.5rem',
              background: 'transparent',
              color: '#fff',
            }}
          >
            ✕
          </Button>

          {/* Album Art */}
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            style={{
              width: '60%',
              maxWidth: 320,
              borderRadius: '1rem',
              marginBottom: '2rem',
              boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
            }}
          />

          {/* Song Info */}
          <Text size="1.5rem" style={{ fontWeight: 'bold' }}>
            {currentTrack.title}
          </Text>
          <Text size="1rem" color="textLow" style={{ marginBottom: '2rem' }}>
            {currentTrack.artist}
          </Text>

          {/* Seek Bar */}
          <Box style={{ width: '100%', maxWidth: 500, marginBottom: '1rem' }}>
            <Box
              onClick={handleSeek}
              style={{
                height: 10,
                backgroundColor: '#444',
                borderRadius: 5,
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <Box
                style={{
                  width: `${(currentTime / duration) * 100 || 0}%`,
                  height: '100%',
                  backgroundColor: '#00FFD1',
                  borderRadius: 5,
                  transition: 'width 0.2s ease',
                }}
              />
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                marginTop: 4,
              }}
            >
              <Text>{formatTime(currentTime)}</Text>
              <Text>{formatTime(duration)}</Text>
            </Box>
          </Box>

          {/* Controls */}
          <Box style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
            <Button onClick={playPrevious} style={{ fontSize: '1.5rem' }}>
              ⏮
            </Button>
            <Button
              onClick={togglePlay}
              style={{
                fontSize: '2rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#00FFD1',
                color: '#000',
                borderRadius: '1rem',
              }}
            >
              {isPlaying ? '⏸' : '▶'}
            </Button>
            <Button onClick={playNext} style={{ fontSize: '1.5rem' }}>
              ⏭
            </Button>
          </Box>
        </Box>
      )}


      {/* Track Info */}
      <Box style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          style={{ width: 48, height: 48, borderRadius: '0.5rem', objectFit: 'cover' }}
        />
        <Box>
          <Text size="1rem" style={{ fontWeight: 'bold' }}>
            {currentTrack.title}
          </Text>
          <Text size="0.875rem" color="textLow">
            {currentTrack.artist}
          </Text>
        </Box>
      </Box>

      {/* Controls */}
      <Box style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button onClick={playPrevious} p={2} px={3} rounded="md">
          ⏮
        </Button>
        <Button
          onClick={togglePlay}
          p={2}
          px={4}
          rounded="md"
          style={{ backgroundColor: '#00FFD1', color: '#000' }}
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </Button>
        <Button onClick={playNext} p={2} px={3} rounded="md">
          ⏭
        </Button>
      </Box>

      {/* Seek Bar */}
      <Box
        style={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          maxWidth: 400,
        }}
      >
        <Text size="0.75rem">{formatTime(currentTime)}</Text>
        <Box
          onClick={handleSeek}
          style={{
            flex: 1,
            height: 6,
            backgroundColor: '#333',
            borderRadius: 3,
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <Box
            style={{
              width: `${(currentTime / duration) * 100 || 0}%`,
              height: '100%',
              backgroundColor: '#00FFD1',
              borderRadius: 3,
              transition: 'width 0.2s',
            }}
          />
        </Box>
        <Text size="0.75rem">{formatTime(duration)}</Text>
      </Box>
      { /** Expand Button */}
      <Button
        onClick={() => setIsExpanded(true)}
        p={2}
        px={3}
        rounded="md"
        aria-label="Expand Player"
      >
        ⬆
      </Button>

      <audio
        ref={audioRef}
        src={currentTrack.audio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
    </Box>
  )
}

export default MusicPlayer
