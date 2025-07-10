import { create } from 'zustand'
import mockData from '../utils/mockData'

const useMusicStore = create((set, get) => ({
  songs: mockData.songs,
  currentTrack: null,
  isPlaying: false,
  setCurrentTrack: (track) => set({ currentTrack: track, isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  play: () => set({ isPlaying: true }),

  playNext: () => {
    const { songs, currentTrack } = get()
    if (!currentTrack) return
    const index = songs.findIndex(s => s.id === currentTrack.id)
    const nextIndex = (index + 1) % songs.length
    set({ currentTrack: songs[nextIndex], isPlaying: true })
  },

  playPrevious: () => {
    const { songs, currentTrack } = get()
    if (!currentTrack) return
    const index = songs.findIndex(s => s.id === currentTrack.id)
    const prevIndex = (index - 1 + songs.length) % songs.length
    set({ currentTrack: songs[prevIndex], isPlaying: true })
  },
}))

export default useMusicStore
