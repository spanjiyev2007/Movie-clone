import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {Main, Chanels, VideoDetail, Search, Navbar} from '../'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/chanel/:id' element={<Chanels />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/search/:id' element={<Search />} />
      </Routes>
    </Box> 
  )
}

export default App