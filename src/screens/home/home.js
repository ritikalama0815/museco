import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Library from '../library/library'
import Feed from '../feed/feed'
import Trending from '../trending/trending'
import Favorites from '../favorites/favorites'
import Player from '../player/player'
import './home.css'
import Sidebar from '../../components/sidebar'
// import Login from '../auth/login'

export default function Home() {
  return (
    <Router>
      <div className='main-body'>
        {/* <Login />  */}
        <Sidebar />
       <Routes>
         <Route path='/library' element={<Library/>}/>
         <Route path='/feed' element={<Feed/>}/>
         <Route path='/trending' element={<Trending/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
         <Route path='/player' element={<Player/>}/>
        </Routes>
      </div>
    </Router>
  )
}
