import Nav from './components/Nav'
import { Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArtistsPage from './pages/ArtistsPage'
import TracksPage from './pages/TracksPage'
import AlbumsPage from './pages/AlbumsPage'

function App() {

  return (
    <>
    <main>
    <Nav/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/artists" element={<ArtistsPage/>}/>
      <Route path="/tracks" element={<TracksPage/>}/>
      <Route path="/albums" element={<AlbumsPage/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    </main>
    </>
    )
}

export default App
