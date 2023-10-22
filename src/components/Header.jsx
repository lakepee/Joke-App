import React from 'react'
import icon from '../assets/icon-logo.png'
import homeIcon from '../assets/home-icon.png'
import searchIcon from '../assets/search-icon.png'


export default function Header() {
  return (
    <div className='header'>
        <img src={icon} className='header-logo' alt="Laugh Logo" />
        <img src={homeIcon} className='header-home'  alt="" />
        <div style={{display:"flex", gap: '12px'}}> 
          <img src={searchIcon} alt="search Logo" />
          <input type="text" name='search' placeholder='Search jokes' />
        </div>
    </div>
  )
}
