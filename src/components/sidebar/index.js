import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import { IoIosHeart } from "react-icons/io";
import { MdLibraryMusic } from "react-icons/md";
import { RiMusicAiFill } from "react-icons/ri";
import { FaFireAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";



export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="profile" className="profile-img" />
      <div>
        < SidebarButton title="Feed" to="/feed" icon={<FaHome/>}/> 
        < SidebarButton title="Favorites" to="/favorites" icon={<IoIosHeart/>}/>
        < SidebarButton title="Library" to="/library" icon={<MdLibraryMusic/>}/>
        < SidebarButton title="Player" to="/player" icon={<RiMusicAiFill/>}/>
        < SidebarButton title="Trending" to="/trending" icon={<FaFireAlt/>}/>
        
      </div>
      < SidebarButton title="Sign Out" to="" icon={<VscSignOut/>}/>
    </div>
  )
}
