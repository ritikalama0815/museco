import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import { FcLikePlaceholder } from "react-icons/fc";


export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src='./public/profile.jpg' alt='profile' className='profile-img' />
      <div>
        < SidebarButton title="Favorites" to="/favorites" icon={FcLikePlaceholder}/>
        < SidebarButton/>
        < SidebarButton/>
        < SidebarButton/>
      </div>
      < SidebarButton/>
    </div>
  )
}
