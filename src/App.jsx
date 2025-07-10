import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from './pages/Home'
import Listen from './pages/Listen'
import Artist from './pages/Artist'
import Admin from './pages/Admin'
import MusicPlayer from './components/MusicPlayer'
import Newsletter from './components/Newsletter'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <div style={{ minHeight: '100vh', position: 'relative' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listen" element={<Listen />} />
            <Route path="/artists/:name" element={<Artist />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <MusicPlayer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
