import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

function Header() { 
  return (
    <div className='header'>
        <div className='header_left'>
            <img src="./images/edulogo.png" alt ="" />

            <div className='header_search'>
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className='header_right'>
          <HeaderOption Icon={HomeIcon} title='Home' />
          <HeaderOption  Icon={PeopleIcon} title='My Network' />
          <HeaderOption  Icon={NotificationsIcon} title='Notifications' />
          <HeaderOption  Icon={MessageIcon} title='Message' />
          <HeaderOption avatar='./images/thor' title='me' />
        </div>
    </div>
  )
}

export default Header